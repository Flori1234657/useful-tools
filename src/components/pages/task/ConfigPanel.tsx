import SelectsGroup from "./setupPanel/SelectsGroup";
import ButtonsGr from "./setupPanel/ButtonsGr";
import { Typography } from "@mui/joy";
import { useMainStore } from "../../../state/mainState";

const ConfigPanel = () => {
  const lang = useMainStore((state) => state.language.pages.tasks.firstPanel);

  return (
    <div className="tasks__config-panel" aria-label="Config Task Panel">
      <h2>{lang.headingTxt}</h2>
      <form>
        <SelectsGroup />
        <Typography
          level="h4"
          fontWeight="400"
          sx={{
            color: "white",
            fontSize: { xs: "0.688rem", md: "0.84615rem" },
            px: { md: "5.77rem" },
          }}
          textAlign="center"
          mt="1.5rem"
        >
          {lang.informationText}
        </Typography>
        <ButtonsGr />
      </form>
    </div>
  );
};

export default ConfigPanel;
