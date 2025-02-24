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
    let retries = 5;
    let delay = 2000;
    let collection = null;

    // Première tentative
    collection = await getBoardGameCollection(username);
    console.log(
      "Initial collection response:",
      collection ? "received" : "null"
    );

    // Tant qu'on a un statut 202 ou pas de collection, on réessaie
    while ((!collection || !collection.items) && retries > 0) {
      console.log(`Retrying... ${retries} attempts left. Waiting ${delay}ms`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      collection = await getBoardGameCollection(username);
      retries--;
      delay = Math.min(delay * 1.5, 10000);
    }

    if (!collection?.items?.item) {
      console.log("No items found in collection after all retries");
      return [];
    }

    const items = Array.isArray(collection.items.item)
      ? collection.items.item
      : [collection.items.item];

    console.log(`Processing ${items.length} games from collection`);

    // Traiter tous les jeux en une seule fois
    const gamesResults = await Promise.all(
      items.map(async (item) => {
        try {
          const details = await getBoardGameDetails(item.$.objectid);
          const gameDetails = details.items.item[0];

          // S'assurer que l'objet retourné correspond exactement au type BoardGameType
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
            // S'assurer que status est toujours défini avec des valeurs par défaut
            status: {
              own: item.status?.[0]?.$.own === "1" || false,
              forTrade: item.status?.[0]?.$.fortrade === "1" || false,
              want: item.status?.[0]?.$.want === "1" || false,
              wantToPlay: item.status?.[0]?.$.wanttoplay === "1" || false,
            },
          };

          return game;
        } catch (error) {
          console.error(`Error processing game ${item.$.objectid}:`, error);
          return null;
        }
      })
    );

    // Modifier le type guard pour être plus précis
    const games = gamesResults.filter(
      (game): game is BoardGameType =>
        game !== null && typeof game.status === "object" && game.status !== null
    );

    console.log(`Final collection size: ${games.length} games`);
    return games;
  } catch (error) {
    console.error("Error fetching user collection:", error);
    return [];
  }
}
