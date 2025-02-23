import Image from "next/image";
import { getGameDetails } from "requests/boardGameService";

export default async function GamePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const game = await getGameDetails(slug);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="bg-slate-200 p-7 w-full">
      <div className="bg-[#332e59] rounded-xl p-4">
        <Image
          src={game.image || ""}
          alt={game.name || ""}
          width={1000}
          height={1000}
          className="w-96 h-auto object-cover"
        />
        <h1 className="text-white text-6xl font-bold">{game.name}</h1>
        <p className="text-white text-xl font-sans font-bold">
          {game?.description}
        </p>
      </div>
    </div>
  );
}
