import { useMainStore } from "../../../state/mainState";
import MapToolsCards from "./MapToolsCards";
import { useState } from "react";
import ToolModal from "./ToolModal";
import Error from "../../error/Error";

const ToolCard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalCredentials, setModalCredentials] = useState<string>("");

  const mainStore = useMainStore();
  const lang = useMainStore((state) => state.language.pages.tools);

  return (
    <div
      className="tools__panel__cards-grid"
      aria-label="Grid for cards of tools"
    >
      <MapToolsCards
        setOpenModal={setOpenModal}
        setModalCredentials={setModalCredentials}
      />
      {openModal && !mainStore.errors ? (
        <ToolModal modalCredentials={modalCredentials} />
      ) : (
        ""
      )}
      <Error errStr={lang.openError} />
    </div>
  );
};

export default ToolCard;
