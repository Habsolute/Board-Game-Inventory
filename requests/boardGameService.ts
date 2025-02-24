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
    // Augmenter le nombre de tentatives et le délai entre chaque tentative
    let retries = 5;
    let delay = 2000; // 2 secondes
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
      // Augmenter progressivement le délai entre les tentatives
      delay = Math.min(delay * 1.5, 10000); // Max 10 secondes
    }

    // Vérifier si nous avons des items
    if (!collection?.items?.item) {
      console.log("No items found in collection after all retries");
      return [];
    }

    // Assurer que item est toujours un tableau
    const items = Array.isArray(collection.items.item)
      ? collection.items.item
      : [collection.items.item];

    console.log(`Processing ${items.length} games from collection`);

    // Augmenter la taille du batch et réduire le délai
    const batchSize = 40; // Augmenté de 10 à 40
    const games: BoardGameType[] = [];

    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(async (item) => {
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
              playingTime:
                Number(gameDetails.playingtime?.[0]?.$.value) || null,
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

      games.push(
        ...batchResults.filter((game): game is BoardGameType => game !== null)
      );
      console.log(`Processed batch of games. Total processed: ${games.length}`);

      // Réduire le délai entre les lots
      if (i + batchSize < items.length) {
        await new Promise((resolve) => setTimeout(resolve, 200)); // Réduit de 500ms à 200ms
      }
    }

    console.log(`Final collection size: ${games.length} games`);
    return games;
  } catch (error) {
    console.error("Error fetching user collection:", error);
    return [];
  }
}
