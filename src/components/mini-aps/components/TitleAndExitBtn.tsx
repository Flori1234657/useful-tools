import { IconButton, Typography } from "@mui/joy";
import { useMiniAppsStore } from "../../../state/miniAppsState";
import { IoExit } from "react-icons/io5";
import { useMainStore } from "../../../state/mainState";
import { Stack } from "@mui/system";

const TitleAndExitBtn = <T,>(props: {
  otherActions?: () => void;
  title: string;
}) => {
  const dir = useMainStore((state) => state.language.nav.lang.chosen);

  return (
    <Stack
      direction={{ md: "row" }}
      alignItems="center"
      justifyContent="center"
      sx={{ mb: "1rem", m: 0 }}
    >
      <Typography
        level="h1"
        sx={dir === "AR" ? { order: 2 } : {}}
        textAlign="center"
        fontSize={{ xs: "1.438rem", md: "1.46154rem", color: "#375165" }}
      >
        {props.title}
      </Typography>
      <IconButton
        aria-label="Exit from this tool"
        color="danger"
        sx={{
          fontSize: { xs: "1.438rem", md: "1.46154rem" },
          borderRadius: "0.75rem",
          ml: dir !== "AR" ? { md: "3.46rem" } : "",
          mr: dir === "AR" ? { md: "3.46rem" } : "",
          mt: { xs: "0.5rem", md: 0 },
        }}
        onClick={() => {
          useMiniAppsStore.setState(() => ({
            openModal: false,
          }));

          props.otherActions ? props.otherActions() : "";
        }}
      >
        <IoExit />
      </IconButton>
    </Stack>
  );
};

export default TitleAndExitBtn;
