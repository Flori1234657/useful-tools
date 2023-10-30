import { useMainStore } from "../../../../../state/mainState";
import Card from "./Card";

const Cards = () => {
  const mainStore = useMainStore();

  return (
    <>
      {mainStore.tasks.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </>
  );
};

export default Cards;
