import { IoSearch } from "react-icons/io5";
import Filter from "../components/pages/task/Filter";
import Card from "../components/pages/task/Card";
import { useMainStore } from "../state/mainState";
import { useState } from "react";
import AddTaskModal from "../components/pages/task/AddTaskModal";
import uq from "@umalqura/core";

const Task = () => {
  const lang = useMainStore((state) => state.language.pages.tasks);
  const search = useMainStore((state) => state.language.pages.tools.searchBar);
  const locale = useMainStore((state) => state.language.nav.lang);
  const mainStore = useMainStore();

  // Hijri calendar
  uq.locale(locale.chosen.toLowerCase()); // Gjuha a muajve
  const hijriDate = uq(new Date()); // data Hixhrit
  const hirjiMonths = uq.months();
  // Hijri calendar

  const [open, setOpen] = useState<boolean>(false);

  return (
    <main className="tasks">
      <h1>{lang.headingTxt}</h1>
      <div className="tasks__panel" aria-label="Tasks Panel">
        <div
          className="tasks__panel__top-info-wrapper"
          aria-label="Top info of panel"
        >
          <h2 dir={locale.chosen !== "ar" ? "ltr" : "rtl"}>
            {lang.secondPanel.topInfo[0]}:{" "}
            {`${hijriDate.hd.toLocaleString(locale.localeString)} ${
              hirjiMonths[hijriDate.hm - 2]
            } ${hijriDate.hy.toLocaleString(locale.localeString)}`}
          </h2>
          <h2>4 {lang.secondPanel.topInfo[1]}</h2>
        </div>
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
        <div
          className="tasks__panel__task-container"
          aria-label="Container for tasks"
        >
          <div
            className="tasks__panel__task-container__3-txt-headers"
            aria-label="Container for 3 info headers"
          >
            <h3>{lang.secondPanel.cardsCategoryText.txt1}</h3>
            <h3>{lang.secondPanel.cardsCategoryText.txt2}</h3>
            <h3>{lang.secondPanel.cardsCategoryText.txt3}</h3>
          </div>
          <div
            className="tasks__panel__task-container__card-container"
            aria-label="Tasks Cards Container"
          >
            {mainStore.tasks.map((el) => (
              <Card key={el.id} {...el} />
            ))}
          </div>
        </div>
        <p
          style={
            lang.headingTxt === "خطط ليومك!"
              ? { textAlign: "right" }
              : { textAlign: "left" }
          }
        >
          {mainStore.tasks.length > 0
            ? lang.secondPanel.bottomInfoText
            : lang.secondPanel.noTasksText}
        </p>
        <button onClick={() => setOpen(true)}>{lang.secondPanel.button}</button>
      </div>
      <AddTaskModal open={open} setOpen={setOpen} />
    </main>
  );
};

export default Task;
