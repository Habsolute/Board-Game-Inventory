import { DateIcon } from "components/icons/dateIcon/DateIcon";
import Image from "next/image";
import Link from "next/link";
import { BoardGameType } from "utils/types/boardgame";
import { BoardGameCardTable } from "./BoardGameCardTable";
import { PersonIcon } from "components/icons/personIcon/PersonIcon";
import { TimeIcon } from "components/icons/timeIcon/TimeIcon";
import { AgeV2Icon } from "components/icons/ageIcon/AgeV2Icon";

interface BoardGameCardProps {
  game: BoardGameType;
}

export const BoardGameCard = ({ game }: BoardGameCardProps) => {
  return (
    <Link
      href={`/game/${game.id}`}
      className="boardGameCard p-3 bg-[#332e59] rounded-xl w-full md:max-w-[260px]"
    >
      <div className="boardgameImage gap-x-2 md:gap-x-0 flex flex-row md:flex-col w-full h-full">
        <div>
          <Image
            className="aspect-square rounded-md w-36 h-36 md:w-64 md:h-[200px]"
            src={
              game.image || game.thumbnail || "https://picsum.photos/250/250"
            }
            alt={game.name}
            width={1000}
            height={1000}
            quality={100}
          />
          <div className="infos p-2 flex-1 flex-col justify-between h-full hidden md:block">
            <div className="title text-lg">
              <h5 className="text-center">{game.name}</h5>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col justify-end space-y-2 h-full">
            <BoardGameCardTable
              icon={<DateIcon className="w-6 h-6" color="white" />}
              label={game.yearPublished?.toString() || ""}
              className="bg-blueOnglet"
            />
            <BoardGameCardTable
              icon={<AgeV2Icon className="w-6 h-6" color="white" />}
              label={`${game.minAge} ans +`}
              className="bg-greenOnglet"
            />
            <BoardGameCardTable
              icon={<PersonIcon className="w-6 h-6" color="white" />}
              label={`${game.minPlayers} - ${game.maxPlayers}`}
              className="bg-pinkOnglet"
            />
            <BoardGameCardTable
              icon={<TimeIcon className="w-6 h-6" color="white" />}
              label={`${game.playingTime} min`}
              className="bg-orangeOnglet"
            />
          </ul>
        </div>
      </div>
    </Link>
  );
};
