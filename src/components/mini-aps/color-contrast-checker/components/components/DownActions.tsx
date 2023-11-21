import { Button, Stack, Typography } from "@mui/joy";

const DownActions = () => {
  return (
    <Stack sx={{ flexDirection: { md: "row" }, alignItems: "center" }}>
      <Typography
        fontSize="1rem"
        sx={{ mb: { xs: "0.5rem", md: 0 }, mr: { md: "0.2rem" } }}
      >
        Get a better contrast:
      </Typography>
      <Button color="neutral" variant="plain" sx={{ borderRadius: "0.75rem" }}>
        For Text
      </Button>
      <Button color="neutral" variant="plain" sx={{ borderRadius: "0.75rem" }}>
        For Background
      </Button>
    </Stack>
  );
};

export default DownActions;
