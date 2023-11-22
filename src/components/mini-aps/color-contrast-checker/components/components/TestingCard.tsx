import { Card, CardContent, Typography } from "@mui/joy";
import { useMainStore } from "../../../../../state/mainState";

type Props = {
  txt?: "GOOD" | "BAD" | "MIDDLE";
  ratio?: number;
  txtCol?: string;
  bckgCol?: string;
};

const TestingCard = (props: Props) => {
  const lang = useMainStore(
    (st) => st.language.pages.tools.toolsText.CCC.level
  );
  const locale = useMainStore((st) => st.language.nav.lang.localeString);

  const txts = {
    GOOD: lang.GOOD,
    BAD: lang.BAD,
    MIDDLE: lang.MIDDLE,
    PLACEHOLDER: lang.PLACEHOLDER,
  };

  return (
    <Card
      variant="solid"
      sx={{
        my: { xs: "1.5rem" },
        width: { md: "13.53846rem" },
        height: { md: "7.76923rem" },
        aspectRatio: { xs: "2/1", md: "auto" },
        ml: { md: "2.31rem" },
        backgroundColor: props.bckgCol ? props.bckgCol : "",
      }}
    >
      <CardContent sx={{ alignItems: "center", justifyContent: "center" }}>
        <Typography
          level="title-md"
          textColor="inherit"
          sx={props.txtCol ? { color: props.txtCol } : {}}
        >
          {txts[props.txt ?? "PLACEHOLDER"]}
        </Typography>
        <Typography
          textColor="inherit"
          fontSize="1.188rem"
          fontWeight="bold"
          sx={props.txtCol ? { color: props.txtCol } : {}}
        >
          {props.ratio ? props.ratio.toLocaleString(locale) : 0}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestingCard;
