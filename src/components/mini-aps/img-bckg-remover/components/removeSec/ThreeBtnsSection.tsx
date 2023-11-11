import { Stack } from "@mui/joy";
import Btn from "./components/Button";

const ThreeBtnsSection = () => {
  return (
    <Stack
      width={{ xs: "100%", md: "auto" }}
      mt={{ xs: "1.5rem", md: 0 }}
      sx={{ rowGap: "0.5rem" }}
    >
      <Btn txt="Download" />
      <Btn txt="Retry" />
      <Btn txt="Upload" />
    </Stack>
  );
};

export default ThreeBtnsSection;
