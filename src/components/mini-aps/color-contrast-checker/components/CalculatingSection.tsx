import { Stack } from "@mui/joy";
import TestingCard from "./components/TestingCard";
import Inputs from "./components/Input";
import DownActions from "./components/DownActions";

const CalculatingSection = () => {
  return (
    <Stack sx={{ mt: { md: "2rem" } }}>
      <Stack
        sx={{
          flexDirection: { md: "row" },
          justifyContent: { md: "space-between" },
        }}
      >
        <Stack sx={{ width: { md: "7.30769rem" } }}>
          <Inputs label="Text color" />
          <Inputs label="Background" />
        </Stack>
        <TestingCard />
      </Stack>
      <DownActions />
    </Stack>
  );
};

export default CalculatingSection;
