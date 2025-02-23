"use client";

import Image from "next/image";
import { useState } from "react";
import { SideNavigationFilter } from "./SideNavigationFilters";
import { SideNavigationOnglet } from "./SideNavigationOnglet";
import { DateIcon } from "components/icons/dateIcon/DateIcon";
import { PersonIcon } from "components/icons/personIcon/PersonIcon";
import { TimeIcon } from "components/icons/timeIcon/TimeIcon";
import { AgeIcon } from "components/icons/ageIcon/AgeIcon";
import { GenreIcon } from "components/icons/genreIcon/GenreIcon";

export const SideNavBar = () => {
  /**
   *  Pour les filtre, Rajouter le genre, age, temps et joueurs quand il est sélectionner dans la barre de naivation
   * La personne va pourvoir désélectionner en pesant sur un x
   * Si possible le metre dans la barre de navigation de hauche.
   * MAGALO
   */

  return (
    <div className={`h-screen p-4 bg-slate-900 relative w-60`}>
      <div className="flex gap-x-4 items-center p-2">
        <h1
          className={` text-white origin-left font-medium text-xl duration-300`}
        >
          Filtre
        </h1>
      </div>

      <ul className="menu">
        {/* ---------------------------------Filtre pour Genre ----------------------------- */}
        <SideNavigationOnglet
          icon={<GenreIcon className="w-6 h-6" color="white" />}
          label="Genre"
          data={SideNavigationFilter.genre}
        />

        {/* ---------------------------------Filtre pour l'age ----------------------------- */}
        <SideNavigationOnglet
          icon={<AgeIcon className="w-6 h-6" color="white" />}
          label="Age"
          data={SideNavigationFilter.age}
        />

        {/* ---------------------------------Filtre pour temps ----------------------------- */}
        <SideNavigationOnglet
          icon={<TimeIcon className="w-6 h-6" color="white" />}
          label="Temps"
          data={SideNavigationFilter.time}
        />

        {/* ---------------------------------Filtre pour joueurs ----------------------------- */}
        <SideNavigationOnglet
          icon={<PersonIcon className="w-6 h-6" color="white" />}
          label="Joueurs"
          data={SideNavigationFilter.players}
        />
      </ul>
    </div>
  );
};
