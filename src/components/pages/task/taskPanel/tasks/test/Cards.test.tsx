import { render, screen } from "@testing-library/react";
import Card from "../Card";
import {
  HijriTimes as hjt,
  SelectedStatusOption as St,
} from "../../../../../../ts/enums/tasks";
import { TaskCard } from "../../../../../../ts/types/taskCard";

// First is the task card component

const Cards = () => {
  // Rendering 10 task objects InshaaAllah
  const tasksStore: TaskCard[] = [
    { nr: 1, ht: hjt.T1 },
    { nr: 2, ht: hjt.T2 },
    { nr: 3, ht: hjt.T3 },
    { nr: 4, ht: hjt.T3 },
    { nr: 5, ht: hjt.T4 },
    { nr: 6, ht: hjt.T4 },
    { nr: 7, ht: hjt.T4 },
    { nr: 8, ht: hjt.T5 },
    { nr: 9, ht: hjt.T5 },
    { nr: 10, ht: hjt.T5 },
  ].map((el) => ({
    id: `${el.nr}`,
    hijriTimes: el.ht,
    task: "Testing task",
    status: St.O1,
  }));

  // Available hijri times InshaaAllah
  const avTm = [true, true, false, true, true];

  return (
    <>
      {tasksStore.map((el) => {
        const taskObj: TaskCard = avTm[el.hijriTimes]
          ? el
          : { ...el, status: St.O3 }; // Failed if time pass InshaaAllah

        return <Card key={el.id} {...taskObj} />;
      })}
    </>
  );
};

// Test block below

test("Task Card state should be failed when time pass", () => {
  render(<Cards />);
  const nrOfCads = screen.findAllByText("Failed");

  expect(nrOfCads).length === 2;
});
