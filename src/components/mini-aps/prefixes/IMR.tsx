import { Sheet, Modal } from "@mui/joy";
import { sheetSxObj } from "../SX-objs/sheetSx";
import UploadSection from "../img-bckg-remover/components/uploadSec/UploadSection";
import { useMiniAppsStore } from "../../../state/miniAppsState";
import { useMainStore } from "../../../state/mainState";
import { Suspense, lazy, useEffect } from "react";

const RemoveSection = lazy(
  () => import("../img-bckg-remover/components/removeSec/RemoveSection")
);

const IMR = () => {
  const mainStore = useMainStore();
  const openModal = useMiniAppsStore((state) => state.openModal);

  useEffect(() => mainStore.setLoading(false), []);

  const rmvdImgSt = useMiniAppsStore((state) => state.imr);

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
        {!rmvdImgSt.imgDownloadPath ? (
          <UploadSection />
        ) : (
          <Suspense fallback="">
            <RemoveSection />
          </Suspense>
        )}
      </Sheet>
    </Modal>
  );
};

export default IMR;
