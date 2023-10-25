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
        setErrors: (err) => set((state) => ({ errors: err })),
        setLoading: (load) => set((state) => ({ loading: load })),
      }),
      { name: "main-store" }
    )
  )
);
