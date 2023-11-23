import { Stack, Typography } from "@mui/joy";
import Input from "./components/Input";

const DownSection = () => {
  return (
    <Stack>
      <Stack
        direction="row"
        sx={{ width: { md: "14.62rem" } }}
        justifyContent="space-between"
      >
        <Input label="Width" />
        <Input label="Heigh" />
      </Stack>
      <Stack alignItems="center" my="1rem">
        <Typography fontSize="1.75rem" fontWeight="500">
          Result
        </Typography>
        <Typography fontWeight="bold" fontSize="1.438rem">
          16/9
        </Typography>
      </Stack>
    </Stack>
  );
};

export default DownSection;
