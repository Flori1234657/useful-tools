import { useMiniAppsStore } from "../../../../state/miniAppsState";
import { MiniAppsStore } from "../../../../ts/interface/miniAppsState";
import { produce } from "immer";

type Selected = "A" | "W" | "H";

const returnInpt = (prop: Selected): { inp1: Selected; inp2: Selected } => {
  if (prop === "A") return { inp1: "W", inp2: "H" };
  if (prop === "W") return { inp1: "A", inp2: "H" };
  return { inp1: "A", inp2: "W" };
};

export const setMnapsState = (prop: Selected): void => {
  const obj = returnInpt(prop);

  useMiniAppsStore.setState(
    produce((state: MiniAppsStore) => {
      state.arc.selected = prop;
      state.arc.input1 = obj.inp1;
      state.arc.input2 = obj.inp2;
    })
  );
};
