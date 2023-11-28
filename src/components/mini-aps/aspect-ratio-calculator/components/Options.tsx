import { RadioGroup, Stack, Typography } from "@mui/joy";
import RadioBtn from "./components/RadioBtn";
import { useMainStore } from "../../../../state/mainState";

const Options = () => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText.ARC);

  return (
    <Stack
      direction="row"
      sx={{ my: "1rem", mt: { md: "2rem" } }}
      alignItems="center"
      flexWrap="wrap"
    >
      <Typography fontWeight="600" fontSize="1rem" mr="1rem">
        {lang.calculate}
      </Typography>

      <RadioGroup
        sx={{
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "1rem",
        }}
        defaultValue="Ratio"
        name="radio-buttons-group"
      >
        <RadioBtn firstWord="W" label={lang.W} />
        <RadioBtn firstWord="H" label={lang.H} />
        <RadioBtn firstWord="A" label={lang.A} />
      </RadioGroup>
    </Stack>
  );
};

export default Options;
