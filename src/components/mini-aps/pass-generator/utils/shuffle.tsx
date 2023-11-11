import { getRandomNum } from "./returnPass";

export const shufflePasswordLetters = (
  arr: (string | number)[]
): (string | number)[] => {
  for (let i = arr.length; i > 0; i--) {
    const randomlyPicked: number = getRandomNum(i - 1);
    const holder = arr[i - 1];

    arr[i - 1] = arr[randomlyPicked];
    arr[randomlyPicked] = holder;
  }

  return arr;
};
