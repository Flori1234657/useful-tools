import { CheckboxIndex } from "../../../enums/mini-apps/PSG/checkboxes";

export type Checked = {
  BigAbc: boolean;
  SmallAbc: boolean;
  Numbers: boolean;
  Symbols: boolean;
  setChecked?: (val: boolean, checkBox: CheckboxIndex) => void;
};
