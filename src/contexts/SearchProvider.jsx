import { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const openSearch = () => setIsOpenSearch(true);
  const closeSearch = () => setIsOpenSearch(false);

  const value = { openSearch, closeSearch, isOpenSearch, setIsOpenSearch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export default SearchProvider;
