"use client";

import { DateIcon } from "components/icons/dateIcon/DateIcon";
import Image from "next/image";
import Link from "next/link";
import { BoardGameType } from "utils/types/boardgame";
import { BoardGameCardTable } from "./BoardGameCardTable";
import { PersonIcon } from "components/icons/personIcon/PersonIcon";
import { TimeIcon } from "components/icons/timeIcon/TimeIcon";
import { AgeV2Icon } from "components/icons/ageIcon/AgeV2Icon";
import { useState, useEffect } from "react";

interface BoardGameCardProps {
  game: BoardGameType;
}

// Fonction utilitaire pour ajouter un délai
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const BoardGameCard = ({ game }: BoardGameCardProps) => {
  const [imgSrc, setImgSrc] = useState<string>("https://picsum.photos/250/250");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGameImage = async () => {
      try {
        await delay(Math.random() * 900 + 100);

        const response = await fetch(
          `https://boardgamegeek.com/xmlapi2/thing?id=${game.id}`
        );

        if (response.status === 429) {
          await delay(2000);
          return fetchGameImage();
        }

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const imageUrl = xmlDoc.querySelector("image")?.textContent;

        if (imageUrl) {
          setImgSrc(imageUrl);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'image:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGameImage();
  }, [game.id]);

  return (
    <Link
      href={`/game/${game.id}`}
      className="boardGameCard p-3 bg-[#332e59] rounded-xl w-full md:max-w-[260px]"
    >
      <div className="boardgameImage gap-x-2 md:gap-x-0 flex flex-row md:flex-col w-full h-full">
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-md">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}
          <Image
            className={`aspect-square rounded-md w-36 h-36 md:w-64 md:h-[200px] ${
              isLoading ? "opacity-0" : "opacity-100"
            } transition-opacity duration-200`}
            src={imgSrc}
            alt={game.name}
            width={246}
            height={300}
            quality={100}
            unoptimized
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
              label={game.yearPublished?.toString() || "-"}
              className="bg-blueOnglet"
            />
            <BoardGameCardTable
              icon={<AgeV2Icon className="w-6 h-6" color="white" />}
              label={game.minAge ? `${game.minAge} ans +` : "-"}
              className="bg-greenOnglet"
            />
            <BoardGameCardTable
              icon={<PersonIcon className="w-6 h-6" color="white" />}
              label={`${game.minPlayers || "-"} - ${game.maxPlayers || "-"}`}
              className="bg-pinkOnglet"
            />
            <BoardGameCardTable
              icon={<TimeIcon className="w-6 h-6" color="white" />}
              label={game.playingTime ? `${game.playingTime} min` : "-"}
              className="bg-orangeOnglet"
            />
          </ul>
        </div>
      </div>
    </Link>
  );
};
