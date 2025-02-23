import { DateIcon } from "components/icons/dateIcon/DateIcon";
import Image from "next/image";
import Link from "next/link";
import { BoardGameType } from "utils/types/boardgame";
import { BoardGameCardTable } from "./BoardGameCardTable";
import { PersonIcon } from "components/icons/personIcon/PersonIcon";
import { TimeIcon } from "components/icons/timeIcon/TimeIcon";

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
      <div className="boardgameImage flex flex-col h-full">
        <div>
          <Image
            className="rounded-md"
            src={
              game.image || game.thumbnail || "https://picsum.photos/250/250"
            }
            alt={game.name}
            width={1000}
            height={1000}
            quality={100}
          />
          <div className="infos p-2 flex flex-1 flex-col justify-between h-full">
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
              backgroundColor="#2563eb"
            />
            <BoardGameCardTable
              icon={<PersonIcon className="w-6 h-6" color="white" />}
              label={`${game.minPlayers} - ${game.maxPlayers}`}
              backgroundColor="#db2777"
            />
            <BoardGameCardTable
              icon={<TimeIcon className="w-6 h-6" color="white" />}
              label={`${game.playingTime} min`}
              backgroundColor="#ea580c"
            />
          </ul>
        </div>
      </div>
    </Link>
  );
};
