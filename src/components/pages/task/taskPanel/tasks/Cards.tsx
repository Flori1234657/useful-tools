import { useTaskStore } from "../../../../../state/tasksState";
import { SelectedStatusOption as St } from "../../../../../ts/enums/tasks";
import useAvailableTimes from "../../../../../hooks/useAvailableTimes";
import Card from "./Card";

const Cards = () => {
  const tasksStore = useTaskStore();
  const availableTimes = useAvailableTimes();

  const returnCards = tasksStore.tasks.map((el) => (
    <Card key={el.id} {...el} />
  ));

  return (
    <>
      {tasksStore.taskSetup.skipped
        ? returnCards
        : tasksStore.tasks.map((el) => {
            const taskObj = availableTimes[el.hijriTimes]
              ? el
              : { ...el, status: St.O3 }; // Failed if time pass InshaaAllah

            return <Card key={el.id} {...taskObj} />;
          })}
    </>
  );
};

export default Cards;
