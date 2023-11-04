import { useMainStore } from "../../../../state/mainState";
import { useTaskStore } from "../../../../state/tasksState";
import { IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import Filter from "./search&filter/Filter";
import { IconButton } from "@mui/joy";

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
      <IconButton
        variant="solid"
        color="warning"
        sx={{
          borderRadius: { xs: "0.75rem", md: "0.65rem" },
          ml: { md: "12rem" },
          minHeight: { md: 0 },
          minWidth: { md: 0 },
          p: { md: "0.5rem" },
        }}
        aria-label="Task configuration settings"
        onClick={() =>
          useTaskStore.setState(() => ({
            taskSetup: { newUser: true, skipped: false },
          }))
        }
      >
        <IoMdSettings />
      </IconButton>
    </div>
  );
};

export default SearchAndFilter;
