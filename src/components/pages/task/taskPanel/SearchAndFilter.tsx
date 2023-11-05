import { useTaskStore } from "../../../../state/tasksState";
import { IoMdSettings } from "react-icons/io";
import Filter from "./search&filter/Filter";
import Search from "./search&filter/Search";
import { IconButton } from "@mui/joy";
import { useState } from "react";

const SearchAndFilter = () => {
  return (
    <div
      className="tasks__panel__search-filter-wrapper"
      aria-label="Wrapper for search and filter"
    >
      <Search />
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
