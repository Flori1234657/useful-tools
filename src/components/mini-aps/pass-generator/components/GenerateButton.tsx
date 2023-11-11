import { Button } from "@mui/joy";
import { useMiniAppsStore } from "../../../../state/miniAppsState";
import { generateRandPass } from "../utils/returnPass";
import { useMainStore } from "../../../../state/mainState";

const GenerateButton = () => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText);

  const mnaps = useMiniAppsStore();
  const disableBtn: boolean = useMiniAppsStore((state) => {
    const obj = state.psg.checkBoxes;
    let unChecked: number = 0;

    for (const [key, value] of Object.entries(obj)) {
      value ? "" : unChecked++;
    }

    if (unChecked === 4) return true;
    return false;
  });

  return (
    <Button
      disabled={disableBtn} // If all are unchecked
      sx={{
        fontSize: { xs: "0.813rem", md: "0.84615rem" },
        borderRadius: "0.75rem",
        mt: { xs: "1rem", md: 0 },
        width: { xs: "100%", md: "auto" },
        transition: "0.4s",
      }}
      color="primary"
      onClick={() =>
        mnaps.psg.setGenPass(
          generateRandPass(mnaps.psg.checkBoxes, mnaps.psg.passLength)
        )
      }
    >
      {lang.generateBtn}
    </Button>
  );
};

export default GenerateButton;
