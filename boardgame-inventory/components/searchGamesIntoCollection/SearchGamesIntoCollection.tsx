import { SearchIcon } from "components/icons/searchIcon/SearchIcon";

interface SearchGamesIntoCollectionProps {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}

export const SearchGamesIntoCollection = ({
  setSearchTerm,
  searchTerm,
}: SearchGamesIntoCollectionProps) => {
  return (
    <div className="flex flex-col gap-4 bg-slate-200 rounded-lg p-4">
      <div className="relative w-max flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Chercher un jeu"
          className="px-4 py-2 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <SearchIcon className="w-8 h-8 absolute right-2 z-10" color="white" />
      </div>
    </div>
  );
};
