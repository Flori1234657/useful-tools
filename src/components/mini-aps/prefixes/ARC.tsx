import { Sheet, Modal } from "@mui/joy";
import { sheetSxObj } from "../SX-objs/sheetSx";
import { useMiniAppsStore } from "../../../state/miniAppsState";
import { useMainStore } from "../../../state/mainState";
import { useEffect } from "react";
import TitleAndExitBtn from "../components/TitleAndExitBtn";
import DownSection from "../aspect-ratio-calculator/components/DownSection";
import Options from "../aspect-ratio-calculator/components/Options";

const ARC = () => {
  const mainStore = useMainStore();
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
        <TitleAndExitBtn title="Calculate aspect ratio" />
        <Options />
        <DownSection />
      </Sheet>
    </Modal>
  );
};

export default ARC;
