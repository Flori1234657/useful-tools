import { Checkbox, Stack, Typography } from "@mui/joy";

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
      <Stack justifyContent="space-between" direction="row" gap="1rem">
        <Checkbox size="sm" label="Ratio" />
        <Checkbox size="sm" label="Width" />
        <Checkbox size="sm" label="Heigh" />
      </Stack>
    </Stack>
  );
};

export default Options;
