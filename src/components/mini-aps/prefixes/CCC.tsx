import { Sheet, Modal } from "@mui/joy";
import { sheetSxObj } from "../SX-objs/sheetSx";
import { useMiniAppsStore } from "../../../state/miniAppsState";
import { useMainStore } from "../../../state/mainState";
import { useEffect } from "react";
import CalculatingSection from "../color-contrast-checker/components/CalculatingSection";
import TitleAndExitBtn from "../components/TitleAndExitBtn";

const CCC = () => {
  const mainStore = useMainStore();
  const lang = useMainStore((st) => st.language.pages.tools.toolsText.CCC);
  const openModal = useMiniAppsStore((state) => state.openModal);

  useEffect(() => mainStore.setLoading(false), []);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={openModal}
      onClose={() =>
        useMiniAppsStore.setState(() => ({
          openModal: false,
        }))
      }
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet variant="outlined" sx={sheetSxObj}>
        <TitleAndExitBtn title={lang.heading} />
        <CalculatingSection />
      </Sheet>
    </Modal>
  );
};

export default CCC;
