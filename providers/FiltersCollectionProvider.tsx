"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { SideFiltersOngletsData } from "../components/sideFiltersBar/SideFiltersOngletsData";

interface FiltersCollectionContextType {
  selectedFilters: string[];
  openFilters: { [key: string]: boolean };
  handleFilterClick: (filterName: string) => void;
  handleFilterOpen: (label: string) => void;
  clearFilters: () => void;
  genreFilter: string[];
  ageFilter: string[];
  timeFilter: string[];
  playersFilter: string[];
  setGenreFilter: (filter: string[]) => void;
  setAgeFilter: (filter: string[]) => void;
  setTimeFilter: (filter: string[]) => void;
  setPlayersFilter: (filter: string[]) => void;
}

const FiltersCollectionContext = createContext<
  FiltersCollectionContextType | undefined
>(undefined);

export function FiltersCollectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [genreFilter, setGenreFilter] = useState<string[]>([]);
  const [ageFilter, setAgeFilter] = useState<string[]>([]);
  const [timeFilter, setTimeFilter] = useState<string[]>([]);
  const [playersFilter, setPlayersFilter] = useState<string[]>([]);

  const handleFilterClick = (filterName: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filterName)) {
        return prevFilters.filter((filter) => filter !== filterName);
      }
      return [...prevFilters, filterName];
    });
  };

  const handleFilterOpen = (label: string) => {
    setOpenFilters((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <FiltersCollectionContext.Provider
      value={{
        selectedFilters,
        openFilters,
        handleFilterClick,
        handleFilterOpen,
        clearFilters,
        genreFilter,
        setGenreFilter,
        ageFilter,
        setAgeFilter,
        timeFilter,
        setTimeFilter,
        playersFilter,
        setPlayersFilter,
      }}
    >
      {children}
    </FiltersCollectionContext.Provider>
  );
}

export function useFiltersCollection() {
  const context = useContext(FiltersCollectionContext);
  if (context === undefined) {
    throw new Error(
      "useFiltersCollection must be used within a FiltersCollectionProvider"
    );
  }
  return context;
}
