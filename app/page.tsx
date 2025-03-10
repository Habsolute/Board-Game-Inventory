import { Inter } from "@next/font/google";
import { BoardGameCard } from "components/cards/boardGameCard";
import { CollectionPageContainer } from "components/collectionPage/CollectionPageContainer";
import SearchGames from "components/searchGames/SearchGames";
import { SideFiltersBar } from "components/sideFiltersBar/SideFiltersBar";
import { FiltersCollectionProvider } from "providers/FiltersCollectionProvider";
import { getCollection } from "utils/csvParser";
import { BoardGameType } from "utils/types/boardgame";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const collection = await getCollection();

  // console.log(collection.slice(0, 10));

  // return <div>testing</div>;

  return (
    <main className="bg-slate-200 w-full flex-1">
      <FiltersCollectionProvider>
        <div className="flex flex-1 h-full min-h-[calc(100vh-100px)]">
          <SideFiltersBar />
          <div className="flex-1">
            <CollectionPageContainer initialCollection={collection} />
          </div>
        </div>
      </FiltersCollectionProvider>
    </main>
  );
}
