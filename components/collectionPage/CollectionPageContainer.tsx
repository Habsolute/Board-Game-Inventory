"use client";

import { BoardGameCard } from "components/cards/boardGameCard";
import { SearchAndFiltersBarContainer } from "components/searchAndFiltersBarContainer.tsx/SearchAndFiltersBarContainer";
import { useState, useMemo } from "react";
import { BoardGameType } from "utils/types/boardgame";
import { useFiltersCollection } from "providers/FiltersCollectionProvider";

interface CollectionPageContainerProps {
  initialCollection: BoardGameType[];
}

export const CollectionPageContainer = ({
  initialCollection,
}: CollectionPageContainerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { genreFilter, ageFilter, timeFilter, playersFilter } =
    useFiltersCollection();

  // Utiliser useMemo pour éviter de recréer la liste filtrée à chaque rendu
  const filteredGames = useMemo(() => {
    return initialCollection.filter((game) => {
      const nameMatch = game.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      // ... autres filtres ...
      return nameMatch;
    });
  }, [initialCollection, searchTerm]); // Ajouter les autres dépendances si nécessaire

  return (
    <div className="flex flex-col flex-1 gap-4 max-h-[calc(100vh-100px)] min-h-full overflow-y-auto">
      <SearchAndFiltersBarContainer
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      <div className="flex flex-wrap justify-between gap-4 px-4">
        {filteredGames.map((game) => (
          <BoardGameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};
