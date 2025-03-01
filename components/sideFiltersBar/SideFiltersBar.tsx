"use client";

import Image from "next/image";
import { useState } from "react";
import { SideFiltersOnglet } from "./SideFiltersOnglet";
import { DateIcon } from "components/icons/dateIcon/DateIcon";
import { PersonIcon } from "components/icons/personIcon/PersonIcon";
import { TimeIcon } from "components/icons/timeIcon/TimeIcon";
import { AgeIcon } from "components/icons/ageIcon/AgeIcon";
import { GenreIcon } from "components/icons/genreIcon/GenreIcon";
import { SideFiltersOngletsData } from "./SideFiltersOngletsData";
import { useFiltersCollection } from "providers/FiltersCollectionProvider";

export const SideFiltersBar = () => {
  /**
   *  Pour les filtre, Rajouter le genre, age, temps et joueurs quand il est sélectionner dans la barre de naivation
   * La personne va pourvoir désélectionner en pesant sur un x
   * Si possible le metre dans la barre de navigation de hauche.
   */

  const [isOpen, setIsOpen] = useState(false);
  const { setAgeFilter, setTimeFilter, setPlayersFilter } =
    useFiltersCollection();

  const filtersContent = (
    <ul className="menu">
      {/* ---------------------------------Filtre pour Genre ----------------------------- */}
      {/* <SideFiltersOnglet
        icon={<GenreIcon className="w-6 h-6" color="white" />}
        label="Genre"
        data={SideFiltersOngletsData.genre}
        backgroundColorIfSelected="blueOnglet"
        onFilterChange={(filter) => setGenreFilter(filter)}
      /> */}

      {/* ---------------------------------Filtre pour l'age ----------------------------- */}
      <SideFiltersOnglet
        icon={<AgeIcon className="w-6 h-6" color="white" />}
        label="Age"
        data={SideFiltersOngletsData.age}
        backgroundColorIfSelected="blueOnglet"
        onFilterChange={(filter) => setAgeFilter(filter)}
        color="greenOnglet"
      />

      {/* ---------------------------------Filtre pour temps ----------------------------- */}
      <SideFiltersOnglet
        icon={<TimeIcon className="w-6 h-6" color="white" />}
        label="Temps"
        data={SideFiltersOngletsData.time}
        backgroundColorIfSelected="blueOnglet"
        onFilterChange={(filter) => setTimeFilter(filter)}
        color="orangeOnglet"
      />

      {/* ---------------------------------Filtre pour joueurs ----------------------------- */}
      <SideFiltersOnglet
        icon={<PersonIcon className="w-6 h-6" color="white" />}
        label="Joueurs"
        data={SideFiltersOngletsData.players}
        backgroundColorIfSelected="blueOnglet"
        onFilterChange={(filter) => setPlayersFilter(filter)}
        color="pinkOnglet"
      />
    </ul>
  );

  const mobileFiltersContent = (
    <div
      className={`fixed inset-0 bg-slate-900 z-50 overflow-y-auto transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white font-medium text-xl">Filtres</h1>
          <button onClick={() => setIsOpen(false)} className="text-white p-2">
            ✕
          </button>
        </div>
        {filtersContent}
      </div>
    </div>
  );

  const desktopFiltersContent = (
    <div className="p-4 bg-slate-900 relative w-60 h-full">
      <div className="flex gap-x-4 items-center p-2">
        <h1 className="text-white origin-left font-medium text-xl duration-300">
          Filtres
        </h1>
      </div>
      {filtersContent}
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-slate-900 text-white p-4 rounded-full shadow-lg md:hidden z-40"
      >
        Filtres
      </button>

      <div className="hidden md:block">{desktopFiltersContent}</div>
      <div className="md:hidden">{mobileFiltersContent}</div>
    </>
  );
};
