import {
  getBoardGameCollection,
  getBoardGameDetails,
  searchBoardGame,
} from "./bggApi";
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
      minAge: Number(gameDetails.minage?.[0].$.value),
    };
  } catch (error) {
    console.error("Error fetching game details:", error);
    return null;
  }
}

export async function getUserCollection(
  username: string
): Promise<BoardGameType[]> {
  try {
    // Première tentative de récupération
    let collection = await getBoardGameCollection(username);

    // Si l'API retourne un code 202, on attend et on réessaie
    let retries = 3;
    while ((!collection || !collection.items) && retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Attendre 1 seconde
      collection = await getBoardGameCollection(username);
      retries--;
    }

    // Vérifier si nous avons des items
    if (!collection?.items?.item) {
      console.log("No items found in collection");
      return [];
    }

    // Assurer que item est toujours un tableau
    const items = Array.isArray(collection.items.item)
      ? collection.items.item
      : [collection.items.item];

    const games = await Promise.all(
      items.map(async (item) => {
        try {
          const details = await getBoardGameDetails(item.$.objectid);
          const gameDetails = details.items.item[0];

          const game: BoardGameType = {
            id: item.$.objectid,
            name: gameDetails.name[0].$.value,
            yearPublished:
              Number(gameDetails.yearpublished?.[0]?.$.value) || null,
            description: gameDetails.description?.[0] || "",
            image: gameDetails.image?.[0] || "",
            thumbnail: gameDetails.thumbnail?.[0] || "",
            minPlayers: Number(gameDetails.minplayers?.[0]?.$.value) || null,
            maxPlayers: Number(gameDetails.maxplayers?.[0]?.$.value) || null,
            playingTime: Number(gameDetails.playingtime?.[0]?.$.value) || null,
            minAge: Number(gameDetails.minage?.[0]?.$.value) || null,
            status: {
              own: item.status?.[0]?.$.own === "1",
              forTrade: item.status?.[0]?.$.fortrade === "1",
              want: item.status?.[0]?.$.want === "1",
              wantToPlay: item.status?.[0]?.$.wanttoplay === "1",
            },
          };
          return game;
        } catch (error) {
          console.error(`Error processing game ${item.$.objectid}:`, error);
          return null;
        }
      })
    );

    return games.filter((game): game is BoardGameType => game !== null);
  } catch (error) {
    console.error("Error fetching user collection:", error);
    return [];
  }
}
