import { Button } from "@mui/joy";

const Btn = (props: { txt: string }) => {
  return (
    <Button
      sx={{
        borderRadius: "0.75rem",
        fontSize: { xs: "0.813rem" },
        width: { xs: "100%", md: "auto" },
      }}
    >
      {props.txt}
    </Button>
  );
};

export default Btn;
