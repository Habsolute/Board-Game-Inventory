import Image from "next/image";
import { useState } from "react";
import { SideNavigationFilter } from "./SideNavigationFilters";

interface SideNavigationOngletProps {
  label: string;
  data: SideNavigationFilter[];
  icon: React.ReactNode;
}

export const SideNavigationOnglet = ({
  label,
  data,
  icon,
}: SideNavigationOngletProps) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const handleFilterOpen = () => {
    setOpenFilter((prevState) => !prevState);
  };
  return (
    <>
      <li
        onClick={handleFilterOpen}
        className="flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700"
      >
        <div className="flex gap-2">
          {icon}
          <span className={`origin-left duration-200`}>{label}</span>
        </div>
        <div>
          <Image
            className={`transition-all ${
              openFilter ? "rotate-90" : "-rotate-90"
            } `}
            src="/image/img.png"
            width={20}
            height={20}
            alt=""
          />
        </div>
      </li>

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdownNavbar"
        className={`${
          !openFilter && "hidden"
        }  w10 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600`}
      >
        <ul
          className="py-2 text-sm text-sky-900 dark:text-gray-900 font-semibold"
          aria-labelledby="dropdownLargeButton"
        >
          {data.map((item) => (
            <li
              key={item.name}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
