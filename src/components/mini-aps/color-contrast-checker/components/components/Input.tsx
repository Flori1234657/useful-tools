import { FormControl, FormLabel, Input } from "@mui/joy";

type Props = {
  label: string;
};

const Inputs = (props: Props) => {
  return (
    <FormControl sx={{ mb: "0.5rem" }}>
      <FormLabel sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        {props.label}
      </FormLabel>
      <Input
        variant="solid"
        color="primary"
        placeholder="#edff32"
        sx={{ borderRadius: "0.75rem" }}
      />
    </FormControl>
  );
};

export default Inputs;
