import { Stack } from "@mui/joy";
import Btn from "./components/Button";
import { useMiniAppsStore } from "../../../../../state/miniAppsState";
import { useMainStore } from "../../../../../state/mainState";

const ThreeBtnsSection = () => {
  const downloadPath = useMiniAppsStore((state) => state.imr.imgDownloadPath);
  const lang = useMainStore(
    (st) => st.language.pages.tools.toolsText.IMR.threeBtns
  );

  return (
    <Stack
      width={{ xs: "100%", md: "auto" }}
      mt={{ xs: "1.5rem", md: 0 }}
      sx={{ rowGap: "0.5rem" }}
    >
      <Btn txt={lang.downl} dwPath={downloadPath} />
      <Btn txt={lang.retry} />
      <Btn txt={lang.upload} />
    </Stack>
  );
};

export default ThreeBtnsSection;
