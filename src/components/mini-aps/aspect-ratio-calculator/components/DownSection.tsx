import { useRef, useState } from "react";
import { Stack, Typography } from "@mui/joy";
import Input from "./components/Input";
import { useMiniAppsStore } from "../../../../state/miniAppsState";
import { calculateRatio } from "../utils/calculate";
import { useMainStore } from "../../../../state/mainState";

const DownSection = () => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText.ARC);
  const local = useMainStore((st) => st.language.nav.lang.localeString);
  const mnaps = useMiniAppsStore((st) => st.arc);

  const inpt1 = useRef<HTMLInputElement | null>(null);
  const inpt2 = useRef<HTMLInputElement | null>(null);

  const [calculatedVal, setCalculatedVal] = useState<number>(0);

  const handleCalclate = () => {
    if (!inpt1.current?.value || !inpt2.current?.value) {
      if (calculatedVal !== 0) setCalculatedVal(0);
      return;
    }

    const val1 = Number(inpt1.current.value);
    const val2 = Number(inpt2.current.value);

    const returnedVal = calculateRatio(val1, val2, mnaps.selected);

    setCalculatedVal(returnedVal);
  };

  return (
    <Stack>
      <Stack
        direction="row"
        sx={{ width: { md: "14.62rem" } }}
        justifyContent="space-between"
      >
        <Input
          label={lang[mnaps.input1]}
          ref={inpt1}
          calculate={handleCalclate}
        />
        <Input
          label={lang[mnaps.input2]}
          ref={inpt2}
          calculate={handleCalclate}
        />
      </Stack>
      <Stack alignItems="center" my="1rem">
        <Typography fontSize="1.75rem" fontWeight="500">
          {lang.result}
        </Typography>
        <Typography fontWeight="bold" fontSize="1.438rem">
          {calculatedVal.toLocaleString(local)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default DownSection;
