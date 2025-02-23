"use client";

import { BoardGameCard } from "components/cards/boardGameCard";
import { SearchAndFiltersBarContainer } from "components/searchAndFiltersBarContainer.tsx/SearchAndFiltersBarContainer";
import { SearchGamesIntoCollection } from "components/searchGamesIntoCollection/SearchGamesIntoCollection";
import { useState } from "react";
import { BoardGameType } from "utils/types/boardgame";

interface CollectionPageContainerProps {
  initialCollection: BoardGameType[];
}

export const CollectionPageContainer = ({
  initialCollection,
}: CollectionPageContainerProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = initialCollection.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4 max-h-[calc(100vh-100px)] min-h-[calc(100vh-100px)] overflow-y-auto">
      <SearchAndFiltersBarContainer
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      <div className="grid grid-cols-5 gap-4 px-4">
        {filteredGames.map((game) => (
          <BoardGameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};
