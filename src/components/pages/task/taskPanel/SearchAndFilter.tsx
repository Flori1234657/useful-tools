import { useMainStore } from "../../../../state/mainState";
import { IoSearch } from "react-icons/io5";
import Filter from "./search&filter/Filter";

const SearchAndFilter = () => {
  const search = useMainStore((state) => state.language.pages.tools.searchBar);

  return (
    <div
      className="tasks__panel__search-filter-wrapper"
      aria-label="Wrapper for search and filter"
    >
      <div
        className="tasks__panel__search-filter-wrapper__search-wrapper"
        aria-label="Search input and icon wrapper"
      >
        <input
          type="search"
          name="Search Input"
          placeholder={search}
          style={search === "بحث" ? { order: 2 } : { order: "none" }}
          dir={search === "بحث" ? "rtl" : ""}
        />
        <IoSearch />
      </div>
      <Filter />
    </div>
  );
};

export default SearchAndFilter;
