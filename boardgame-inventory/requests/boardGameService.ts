import { getBoardGameDetails, searchBoardGame } from "./bggApi";
import { BoardGameType } from "utils/types/boardgame";

export async function searchGames(query: string): Promise<BoardGameType[]> {
  try {
    const searchResults = await searchBoardGame(query);

    const games = await Promise.all(
      searchResults.items.item.slice(0, 100).map(async (item) => {
        const details = await getBoardGameDetails(item.$.id);
        const gameDetails = details.items.item[0];

        return {
          id: item.$.id,
          name: gameDetails.name[0].$.value,
          yearPublished: Number(gameDetails.yearpublished?.[0].$.value),
          description: gameDetails.description?.[0],
          image: gameDetails.image?.[0] || "",
          thumbnail: gameDetails.thumbnail?.[0] || "",
          minPlayers: Number(gameDetails.minplayers?.[0].$.value),
          maxPlayers: Number(gameDetails.maxplayers?.[0].$.value),
          playingTime: Number(gameDetails.playingtime?.[0].$.value),
          minAge: Number(gameDetails.minage?.[0].$.value),
        };
      })
    );
    return games;
  } catch (error) {
    console.error("Error fetching board games:", error);
    return [];
  }
}

export async function getGameDetails(
  gameId: string
): Promise<BoardGameType | null> {
  try {
    const details = await getBoardGameDetails(gameId);
    const gameDetails = details.items.item[0];

    return {
      id: gameId,
      name: gameDetails.name[0].$.value,
      yearPublished: Number(gameDetails.yearpublished?.[0].$.value),
      description: gameDetails.description?.[0],
      image: gameDetails.image?.[0],
      thumbnail: gameDetails.thumbnail?.[0],
      minPlayers: Number(gameDetails.minplayers?.[0].$.value),
      maxPlayers: Number(gameDetails.maxplayers?.[0].$.value),
      playingTime: Number(gameDetails.playingtime?.[0].$.value),
    };
  } catch (error) {
    console.error("Error fetching game details:", error);
    return null;
  }
}
