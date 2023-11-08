import { Modal } from "@mui/joy";
import { useMainStore } from "../../state/mainState";

const Loader = () => {
  const load = useMainStore((state) => state.loading);

  return (
    <Modal
      open={load}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div id="loader" aria-label="Loading animation"></div>
    </Modal>
  );
};

export default Loader;
