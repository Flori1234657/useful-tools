import { Chip, Input, Stack } from "@mui/joy";
import { useMiniAppsStore } from "../../../../../state/miniAppsState";
import { useEffect, useRef, useState } from "react";
import CopyBtn from "./top/CopyBtn";
import { useMainStore } from "../../../../../state/mainState";
import { PasswLevels } from "../../../../../ts/types/lang";
const Top = () => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText.PSG);
  const dir = useMainStore((state) => state.language.nav.lang.chosen);

  const generatedPassword = useMiniAppsStore(
    (state) => state.psg.generatedPassword
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [passLevel, setPassLevel] = useState<string>("normal");

  useEffect(() => {
    const getLevel = () => {
      if (!generatedPassword) return "normal";
      if (generatedPassword?.length < 13) return "danger";
      if (generatedPassword?.length < 23) return "warning";
      if (generatedPassword?.length < 31) return "success";

      return "normal";
    };

    setPassLevel(getLevel());
  }, [generatedPassword]);

  return (
    <Stack
      direction={{ md: "row" }}
      py={{ xs: "1rem", md: 0 }}
      pb={{ md: "1.231rem" }}
      pt={{ md: "2rem" }}
      rowGap={{ xs: "0.5rem" }}
      justifyContent={{ md: "space-between" }}
    >
      <Input
        readOnly
        placeholder={lang.input.placeholder}
        value={generatedPassword ?? ""}
        slotProps={{
          input: {
            ref: inputRef,
            dir: dir === "AR" ? "rtl" : "",
          },
        }}
        endDecorator={
          dir !== "AR" ? (
            //@ts-ignore
            <Chip sx={{ borderRadius: "0.75rem" }} color={passLevel}>
              {
                //@ts-ignore
                (lang.input.levels as PasswLevels)[passLevel]
              }
            </Chip>
          ) : (
            ""
          )
        }
        startDecorator={
          dir === "AR" ? (
            //@ts-ignore
            <Chip sx={{ borderRadius: "0.75rem" }} color={passLevel}>
              {
                //@ts-ignore
                (lang.input.levels as PasswLevels)[passLevel]
              }
            </Chip>
          ) : (
            ""
          )
        }
        sx={{
          borderRadius: "0.75rem",
          fontSize: { xs: "1rem", md: "0.84615rem" },
          width: { md: "65%" },
          order: dir === "AR" ? 2 : "",
        }}
      />
      <CopyBtn inputRef={inputRef} />
    </Stack>
  );
};

export default Top;
