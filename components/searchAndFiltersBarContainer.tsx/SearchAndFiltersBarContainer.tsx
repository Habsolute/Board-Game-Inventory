import { SearchGamesIntoCollection } from "components/searchGamesIntoCollection/SearchGamesIntoCollection";

interface SearchAndFiltersBarContainerProps {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}

export const SearchAndFiltersBarContainer = ({
  setSearchTerm,
  searchTerm,
}: SearchAndFiltersBarContainerProps) => {
  return (
    <div>
      <SearchGamesIntoCollection
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
    </div>
  );
};
