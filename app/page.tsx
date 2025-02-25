import { Inter } from "@next/font/google";
import { BoardGameCard } from "components/cards/boardGameCard";
import { CollectionPageContainer } from "components/collectionPage/CollectionPageContainer";
import SearchGames from "components/searchGames/SearchGames";
import { SideFiltersBar } from "components/sideFiltersBar/SideFiltersBar";
import { FiltersCollectionProvider } from "providers/FiltersCollectionProvider";
import { getUserCollection, searchGames } from "requests/boardGameService";
import { BoardGameType } from "utils/types/boardgame";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const collection = await getUserCollection("YtaiTouf");

  return (
    <main className="bg-slate-200 w-full min-h-full">
      <FiltersCollectionProvider>
        <div className="flex flex-1">
          <div className="w-60">
            <SideFiltersBar />
          </div>
          <div className="flex-1">
            <CollectionPageContainer initialCollection={collection} />
          </div>
        </div>
      </FiltersCollectionProvider>
    </main>
  );
}
