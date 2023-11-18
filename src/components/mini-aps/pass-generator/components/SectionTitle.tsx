import { Stack } from "@mui/joy";
import TitleAndExitBtn from "../../components/TitleAndExitBtn";
import { useMainStore } from "../../../../state/mainState";
import { useMiniAppsStore } from "../../../../state/miniAppsState";

const SectionTitle = () => {
  const lang = useMainStore((st) => st.language.pages.tools.toolsText.PSG);

  const exitAction = () => {
    useMiniAppsStore.setState((st) => ({
      psg: { ...st.psg, generatedPassword: "" },
    }));
  };

  return <TitleAndExitBtn otherActions={exitAction} title={lang.heading} />;
};

export default SectionTitle;
