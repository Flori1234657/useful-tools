import * as React from "react";
import { Modal, Sheet } from "@mui/joy";
import { useMainStore } from "../../../state/mainState";
import SectionTitle from "../pass-generator/components/SectionTitle";
import SectionCalc from "../pass-generator/components/SectionCalc";
import GenerateButton from "../pass-generator/components/GenerateButton";
import { useMiniAppsStore } from "../../../state/miniAppsState";
import { sheetSxObj } from "../SX-objs/sheetSx";

const PSG = () => {
  const mainStore = useMainStore();
  const openModal = useMiniAppsStore((state) => state.openModal);

  React.useEffect(() => mainStore.setLoading(false), []);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={openModal}
      onClose={() =>
        useMiniAppsStore.setState((st) => ({
          openModal: false,
          psg: { ...st.psg, generatedPassword: "" },
        }))
      }
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet variant="outlined" sx={sheetSxObj}>
        <SectionTitle />
        <SectionCalc />
        <GenerateButton />
      </Sheet>
    </Modal>
  );
};
export default PSG;
