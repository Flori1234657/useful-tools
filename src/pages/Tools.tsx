import { IoSearch } from "react-icons/io5";
import { useMainStore } from "../state/mainState";

const Tools = () => {
  const lang = useMainStore((state) => state.language.pages.tools);

  return (
    <main className="tools">
      <h1>{lang.headingTxt}</h1>
      <div className="tools__panel" aria-label="Panel for cards of tools">
        <div
          className="tools__panel__top-wrapper"
          aria-label="Wrapper for search bar and an info text"
        >
          <div
            className="tools__panel__top-wrapper__search-bar"
            aria-label="Wrapper for search input and icon"
          >
            <input
              type="search"
              name="Search Input"
              placeholder={lang.searchBar}
              style={
                lang.searchBar === "بحث" ? { order: 2 } : { order: "none" }
              }
              dir={lang.searchBar === "بحث" ? "rtl" : ""}
            />
            <IoSearch />
          </div>
          <h2>{lang.infoTxt}</h2>
        </div>
        <div
          className="tools__panel__cards-grid"
          aria-label="Grid for cards of tools"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18].map(
            (el) => (
              <div
                key={el}
                className="tools__panel__cards-grid__card"
                aria-label="Card Item"
              >
                <h3>{lang.toolsNames[0]}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Tools;
