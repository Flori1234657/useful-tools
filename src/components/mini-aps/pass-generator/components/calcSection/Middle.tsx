import { Slider, Stack, Typography } from "@mui/joy";
import { useMiniAppsStore } from "../../../../../state/miniAppsState";
import { useState, useEffect } from "react";
import useDebounce from "../../../../../hooks/useDebounce";
import { useMainStore } from "../../../../../state/mainState";
import getLocalNumber from "../../../../../utils/mini-apps/convertNumbersToLcSt";

const Middle = () => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText);
  const lcSt = useMainStore((st) => st.language.nav.lang.localeString);

  const mnaps = useMiniAppsStore();
  const [passlength, setPasslength] = useState<number | null>(null);

  const debouncedValue = useDebounce(passlength ?? 8);

  useEffect(() => {
    if (!passlength) return;
    mnaps.psg.setPassLength(debouncedValue);
  }, [debouncedValue]);

  return (
    <Stack
      direction={{ md: "row" }}
      alignItems={{ md: "center" }}
      justifyContent={{ md: "space-between" }}
      pb={{ md: "1.231rem" }}
    >
      <Typography fontSize="1rem" fontWeight="600" sx={{ color: "#375165" }}>
        {lang.passLength}
        <span style={{ fontWeight: "500" }}>
          {getLocalNumber(passlength ?? 8, lcSt)}
        </span>
      </Typography>
      <Slider
        sx={{
          "--Slider-trackSize": "0.375rem",
          "--Slider-thumbSize": "0.875rem",
          width: { md: "10rem" },
        }}
        value={passlength ?? 8}
        onChange={(e, newVal) => setPasslength(newVal as number)}
        min={8}
        max={30}
      />
    </Stack>
  );
};

export default Middle;
