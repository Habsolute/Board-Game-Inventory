import { Inter } from "@next/font/google";
import { BoardGameCard } from "components/cards/boardGameCard";
import SearchGames from "components/searchGames/SearchGames";
import { searchGames } from "requests/boardGameService";
import { BoardGameType } from "utils/types/boardgame";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  // You might want to replace this with a specific search term or popular games
  // const [games, setGames] = useState<BoardGameType[]>([]);
  const games = await searchGames("star wars rebellion");

  return (
    <main style={{ width: "100%" }} className="bg-slate-200 p-7">
      {/* <SearchGames onResults={setGames} /> */}
      {/* <div className="grid grid-cols-5 gap-4"> */}
      <div className="flex flex-wrap gap-4 justify-center">
        {games.map((game) => (
          <BoardGameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}
