import * as React from "react";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import { useMainStore } from "../../state/mainState";
import SectionTitle from "./pass-generator/components/SectionTitle";
import SectionCalc from "./pass-generator/components/SectionCalc";
import GenerateButton from "./pass-generator/components/GenerateButton";
import { useMiniAppsStore } from "../../state/miniAppsState";

const PSG = () => {
  const mainStore = useMainStore();
  const openModal = useMiniAppsStore((state) => state.openModal);

  React.useEffect(() => mainStore.setLoading(false), []);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={openModal}
      onClose={() => useMiniAppsStore.setState(() => ({ openModal: false }))}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          width: { xs: "90.65%", md: "30.76923rem" },
          maxWidth: { xs: "700px" },
          borderRadius: { xs: "1.5rem", md: "1.23rem" },
          p: { xs: "1.5rem", md: "2rem" },
          boxShadow: "lg",
          display: { md: "flex" },
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <SectionTitle />
        <SectionCalc />
        <GenerateButton />
      </Sheet>
    </Modal>
  );
};
export default PSG;
