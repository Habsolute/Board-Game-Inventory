import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { SideFiltersOngletsData } from "./SideFiltersOngletsData";
import classNames from "classnames";
import { TimeIcon } from "components/icons/timeIcon/TimeIcon";
import { DeleteIcon } from "components/icons/deleteIcon/DeleteIcon";
interface SideNavigationOngletProps {
  label: string;
  data: SideFiltersOngletsData[];
  icon: React.ReactNode;
  backgroundColorIfSelected: string;
  onFilterChange: (filter: string[]) => void;
  color?: string;
}

export const SideFiltersOnglet = ({
  label,
  data,
  icon,
  backgroundColorIfSelected,
  onFilterChange,
  color,
}: SideNavigationOngletProps) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterOpen = () => {
    setOpenFilter((prevState) => !prevState);
  };

  const handleFilterClick = (filterName: string) => {
    setSelectedFilter((prevFilter) => {
      const newFilter = prevFilter === filterName ? "" : filterName;
      onFilterChange(newFilter ? [newFilter] : []);
      return newFilter;
    });
  };

  return (
    <div className="border-b-4 pb-2 border-white">
      <li
        onClick={handleFilterOpen}
        className={classNames(
          // "flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700",
          `flex justify-between p-4 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items  bg-${color}`
        )}
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
              className={classNames(
                // "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white cursor-pointer",
                `flex justify-between items-center px-4 py-2 hover:bg-${color} dark:hover:text-white cursor-pointer`,
                {
                  [`bg-${color} dark:bg-${color} dark:text-white`]:
                    selectedFilter === item.name,
                }
              )}
              onClick={() => handleFilterClick(item.name)}
            >
              {item.name}
              {selectedFilter === item.name && (
                <DeleteIcon className="w-7 h-7" color="white" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
