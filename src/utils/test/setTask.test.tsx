import { TaskCard } from "../../ts/types/taskCard";
import { HijriTimes, SelectedStatusOption } from "../../ts/enums/tasks";

let testArr: TaskCard[] = [];

const pushOnTestArr = (times: HijriTimes) => {
  for (let i = 0; i < 200000; i++) {
    testArr.push({
      id: "test-id",
      hijriTimes: times,
      task: "Test task",
      status: SelectedStatusOption.O1,
    });
  }
};

pushOnTestArr(HijriTimes.T1);
testArr[0].hijriTimes = HijriTimes.T5;
pushOnTestArr(HijriTimes.T2);
pushOnTestArr(HijriTimes.T3);
pushOnTestArr(HijriTimes.T4);
pushOnTestArr(HijriTimes.T5);

test("Will insertion sort perform well on 1M tasks with 1 unsorted item?", () => {
  let startTime: number;
  let endTime: number;
  let finalTime: number = 0;

  const mockFunc = (): TaskCard[] => {
    let arry = [...testArr];

    startTime = performance.now();

    for (let i = 1; i < arry.length; i++) {
      let temp = arry[i];
      let j = i - 1;

      while (j >= 0 && arry[j].hijriTimes > temp.hijriTimes) {
        arry[j + 1] = arry[j];
        j--;
      }
      arry[j + 1] = temp;
    }

    endTime = performance.now();
    finalTime = startTime - endTime;
    return arry;
  };

  mockFunc();

  expect(finalTime).toBeLessThan(30); //milliseconds
});
