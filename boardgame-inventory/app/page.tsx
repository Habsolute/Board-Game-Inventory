import { Inter } from "@next/font/google";
import { BoardGameCard } from "components/cards/boardGameCard";
import { searchGames } from "requests/boardGameService";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  // You might want to replace this with a specific search term or popular games
  const games = await searchGames("terraforming mars");

  console.log(games);

  return (
    <main style={{ width: "100%" }} className="bg-slate-200 p-7">
      <div className="content-between grid grid-cols-5 gap-4">
        {games.map((game) => (
          <BoardGameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}
