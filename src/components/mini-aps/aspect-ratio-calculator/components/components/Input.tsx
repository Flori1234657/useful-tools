import { FormControl, FormLabel, Input as Inpt } from "@mui/joy";

type Props = {
  label: string;
};

const Input = (props: Props) => {
  return (
    <FormControl sx={{ width: "5.5rem" }}>
      <FormLabel sx={{ fontSize: "1rem", fontWeight: "600" }}>
        {props.label}
      </FormLabel>
      <Inpt
        sx={{ borderRadius: "0.75rem" }}
        variant="solid"
        size="sm"
        placeholder="1500px"
      />
    </FormControl>
  );
};

export default Input;
