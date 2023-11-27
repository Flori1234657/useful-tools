import { MiniAppsStore } from "../ts/interface/miniAppsState";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { produce } from "immer";

export const useMiniAppsStore = create<MiniAppsStore>()(
  devtools((set) => ({
    psg: {
      checkBoxes: {
        BigAbc: true,
        SmallAbc: false,
        Numbers: false,
        Symbols: false,
        setChecked: (val, checkBox) =>
          set(
            produce((state: MiniAppsStore) => {
              state.psg.checkBoxes[checkBox] = val;
            }),
            false,
            "Set checkboxes"
          ),
      },
      passLength: 8,
      setPassLength: (length) =>
        set(
          produce((state: MiniAppsStore) => {
            state.psg.passLength = length;
          }),
          false,
          "Set password length"
        ),
      setGenPass: (pass) =>
        set(
          produce((state: MiniAppsStore) => {
            state.psg.generatedPassword = pass;
          }),
          false,
          "Set generated password"
        ),
    },
    imr: {
      imgDownloadPath: null,
    },
    arc: {
      selected: "A",
      input1: "W",
      input2: "H",
    },
    openModal: false,
  }))
);
