import Image from "next/image";
import { useState } from "react";
import { SideFiltersOngletsData } from "./SideFiltersOngletsData";
import classNames from "classnames";
interface SideNavigationOngletProps {
  label: string;
  data: SideFiltersOngletsData[];
  icon: React.ReactNode;
  backgroundColorIfSelected: string;
}

export const SideFiltersOnglet = ({
  label,
  data,
  icon,
  backgroundColorIfSelected,
}: SideNavigationOngletProps) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const handleFilterOpen = () => {
    setOpenFilter((prevState) => !prevState);
  };

  const handleFilterClick = (filterName: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filterName)) {
        return prevFilters.filter((filter) => filter !== filterName);
      }
      return [...prevFilters, filterName];
    });
  };

  console.log(selectedFilters);

  return (
    <>
      <li
        onClick={handleFilterOpen}
        className={classNames(
          "flex justify-between p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 rounded-md mt-2 menu-items hover:bg-gray-700",
          {
            [`hoverbg-${backgroundColorIfSelected}`]: openFilter,
          }
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
                "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer",
                {
                  "bg-gray-100 dark:bg-gray-800 dark:text-white":
                    selectedFilters.includes(item.name),
                }
              )}
              onClick={() => handleFilterClick(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
