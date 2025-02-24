import { Inter } from "@next/font/google";
import { BoardGameCard } from "components/cards/boardGameCard";
import { CollectionPageContainer } from "components/collectionPage/CollectionPageContainer";
import SearchGames from "components/searchGames/SearchGames";
import { getUserCollection, searchGames } from "requests/boardGameService";
import { BoardGameType } from "utils/types/boardgame";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const collection = await getUserCollection("YtaiTouf");

  return (
    <main className="bg-slate-200 w-full h-full">
      <CollectionPageContainer initialCollection={collection} />
    </main>
  );
}
