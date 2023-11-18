import { Checked } from "../types/mini-apps/PSG/checkboxes";

export interface MiniAppsStore {
  psg: {
    checkBoxes: Checked;
    passLength: number;
    setPassLength: (length: number) => void;
    setGenPass: (pass: string) => void;
    generatedPassword?: string;
  };
  imr: {
    imgDownloadPath: string | null;
    cleanup?: (() => void) | null;
  };
  openModal: boolean;
}
