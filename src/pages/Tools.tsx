import { IoSearch } from "react-icons/io5";

const Tools = () => {
  return (
    <main className="tools">
      <h1>Necessary Tools, all in one place!</h1>
      <div className="tools__panel" aria-label="Panel for cards of tools">
        <div
          className="tools__panel__top-wrapper"
          aria-label="Wrapper for search bar and an info text"
        >
          <div
            className="tools__panel__top-wrapper__search-bar"
            aria-label="Wrapper for search input and icon"
          >
            <input type="search" name="Search Input" placeholder="Search EN" />
            <IoSearch />
          </div>
          <h2>Click a card to use that specific tool.</h2>
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
                <h3>Calculator</h3>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Tools;
