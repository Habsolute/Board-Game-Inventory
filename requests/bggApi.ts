import { parseString } from "xml2js";
import { promisify } from "util";
import { BGGGameDetails, BGGSearchResult } from "utils/types/boardgame";

const BGG_API_BASE = "https://boardgamegeek.com/xmlapi2";
const parseXMLPromise = promisify<string, BGGSearchResult | BGGGameDetails>(
  parseString
);

// Ajouter une fonction utilitaire pour le délai
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Fonction pour faire une requête avec retry
async function fetchWithRetry(
  url: string,
  retries = 3,
  delayMs = 500
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response;
      }
      console.log(
        `[${new Date().toISOString()}] Tentative ${i + 1} échouée, status: ${
          response.status
        }`
      );
      await delay(delayMs * (i + 1)); // Délai croissant entre les tentatives
    } catch (error) {
      console.error(`[${new Date().toISOString()}] Erreur de fetch:`, error);
      if (i === retries - 1) throw error;
      await delay(delayMs * (i + 1));
    }
  }
  throw new Error("Max retries reached");
}

export async function getBoardGameDetails(
  gameId: string
): Promise<BGGGameDetails> {
  console.log(
    `[${new Date().toISOString()}] Début requête détails pour jeu ${gameId}`
  );

  const response = await fetchWithRetry(
    `${BGG_API_BASE}/thing?id=${gameId}&stats=1`
  );
  const xmlData = await response.text();

  try {
    const result = (await parseXMLPromise(xmlData)) as BGGGameDetails;
    console.log(`[${new Date().toISOString()}] Succès pour jeu ${gameId}`);
    return result;
  } catch (error) {
    console.error(
      `[${new Date().toISOString()}] Erreur parsing XML pour jeu ${gameId}:`,
      error
    );
    throw error;
  }
}

export async function getBoardGameCollection(username: string) {
  console.log(
    `[${new Date().toISOString()}] Requête collection pour ${username}`
  );
  const response = await fetch(
    `${BGG_API_BASE}/collection?username=${username}&stats=1`
  );
  const xml = await response.text();
  return parseXMLPromise(xml) as Promise<BGGGameDetails>;
}

export async function searchBoardGame(query: string): Promise<BGGSearchResult> {
  const response = await fetch(
    `${BGG_API_BASE}/search?query=${encodeURIComponent(query)}&type=boardgame`
  );
  const xmlData = await response.text();
  return parseXMLPromise(xmlData) as Promise<BGGSearchResult>;
}
