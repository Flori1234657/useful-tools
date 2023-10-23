import { IoSearch } from "react-icons/io5";
import Filter from "../components/pages/task/Filter";
import { BsFillSunriseFill as PlaceholderIcn } from "react-icons/bs";
import { useMainStore } from "../state/mainState";

const Task = () => {
  const lang = useMainStore((state) => state.language.pages.tasks);
  const search = useMainStore((state) => state.language.pages.tools.searchBar);

  return (
    <main className="tasks">
      <h1>{lang.headingTxt}</h1>
      <div className="tasks__panel" aria-label="Tasks Panel">
        <div
          className="tasks__panel__top-info-wrapper"
          aria-label="Top info of panel"
        >
          <h2>{lang.secondPanel.topInfo[0]}: 3 Rebi‘ul Akhir 1445</h2>
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
              <div
                className="tasks__panel__task-container__card-container__card"
                aria-label="Task card"
                key={el}
              >
                <div
                  className="tasks__panel__task-container__card-container__card__time"
                  aria-label="Time info inside tasks cards"
                >
                  <h4>{lang.secondPanel.hijriTimes[0]}</h4>
                  <PlaceholderIcn />
                </div>

                <h4>Go to that city to arrive there</h4>
                <h4>{lang.secondPanel.filter_Status.option2}</h4>
              </div>
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
          {lang.secondPanel.bottomInfoText}
        </p>
        <button>{lang.secondPanel.button}</button>
      </div>
    </main>
  );
};

export default Task;
