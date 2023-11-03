import { Button, Stack } from "@mui/joy";
import { useMainStore } from "../../../../state/mainState";
import { AvailableCountries as Avc } from "../../../../ts/enums/countries";

interface Props {
  con: Avc | undefined;
  cit: string;
}

const ButtonsGr = (props: Props) => {
  const lang = useMainStore((state) => state.language.pages.tasks.firstPanel);
  const mainStore = useMainStore();

  return (
    <Stack
      mt={{ xs: "1.5rem", md: 0 }}
      mb={{ xs: "2rem", md: 0 }}
      my={{ md: "2.462rem" }}
      direction={{ xs: "column", md: "row" }}
      width={{ xs: "100%", md: "auto" }}
    >
      <Button
        loading={mainStore.loading}
        disabled={props.con === undefined || props.cit === ""}
        type="submit"
        sx={{
          fontSize: { xs: "0.813rem", md: "0.84615rem" },
          borderRadius: "0.75rem",
          mb: { xs: "0.5rem", md: 0 },
          mr: { md: "9rem" },
          backgroundColor: "white",
          color: "#375165",
          ":focus": {
            backgroundColor: "white",
          },
          ":hover": {
            backgroundColor: "white",
          },
        }}
      >
        {lang.buttons.btnContinue}
      </Button>
      <Button
        sx={{
          fontSize: { xs: "0.813rem", md: "0.84615rem" },
          borderRadius: "0.75rem",
          backgroundColor: "white",
          color: "#375165",
          ":focus": {
            backgroundColor: "white",
          },
          ":hover": {
            backgroundColor: "white",
          },
        }}
      >
        {lang.buttons.btnSkip}
      </Button>
    </Stack>
  );
};

export default ButtonsGr;
