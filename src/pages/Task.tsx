import { IoSearch } from "react-icons/io5";
import Filter from "../components/pages/task/Filter";
import { BsFillSunriseFill as PlaceholderIcn } from "react-icons/bs";

const Task = () => {
  return (
    <main className="tasks">
      <h1>Plan your day!</h1>
      <div className="tasks__panel" aria-label="Tasks Panel">
        <div
          className="tasks__panel__top-info-wrapper"
          aria-label="Top info of panel"
        >
          <h2>Date: 3 Rebi‘ul Akhir 1445</h2>
          <h2>4 Tasks</h2>
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
              placeholder="Search Task"
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
            <h3>Time</h3>
            <h3>Task</h3>
            <h3>State</h3>
          </div>
          <div
            className="tasks__panel__task-container__card-container"
            aria-label="Tasks Cards Container"
          >
            {[1, 2, 3, 4].map((el) => (
              <div
                className="tasks__panel__task-container__card-container__card"
                aria-label="Task card"
                key={el}
              >
                <div
                  className="tasks__panel__task-container__card-container__card__time"
                  aria-label="Time info inside tasks cards"
                >
                  <h4>Dawn</h4>
                  <PlaceholderIcn />
                </div>

                <h4>Go to that city to arrive there</h4>
                <h4>Pending</h4>
              </div>
            ))}
          </div>
        </div>
        <p>
          Click on task to edit, delete, or to change it state. Warning!
          Complete the task before time pass, otherwise task will fail
          InshaaAllah.
        </p>
        <button>Add a Task</button>
      </div>
    </main>
  );
};

export default Task;
