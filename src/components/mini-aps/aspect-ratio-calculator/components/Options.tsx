import { RadioGroup, Stack, Typography } from "@mui/joy";
import RadioBtn from "./components/RadioBtn";

const Options = () => {
  return (
    <Stack
      direction="row"
      sx={{ my: "1rem", mt: { md: "2rem" } }}
      alignItems="center"
      flexWrap="wrap"
    >
      <Typography fontWeight="600" fontSize="1rem" mr="1rem">
        Calculate:
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
        <RadioBtn firstWord="W" label="Width" />
        <RadioBtn firstWord="H" label="Height" />
        <RadioBtn firstWord="A" label="Ratio" />
      </RadioGroup>
    </Stack>
  );
};

export default Options;
