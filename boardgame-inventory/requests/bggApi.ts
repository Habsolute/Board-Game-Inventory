import { parseString } from "xml2js";
import { promisify } from "util";
import { BGGGameDetails, BGGSearchResult } from "utils/types/boardgame";

const BGG_API_BASE = "https://boardgamegeek.com/xmlapi2";
const parseXMLPromise = promisify<string, BGGSearchResult | BGGGameDetails>(
  parseString
);

export async function searchBoardGame(query: string): Promise<BGGSearchResult> {
  const response = await fetch(
    `${BGG_API_BASE}/search?query=${encodeURIComponent(query)}&type=boardgame`
  );
  const xmlData = await response.text();
  return parseXMLPromise(xmlData) as Promise<BGGSearchResult>;
}

export async function getBoardGameDetails(
  gameId: string
): Promise<BGGGameDetails> {
  const response = await fetch(`${BGG_API_BASE}/thing?id=${gameId}&stats=1`);
  const xmlData = await response.text();
  return parseXMLPromise(xmlData) as Promise<BGGGameDetails>;
}

export async function getBoardGameCollection(username: string) {
  const response = await fetch(
    `https://boardgamegeek.com/xmlapi2/collection?username=${username}&stats=1`
  );
  const xml = await response.text();
  return parseXMLPromise(xml) as Promise<BGGGameDetails>;
}
