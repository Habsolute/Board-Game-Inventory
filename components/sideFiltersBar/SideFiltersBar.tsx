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

  const { setAgeFilter, setTimeFilter, setPlayersFilter } =
    useFiltersCollection();

  return (
    <div className="p-4 bg-slate-900 relative w-60 h-full">
      <div className="flex gap-x-4 items-center p-2">
        <h1
          className={` text-white origin-left font-medium text-xl duration-300`}
        >
          Filtres
        </h1>
      </div>

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
    </div>
  );
};
