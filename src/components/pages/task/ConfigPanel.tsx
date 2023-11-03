import SelectsGroup from "./setupPanel/SelectsGroup";
import ButtonsGr from "./setupPanel/ButtonsGr";
import { Typography } from "@mui/joy";
import { useMainStore } from "../../../state/mainState";
import { useState } from "react";
import { AvailableCountries as Avc } from "../../../ts/enums/countries";
import { configTaskPanel } from "../../../utils/tasks/setupTaskPanel";
import Error from "../../error/Error";

const ConfigPanel = () => {
  const lang = useMainStore((state) => state.language.pages.tasks.firstPanel);

  const [selectedCountry, setSelectedCountry] = useState<Avc | undefined>(
    undefined
  );
  const [selectedCity, setSelectedCity] = useState<string>("");

  return (
    <div className="tasks__config-panel" aria-label="Config Task Panel">
      <h2>{lang.headingTxt}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          configTaskPanel(selectedCountry!, selectedCity);
        }}
      >
        <SelectsGroup
          selectedCountry={selectedCountry}
          setSelectedCity={setSelectedCity}
          setSelectedCountry={setSelectedCountry}
        />
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
        <ButtonsGr cit={selectedCity} con={selectedCountry} />
      </form>
      <Error />
    </div>
  );
};

export default ConfigPanel;
