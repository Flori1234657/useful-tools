import { create } from "zustand";
import { MainState } from "../ts/interface/mainState";
import English from "../assets/languages/en.json";
import { persist, devtools } from "zustand/middleware";
import setTask from "../utils/setTask";

export const useMainStore = create<MainState>()(
  devtools(
    persist(
      (set) => ({
        language: English,
        tasks: [],
        errors: "",
        loading: false,
        setTasks: (task) => set((state) => setTask(state, task)), // Kjo InshaaAllah do perdoret edhe per edit
        removeTask: (id) =>
          set((state) => ({ tasks: state.tasks.filter((el) => el.id !== id) })),
        setErrors: (err) => set(() => ({ errors: err })),
        setLoading: (load) => set(() => ({ loading: load })),
      }),
      { name: "main-store" }
    )
  )
);
