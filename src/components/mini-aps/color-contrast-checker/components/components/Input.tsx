import { FormControl, FormLabel, Input } from "@mui/joy";
import { useMainStore } from "../../../../../state/mainState";

type Props = {
  label: string;
  reference: React.MutableRefObject<HTMLInputElement | null>;
  handleChange: () => void;
};

const Inputs = (props: Props) => {
  const dir = useMainStore((st) => st.language.nav.lang.chosen);

  return (
    <FormControl sx={{ mb: "0.5rem" }}>
      <FormLabel
        sx={{
          fontSize: "1rem",
          fontWeight: "bold",
          alignSelf: dir === "AR" ? "flex-end" : "",
        }}
      >
        {props.label}
      </FormLabel>
      <Input
        onChange={props.handleChange}
        type="text"
        variant="solid"
        color="primary"
        placeholder="#edff32"
        sx={{ borderRadius: "0.75rem" }}
        slotProps={{
          input: {
            ref: props.reference,
            maxLength: 7,
            dir: dir === "AR" ? "rtl" : "ltr",
          },
        }}
      />
    </FormControl>
  );
};

export default Inputs;
