import { FormControl, FormLabel, Input as Inpt } from "@mui/joy";

type Props = {
  label: string;
  ref: React.MutableRefObject<HTMLInputElement | null>;
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
        slotProps={{
          input: {
            ref: props.ref,
          },
        }}
      />
    </FormControl>
  );
};

export default Input;
