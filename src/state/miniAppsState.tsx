import { MiniAppsStore } from "../ts/interface/miniAppsState";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { produce } from "immer";

export const useMiniAppsStore = create<MiniAppsStore>()(
  devtools((set) => ({
    psg: {
      checkBoxes: {
        BigAbc: false,
        SmallAbc: true,
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
    openModal: false,
  }))
);
