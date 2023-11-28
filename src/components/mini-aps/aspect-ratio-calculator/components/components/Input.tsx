import { FormControl, FormLabel, Input as Inpt } from "@mui/joy";
import { forwardRef } from "react";
import { useMainStore } from "../../../../../state/mainState";

type Props = {
  label: string;
  calculate: () => void;
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const lang = useMainStore((st) => st.language.nav.lang.chosen);

  return (
    <FormControl sx={{ width: "5.5rem" }}>
      <FormLabel
        sx={{
          fontSize: "1rem",
          fontWeight: "600",
          alignSelf: lang === "AR" ? "flex-end" : "flex-start",
        }}
      >
        {props.label}
      </FormLabel>
      <Inpt
        onChange={props.calculate}
        type="number"
        sx={{ borderRadius: "0.75rem" }}
        variant="solid"
        size="sm"
        placeholder="1500px"
        slotProps={{
          input: {
            ref: ref,
            dir: lang === "AR" ? "rtl" : "ltr",
          },
        }}
      />
    </FormControl>
  );
});

export default Input;
