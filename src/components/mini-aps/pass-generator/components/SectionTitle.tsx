import { IconButton, Stack, Typography } from "@mui/joy";
import { IoExit } from "react-icons/io5";
import { useMiniAppsStore } from "../../../../state/miniAppsState";
import { useMainStore } from "../../../../state/mainState";

const SectionTitle = () => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText);

  return (
    <Stack
      direction={{ md: "row" }}
      alignItems="center"
      justifyContent="center"
      sx={{ mb: "1rem", m: 0 }}
    >
      <Typography
        level="h1"
        sx={lang.heading === "إنشاء كلمة مرور" ? { order: 2 } : {}}
        slotProps={
          lang.heading === "إنشاء كلمة مرور" ? { root: { dir: "rtl" } } : {}
        }
        fontSize={{ xs: "1.438rem", md: "1.46154rem" }}
      >
        {lang.heading}
      </Typography>
      <IconButton
        aria-label="Exit from this tool"
        color="danger"
        sx={{
          fontSize: { xs: "1.438rem", md: "1.46154rem" },
          borderRadius: "0.75rem",
          ml: { md: "3.46rem" },
          mt: { xs: "0.5rem", md: 0 },
        }}
        onClick={() => useMiniAppsStore.setState(() => ({ openModal: false }))}
      >
        <IoExit />
      </IconButton>
    </Stack>
  );
};

export default SectionTitle;
