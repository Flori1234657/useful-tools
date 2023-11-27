import { Radio } from "@mui/joy";
import { setMnapsState } from "../../utils/setArcMnap";

type Props = {
  label: String;
  firstWord: "W" | "H" | "A";
};

const RadioBtn = (prop: Props) => {
  return (
    <Radio
      onChange={() => setMnapsState(prop.firstWord)}
      size="sm"
      value={prop.label}
      label={prop.label}
    />
  );
};

export default RadioBtn;
