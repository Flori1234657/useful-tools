import { IoSearch } from "react-icons/io5";
import { useMainStore } from "../../../../../state/mainState";
import { useTaskStore } from "../../../../../state/tasksState";
import { useState, useEffect } from "react";

const Search = () => {
  const search = useMainStore((state) => state.language.pages.tools.searchBar);

  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      useTaskStore.setState({ taskActions: { searchTasks: searchInput } });
    }, 500);

    return () => {
      clearInterval(debounceTimeout);
    };
  }, [searchInput]);

  return (
    <div
      className="tasks__panel__search-filter-wrapper__search-wrapper"
      aria-label="Search input and icon wrapper"
    >
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        name="Search Input"
        placeholder={search}
        style={search === "بحث" ? { order: 2 } : { order: "none" }}
        dir={search === "بحث" ? "rtl" : ""}
      />
      <IoSearch />
    </div>
  );
};

export default Search;
