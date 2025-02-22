"use client";

import Image from "next/image";
import { useState } from "react";
import { SideNavigationFilter } from "./SideNavigationFilters";
import { SideNavigationOnglet } from "./SideNavigationOnglet";

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
        <SideNavigationOnglet label="Genre" data={SideNavigationFilter.genre} />

        {/* ---------------------------------Filtre pour l'age ----------------------------- */}
        <SideNavigationOnglet label="Age" data={SideNavigationFilter.age} />

        {/* ---------------------------------Filtre pour temps ----------------------------- */}
        <SideNavigationOnglet label="Temps" data={SideNavigationFilter.time} />

        {/* ---------------------------------Filtre pour joueurs ----------------------------- */}
        <SideNavigationOnglet
          label="Joueurs"
          data={SideNavigationFilter.players}
        />
      </ul>
    </div>
  );
};
