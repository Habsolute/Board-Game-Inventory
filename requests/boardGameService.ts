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
    console.log(
      `[${new Date().toISOString()}] Début de la récupération pour ${username}`
    );
    let retries = 5;
    let delay = 2000;
    let collection = null;

    // Première tentative
    console.log(
      `[${new Date().toISOString()}] Première tentative de getBoardGameCollection`
    );
    collection = await getBoardGameCollection(username);

    // Tant qu'on a un statut 202 ou pas de collection, on réessaie
    while ((!collection || !collection.items) && retries > 0) {
      console.log(
        `[${new Date().toISOString()}] Retry nécessaire, attente de ${delay}ms`
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
      collection = await getBoardGameCollection(username);
      retries--;
      delay = Math.min(delay * 1.5, 10000);
    }

    if (!collection?.items?.item) {
      console.log(
        `[${new Date().toISOString()}] Aucun item trouvé dans la collection`
      );
      return [];
    }

    const items = Array.isArray(collection.items.item)
      ? collection.items.item
      : [collection.items.item];

    console.log(
      `[${new Date().toISOString()}] Nombre de jeux à traiter: ${items.length}`
    );

    // Traitement par lots
    const BATCH_SIZE = 10;
    const allGames: BoardGameType[] = [];
    const startProcessing = Date.now();

    for (let i = 0; i < items.length; i += BATCH_SIZE) {
      const batch = items.slice(i, i + BATCH_SIZE);
      console.log(
        `[${new Date().toISOString()}] Traitement du lot ${
          Math.floor(i / BATCH_SIZE) + 1
        }/${Math.ceil(items.length / BATCH_SIZE)}`
      );

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
            console.error(
              `[${new Date().toISOString()}] Erreur pour le jeu ${
                item.$.objectid
              }:`,
              error
            );
            return null;
          }
        })
      );

      const validGames = batchResults.filter(
        (game): game is BoardGameType => game !== null
      );
      allGames.push(...validGames);

      // Attendre avant le prochain lot (sauf pour le dernier lot)
      if (i + BATCH_SIZE < items.length) {
        console.log(
          `[${new Date().toISOString()}] Attente de 1 seconde avant le prochain lot`
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    const processingTime = Date.now() - startProcessing;
    console.log(
      `[${new Date().toISOString()}] Traitement terminé en ${processingTime}ms`
    );
    console.log(
      `[${new Date().toISOString()}] Nombre final de jeux: ${allGames.length}`
    );

    return allGames;
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Erreur générale:`, error);
    return [];
  }
}
