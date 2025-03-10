import Papa from "papaparse";
import { promises as fs } from "fs";
import path from "path";
import { BoardGameType } from "./types/boardgame";

export function convertCsvToGameData(csvGame: any): BoardGameType {
  return {
    id: csvGame.objectid,
    name: csvGame.objectname,
    yearPublished: csvGame.yearpublished
      ? parseInt(csvGame.yearpublished)
      : null,
    description: csvGame.comment || "",
    imageId: csvGame.imageid || "",
    pictureId: csvGame.pictureid || "",
    image: csvGame.image || "", // Utilisons l'URL directe si elle existe
    thumbnail: csvGame.thumbnail || "", // Utilisons l'URL directe si elle existe
    minPlayers: csvGame.minplayers ? parseInt(csvGame.minplayers) : null,
    maxPlayers: csvGame.maxplayers ? parseInt(csvGame.maxplayers) : null,
    playingTime: csvGame.playingtime ? parseInt(csvGame.playingtime) : null,
    minAge: csvGame.bggrecagerange
      ? parseInt(csvGame.bggrecagerange.split("+")[0])
      : null,
    status: {
      own: csvGame.own === "1",
      forTrade: csvGame.fortrade === "1",
      want: csvGame.want === "1",
      wantToPlay: csvGame.wanttoplay === "1",
    },
  };
}

export async function getCollection(): Promise<BoardGameType[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "collection.csv");
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { data } = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
      // Ajout de l'option transform pour voir les données brutes
      transform: (value, field) => {
        return value;
      },
    });

    // Debug log pour voir les données après le parsing

    return data
      .filter((game: any) => game.own === "1")
      .map(convertCsvToGameData);
  } catch (error) {
    console.error("Erreur lors de la lecture de la collection:", error);
    return [];
  }
}
