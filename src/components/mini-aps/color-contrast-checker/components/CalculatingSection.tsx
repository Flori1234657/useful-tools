import { Stack } from "@mui/joy";
import TestingCard from "./components/TestingCard";
import Inputs from "./components/Input";
import { useRef, useState } from "react";
import { SharableObj, checkColorContrast } from "../utils/checkContrast";
import { useMainStore } from "../../../../state/mainState";

const CalculatingSection = () => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText.CCC);

  const txtInput = useRef<null | HTMLInputElement>(null);
  const bckgInput = useRef<null | HTMLInputElement>(null);

  const [propsObj, setPropsObj] = useState<SharableObj | null>(null);

  const handleChange = () => {
    const cl1 = txtInput.current?.value;
    const cl2 = bckgInput.current?.value;

    if (!cl1 || !cl2) return;

    // Check if not hex values InshaaAllah
    const pattern = /^#([a-fA-F0-9])$|[a-fA-F0-9]$/;
    if (!pattern.test(cl1) || !pattern.test(cl2)) return;

    const ratio = checkColorContrast(cl1!, cl2!);

    setPropsObj(ratio);
  };

  return (
    <Stack sx={{ mt: { md: "2rem" } }}>
      <Stack
        sx={{
          flexDirection: { md: "row" },
          justifyContent: { md: "space-between" },
        }}
      >
        <Stack sx={{ width: { md: "7.30769rem" } }}>
          <Inputs
            handleChange={handleChange}
            reference={txtInput}
            label={lang.label1}
          />
          <Inputs
            handleChange={handleChange}
            reference={bckgInput}
            label={lang.label2}
          />
        </Stack>
        {propsObj ? (
          <TestingCard
            txt={propsObj.state}
            txtCol={txtInput.current?.value}
            bckgCol={bckgInput.current?.value}
            ratio={propsObj.ratio}
          />
        ) : (
          <TestingCard />
        )}
      </Stack>
    </Stack>
  );
};

export default CalculatingSection;
