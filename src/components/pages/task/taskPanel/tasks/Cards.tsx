import { useTaskStore } from "../../../../../state/tasksState";
import Card from "./Card";

const Cards = () => {
  const tasksStore = useTaskStore();

  return (
    <>
      {tasksStore.tasks.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </>
  );
};

export default Cards;
