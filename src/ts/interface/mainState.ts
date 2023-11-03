import { Language } from "../types/lang";

export interface MainState {
  language: Language;
  errors: string;
  loading: boolean;
  setErrors: (err: string) => void;
  setLoading: (load: boolean) => void;
}
