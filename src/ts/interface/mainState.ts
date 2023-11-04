import { Language } from "../types/lang";

export interface MainState {
  language: Language;
  errors: boolean;
  loading: boolean;
  setErrors: (err: boolean) => void;
  setLoading: (load: boolean) => void;
}
