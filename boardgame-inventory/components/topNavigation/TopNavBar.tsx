import Image from "next/image";
import Link from "next/link";
import { TopNavigationOnglet } from "./TopNavigationOnglet";
import { TopNavigationRoute } from "./TopNavigationRoute";

export const TopNavBar = () => {
  return (
    <nav className="w-100 bg-slate-900 flex justify-between p-5">
      <div className="logo">
        <Link href={"/"} className="flex gap-x-4 items-center p-2">
          <Image
            className={`cursor-pointer`}
            src="/image/logo.png"
            width={30}
            height={30}
            alt=""
          />
          <h1
            className={` text-white origin-left font-medium text-xl duration-300`}
          >
            Jeux de Société
          </h1>
        </Link>
      </div>
      <div className="flex text-base">
        <ul className="flex justify-end text-white font-bold mr-14 ">
          {Object.entries(TopNavigationRoute).map(([key, value]) => (
            <TopNavigationOnglet key={key} label={key} href={value} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
