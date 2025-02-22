import Image from "next/image";
import Link from "next/link";
import { BoardGameType } from "utils/types/boardgame";

interface BoardGameCardProps {
  game: BoardGameType;
}

export const BoardGameCard = ({ game }: BoardGameCardProps) => {
  return (
    <Link
      href={`/game/${game.id}`}
      style={{ maxWidth: "260px" }}
      className="boardGameCard p-3 bg-[#332e59] rounded-xl"
    >
      <div className="boardgameImage">
        <Image
          className="rounded-md"
          src={game.image || game.thumbnail || "https://picsum.photos/250/250"}
          alt={game.name}
          width={1000}
          height={1000}
          quality={100}
        />
        <div className="infos p-2 flex flex-col justify-between">
          <div className="title text-lg">
            <h5 className="text-center">{game.name}</h5>
          </div>
          <div className="category">
            <ul className="flex flex-wrap justify-between mt-4">
              <li className="px-3 py-0.5 ml-2 mt-2 bg-blue-600 rounded-xl text-white text-sm flex">
                <Image
                  className="mr-1"
                  src="/image/Chart.png"
                  alt=""
                  width={20}
                  height={20}
                />
                {game.yearPublished}
              </li>
              <li className="px-3 py-0.5 ml-2 mt-2 bg-pink-600 rounded-xl text-white text-sm flex">
                <Image
                  className="mr-1"
                  src="/image/Chart.png"
                  alt=""
                  width={20}
                  height={20}
                />
                {`${game.minPlayers} - ${game.maxPlayers}`}
              </li>
              <li className="px-3 py-0.5 ml-2 mt-2 bg-orange-600 rounded-xl text-white text-sm flex">
                <Image
                  className="mr-1"
                  src="/image/Chart.png"
                  alt=""
                  width={20}
                  height={20}
                />
                {`${game.playingTime}min`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};
