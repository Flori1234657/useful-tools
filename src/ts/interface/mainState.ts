import { Language } from "../types/lang";

export interface MainState {
  language: Language;
  errors: string;
  loading: boolean;
  // changeLang: (lang: Language) => void;
  setErrors: (err: string) => void;
  setLoading: (load: boolean) => void;
}
