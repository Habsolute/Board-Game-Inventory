"use client"; // this is a client component

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const SideNavBar = () => {
  const [openNavBar, setOpenNavBar] = useState<boolean>(true);
  const [openFilterGenre, setOpenFilterGenre] = useState<boolean>(false);
  const [openFilterAge, setOpenFilterAge] = useState<boolean>(false);
  const [openFilterTime, setOpenFiltertime] = useState<boolean>(false);
  const [openFilterPlayers, setOpenFilterPlayers] = useState<boolean>(false);

  const [genre, setGenre] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [joueurs, setjoueurs] = useState<string>("");

  /**
   *  Pour les filtre, Rajouter le genre, age, temps et joueurs quand il est sélectionner dans la barre de naivation
   * La personne va pourvoir désélectionner en pesant sur un x
   * Si possible le metre dans la barre de navigation de hauche.
   * MAGALO
   */

  // const HandleOpenCloseNavbar = () => {
  //     setOpenNavBar((prevState) => !prevState)
  // }

  const handleFilterOpen = () => {
    setOpenFilterGenre((prevState) => !prevState);
  };

  const handleFilterAgeOpen = () => {
    setOpenFilterAge((prevState) => !prevState);
  };

  const handleFilterTimeOpen = () => {
    setOpenFiltertime((prevState) => !prevState);
  };
  const handleFilterPlayersOpen = () => {
    setOpenFilterPlayers((prevState) => !prevState);
  };

  return (
    <>
      <div className="navbar-play-contain">
        <div
          className={`${
            openNavBar ? "w-64" : "w-20"
          } duration-500 h-screen p-5 bg-slate-900 relative md:w-30`}
        >
          {/* <Image onClick={HandleOpenCloseNavbar} className={`${!openNavBar && "rotate-180"} absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500`} src="/image/img.png" width={30} height={30} alt="" /> */}
          {/* <Link href={"/"} className='flex gap-x-4 items-center p-2'>
                        <Image className={`cursor-pointer`} src="/image/logo.png" width={30} height={30} alt=""/>
                        <h1 className={`${!openNavBar && "hidden"} text-white origin-left font-medium text-xl duration-300`}>Jeux de Société</h1>
                    </Link> */}
          <div className="flex gap-x-4 items-center p-2">
            {/* <Image className={`cursor-pointer`} src="/image/logo.png" width={30} height={30} alt=""/> */}
            <h1
              className={`${
                !openNavBar && "hidden"
              } text-white origin-left font-medium text-xl duration-300`}
            >
              Filtre
            </h1>
          </div>

          <ul className="menu">
            {/* ---------------------------------Filtre pour Genre ----------------------------- */}
            <li
              onClick={handleFilterOpen}
              className="flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700"
            >
              <div className={`flex`}>
                <Image
                  className={`mr-4`}
                  src="/image/Chart.png"
                  width={25}
                  height={25}
                  alt="chart"
                />
                <span
                  className={`${
                    !openNavBar && "hidden"
                  } origin-left duration-200`}
                >
                  Genre
                </span>
                <span>{genre}</span>
              </div>
              <div>
                <Image
                  className={`transition-all ${
                    openFilterGenre ? "rotate-90" : "-rotate-90"
                  } `}
                  src="/image/img.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              {/* <!-- Dropdown menu --> */}
            </li>
            <div
              id="dropdownNavbar"
              className={`${
                !openFilterGenre && "hidden"
              }  w10 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600`}
            >
              <ul
                className="py-2 text-sm text-sky-900 dark:text-gray-900 font-semibold"
                aria-labelledby="dropdownLargeButton"
              >
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Plateau
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Carte
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Coopération
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Adresse
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Connaissances
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Mémoire
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Stratégie
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Dès
                </li>
              </ul>
            </div>

            {/* ---------------------------------Filtre pour l'age ----------------------------- */}

            <li
              onClick={handleFilterAgeOpen}
              className="flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700 "
            >
              <div className="flex">
                <Image
                  className={`mr-4`}
                  src="/image/Chart.png"
                  width={25}
                  height={25}
                  alt="chart"
                />
                <span
                  className={`${
                    !openNavBar && "hidden"
                  } origin-left duration-200`}
                >
                  Age
                </span>
              </div>
              <div>
                <Image
                  className={`transition-all ${
                    openFilterAge ? "rotate-90" : "-rotate-90"
                  } `}
                  src="/image/img.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              {/* <!-- Dropdown menu --> */}
            </li>
            <div
              id="dropdownNavbar"
              className={`${
                !openFilterAge && "hidden"
              } w10 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600`}
            >
              <ul
                className="py-2 text-sm text-sky-900 dark:text-gray-900 font-semibold"
                aria-labelledby="dropdownLargeButton"
              >
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  5 ans et moins
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  7 ans et moins
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  8+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  10+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  12+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  14+
                </li>
              </ul>
            </div>

            {/* ---------------------------------Filtre pour temps ----------------------------- */}
            <li
              onClick={handleFilterTimeOpen}
              className="flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700 "
            >
              <div className="flex">
                <Image
                  className={`mr-4`}
                  src="/image/Chart.png"
                  width={25}
                  height={25}
                  alt="chart"
                />
                <span
                  className={`${
                    !openNavBar && "hidden"
                  } origin-left duration-200`}
                >
                  Temps
                </span>
              </div>
              <div>
                <Image
                  className={`transition-all ${
                    openFilterTime ? "rotate-90" : "-rotate-90"
                  } `}
                  src="/image/img.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              {/* <!-- Dropdown menu --> */}
            </li>
            <div
              id="dropdownNavbar"
              className={`${
                !openFilterTime && "hidden"
              } w10 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600`}
            >
              <ul
                className="py-2 text-sm text-sky-900 dark:text-gray-900 font-semibold"
                aria-labelledby="dropdownLargeButton"
              >
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Moins de 30 Minutes
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Moins 40 Minutes
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Moins 60 Minutes
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Moins 90 Minutes
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Plus de 90 Minutes
                </li>
              </ul>
            </div>

            {/* --------------------------Filtre pour Nombre de joueurs ----------------------------- */}

            <li
              onClick={handleFilterPlayersOpen}
              className="flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700 "
            >
              <div className="flex">
                <Image
                  className={`mr-4`}
                  src="/image/Chart.png"
                  width={25}
                  height={25}
                  alt="chart"
                />
                <span
                  className={`${
                    !openNavBar && "hidden"
                  } origin-left duration-200`}
                >
                  Joueurs
                </span>
              </div>
              <div>
                <Image
                  className={`transition-all ${
                    openFilterPlayers ? "rotate-90" : "-rotate-90"
                  } `}
                  src="/image/img.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              {/* <!-- Dropdown menu --> */}
            </li>
            <div
              id="dropdownNavbar"
              className={`${
                !openFilterPlayers && "hidden"
              } w10 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600`}
            >
              <ul
                className="py-2 text-sm text-sky-900 dark:text-gray-900 font-semibold"
                aria-labelledby="dropdownLargeButton"
              >
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  Solo
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  2+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  3+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  4+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  5+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  6+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  7+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  8+
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
                  10+
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
