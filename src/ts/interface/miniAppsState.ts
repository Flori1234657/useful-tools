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
  arc: {
    selected: "W" | "H" | "A";
    input1: "W" | "H" | "A";
    input2: "W" | "H" | "A";
  };
  openModal: boolean;
}
