"use client"; // this is a client component

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

export const SideNavBar = () => {
    const [openNavBar, setOpenNavBar] = useState<boolean>(true)
    const [openFilterGenre, setOpenFilterGenre] = useState<boolean>(false)
    const [openFilterAge, setOpenFilterAge] = useState<boolean>(false)
    const [openFilterTime, setOpenFiltertime] = useState<boolean>(false)
    const [openFilterPlayers, setOpenFilterPlayers] = useState<boolean>(false)

    const [genre, setGenre] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [time, setTime] = useState<string>("")
    const [joueurs, setjoueurs] = useState<string>("")

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
        setOpenFilterGenre((prevState) => !prevState)
    }

    const handleFilterAgeOpen = () => {
        setOpenFilterAge((prevState) => !prevState)
    }
    
    const handleFilterTimeOpen = () => {
        setOpenFiltertime((prevState) => !prevState)

    }
    const handleFilterPlayersOpen = () => {
        setOpenFilterPlayers((prevState) => !prevState)

    }

    return (
        <>

            <div className='navbar-play-contain'>
                <div className={`${openNavBar ? "w-64" : "w-20"} duration-500 h-screen p-5 bg-slate-900 relative md:w-30`}>
                    {/* <Image onClick={HandleOpenCloseNavbar} className={`${!openNavBar && "rotate-180"} absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500`} src="/image/img.png" width={30} height={30} alt="" /> */}
                    {/* <Link href={"/"} className='flex gap-x-4 items-center p-2'>
                        <Image className={`cursor-pointer`} src="/image/logo.png" width={30} height={30} alt=""/>
                        <h1 className={`${!openNavBar && "hidden"} text-white origin-left font-medium text-xl duration-300`}>Jeux de Société</h1>
                    </Link> */}
                    <div className='flex gap-x-4 items-center p-2'>
                        {/* <Image className={`cursor-pointer`} src="/image/logo.png" width={30} height={30} alt=""/> */}
                        <h1 className={`${!openNavBar && "hidden"} text-white origin-left font-medium text-xl duration-300`}>Filtre</h1>
                    </div>



                    <ul className="menu">

                        {/* ---------------------------------Filtre pour Genre ----------------------------- */}
                        <li onClick={handleFilterOpen} className="flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700">
                            <div className={`flex`}>
                                <Image className={`mr-4`} src="/image/Chart.png" width={25} height={25} alt="chart" /> 
                                <span className={`${!openNavBar && "hidden"} origin-left duration-200`}>Genre</span>
                                <span>{genre}</span>

                            </div>
                            <div>
                                <Image className={`transition-all ${openFilterGenre ? "rotate-90" : "-rotate-90"} `} src="/image/img.png" width={20} height={20} alt="" />
                            </div>
                                {/* <!-- Dropdown menu --> */}
                        </li>
                            <div id="dropdownNavbar" className={`${!openFilterGenre && "hidden"}  w10 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600`}>
                                <ul className="py-2 text-sm text-sky-900 dark:text-gray-900 font-semibold" aria-labelledby="dropdownLargeButton">
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

                        <li onClick={handleFilterAgeOpen} className="flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700 ">
                            <div className="flex">
                                <Image className={`mr-4`} src="/image/Chart.png" width={25} height={25} alt="chart" /> 
                                <span className={`${!openNavBar && "hidden"} origin-left duration-200`}>Age</span>

                            </div>
                            <div>
                                <Image className={`transition-all ${openFilterAge ? "rotate-90" : "-rotate-90"} `} src="/image/img.png" width={20} height={20} alt="" />
                            </div>
                                {/* <!-- Dropdown menu --> */}
                        </li>
                            <div id="dropdownNavbar" className={`${!openFilterAge && "hidden"} w10 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600`}>
                                <ul className="py-2 text-sm text-sky-900 dark:text-gray-900 font-semibold" aria-labelledby="dropdownLargeButton">
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
                        <li onClick={handleFilterTimeOpen} className="flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700 ">
                            <div className="flex">
                                <Image className={`mr-4`} src="/image/Chart.png" width={25} height={25} alt="chart" /> 
                                <span className={`${!openNavBar && "hidden"} origin-left duration-200`}>Temps</span>

                            </div>
                            <div>
                                <Image className={`transition-all ${openFilterTime ? "rotate-90" : "-rotate-90"} `} src="/image/img.png" width={20} height={20} alt="" />
                            </div>
                                {/* <!-- Dropdown menu --> */}
                        </li>
                            <div id="dropdownNavbar" className={`${!openFilterTime && "hidden"} w10 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600`}>
                                <ul className="py-2 text-sm text-sky-900 dark:text-gray-900 font-semibold" aria-labelledby="dropdownLargeButton">
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

                        <li onClick={handleFilterPlayersOpen} className="flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700 ">
                            <div className="flex">
                                <Image className={`mr-4`} src="/image/Chart.png" width={25} height={25} alt="chart" /> 
                                <span className={`${!openNavBar && "hidden"} origin-left duration-200`}>Joueurs</span>

                            </div>
                            <div>
                                <Image className={`transition-all ${openFilterPlayers ? "rotate-90" : "-rotate-90"} `} src="/image/img.png" width={20} height={20} alt="" />
                            </div>
                                {/* <!-- Dropdown menu --> */}
                        </li>
                            <div id="dropdownNavbar" className={`${!openFilterPlayers && "hidden"} w10 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600`}>
                                <ul className="py-2 text-sm text-sky-900 dark:text-gray-900 font-semibold" aria-labelledby="dropdownLargeButton">
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
    // <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    //     <div className="container flex flex-wrap items-center justify-between mx-auto">
    //         <a href="https://flowbite.com/" className="flex items-center">
    //             <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
    //             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    //         </a>
    //     <div className="flex items-center md:order-2">
    //         <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
    //             <svg className="w-5 h-5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use href="#a" y="420"/><use xlinkHref="#a" y="840"/><use xlinkHref="#a" y="1260"/></g><use href="#a" y="1680"/></g><use xlinkHref="#b" x="247" y="210"/></g><use xlinkHref="#c" x="494"/></g><use href="#d" x="988"/><use xlinkHref="#c" x="1976"/><use xlinkHref="#e" x="2470"/></g></svg>
    //             English (US)
    //         </button>
    //         {/* <!-- Dropdown --> */}
    //         <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
    //             <ul className="py-2" role="none">
    //                 <li>
    //                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
    //                         <div className="inline-flex items-center">
    //                             <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/></g></svg>              
    //                             English (US)
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li>
    //                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
    //                         <div className="inline-flex items-center">
    //                             <svg className="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"/><path d="M0 0h512v170.7H0z"/><path fill="#d00" d="M0 170.7h512v170.6H0z"/></svg>
    //                         Deutsch
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li>
    //                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
    //                         <div className="inline-flex items-center">
    //                             <svg className="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z"/><path fill="#009246" d="M0 0h170.7v512H0z"/><path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/></g></svg>              
    //                             Italiano
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li>
    //                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
    //                         <div className="inline-flex items-center">
    //                             <svg className="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512"><defs><path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"/></defs><path fill="#de2910" d="M0 0h512v512H0z"/><use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlinkHref="#a"/><use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlinkHref="#a"/><use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlinkHref="#a"/><use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlinkHref="#a"/><use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlinkHref="#a"/></svg>
    //                             中文 (繁體)
    //                         </div>
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //             <button data-collapse-toggle="mobile-menu-language-select" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-language-select" aria-expanded="false">
    //             <span className="sr-only">Open main menu</span>
    //             <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //             </button>
    //         </div>
    //         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
    //             <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //              <li>
    //                     <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
    //                 </li>
    //                 <li>
    //                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
    //                 </li>
    //                 <li>
    //                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
    //                 </li>
    //                 <li>
    //                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
    //                 </li>
    //                 <li>
    //                     <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
    //                 </li>
    //              </ul>
    //         </div>
    //     </div>
    // </nav>

    )
}