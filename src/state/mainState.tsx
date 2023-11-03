import { create } from "zustand";
import { MainState } from "../ts/interface/mainState";
import English from "../assets/languages/en.json";
import { persist, devtools } from "zustand/middleware";

export const useMainStore = create<MainState>()(
  devtools(
    persist(
      (set) => ({
        language: English,
        errors: "",
        loading: false,
        setErrors: (err) => set(() => ({ errors: err }), false, "Set errors"),
        setLoading: (load) =>
          set(() => ({ loading: load }), false, "Set loading"),
      }),
      { name: "main-store" }
    )
  )
);
