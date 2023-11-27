import { useRef } from "react";
import { Stack, Typography } from "@mui/joy";
import Input from "./components/Input";
import { useMiniAppsStore } from "../../../../state/miniAppsState";

const DownSection = () => {
  const mnaps = useMiniAppsStore((st) => st.arc);

  const inpt1 = useRef<HTMLInputElement | null>(null);
  const inpt2 = useRef<HTMLInputElement | null>(null);

  /* TODO
   InshaaAllah kte do ta kaloj tek gjuhet */
  const inputsObj = {
    W: "Width",
    H: "Height",
    A: "Aspect Ratio",
  };
  return (
    <Stack>
      <Stack
        direction="row"
        sx={{ width: { md: "14.62rem" } }}
        justifyContent="space-between"
      >
        <Input label={inputsObj[mnaps.input1]} ref={inpt1} />
        <Input label={inputsObj[mnaps.input2]} ref={inpt2} />
      </Stack>
      <Stack alignItems="center" my="1rem">
        <Typography fontSize="1.75rem" fontWeight="500">
          Result
        </Typography>
        <Typography fontWeight="bold" fontSize="1.438rem">
          16/9
        </Typography>
      </Stack>
    </Stack>
  );
};

export default DownSection;
