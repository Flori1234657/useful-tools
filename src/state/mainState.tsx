import { create } from "zustand";
import { MainState } from "../ts/interface/mainState";
import English from "../assets/languages/tr.json";

export const useMainStore = create<MainState>((set) => ({
  language: English,
  errors: "",
  loading: false,
  changeLang: (lang) => set((state) => ({ ...state, language: lang })),
  setErrors: (err) => set((state) => ({ ...state, errors: err })),
  setLoading: (load) => set((state) => ({ ...state, loading: load })),
}));
