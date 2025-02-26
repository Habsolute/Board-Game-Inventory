"use client";

import { BoardGameCard } from "components/cards/boardGameCard";
import { SearchAndFiltersBarContainer } from "components/searchAndFiltersBarContainer.tsx/SearchAndFiltersBarContainer";
import { useFiltersCollection } from "providers/FiltersCollectionProvider";
import { useState, useEffect } from "react";
import { BoardGameType } from "utils/types/boardgame";

interface CollectionPageContainerProps {
  initialCollection: BoardGameType[];
}

export const CollectionPageContainer = ({
  initialCollection,
}: CollectionPageContainerProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { genreFilter, ageFilter, timeFilter, playersFilter } =
    useFiltersCollection();

  const filteredGames = initialCollection.filter((game) => {
    // Filtre par nom
    const nameMatch = game.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Filtre par nombre de joueurs
    const playersMatch =
      playersFilter.length === 0 ||
      playersFilter.some((playerCount) => {
        const count = parseInt(playerCount.replace("+", ""));
        return game.maxPlayers ? game.maxPlayers >= count : false;
      });

    // Filtre par âge minimum
    const ageMatch =
      ageFilter.length === 0 ||
      ageFilter.some((age) => {
        const minAge = parseInt(age.replace("+", ""));
        return game.minAge ? game.minAge <= minAge : false;
      });

    // Filtre par temps de jeu
    const timeMatch =
      timeFilter.length === 0 ||
      timeFilter.some((time) => {
        const minutes = parseInt(time.split(" ")[0]);
        return game.playingTime ? game.playingTime <= minutes : false;
      });

    return nameMatch && playersMatch && ageMatch && timeMatch;
  });

  console.log("filteredGames", filteredGames);

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
