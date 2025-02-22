"use client";
import { useState } from "react";
import { searchGames } from "requests/boardGameService";
import { BoardGameType } from "utils/types/boardgame";

export default function SearchGames({
  onResults,
}: {
  onResults: (games: BoardGameType[]) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (query.length < 2) return;
    setLoading(true);
    try {
      const results = await searchGames(query);
      onResults(results);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="search"
        placeholder="Search board games..."
        onChange={(e) => handleSearch(e.target.value)}
        className="p-2 rounded border"
      />
      {loading && <span className="ml-2">Loading...</span>}
    </div>
  );
}
