import React from "react";
import toolsObjectArr from "../../../data/tools";
import { useMainStore } from "../../../state/mainState";

const MapToolsCards = (props: {
  setModalCredentials: React.Dispatch<React.SetStateAction<string>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const lang = useMainStore((state) => state.language.pages.tools);

  return toolsObjectArr.map((el, i) => (
    <div
      key={el.id}
      className="tools__panel__cards-grid__card"
      aria-label="Card Item"
      onClick={() => {
        props.setModalCredentials(el.credentials);
        props.setOpenModal(true);
      }}
    >
      <h3>{lang.toolsNames[i]}</h3>
    </div>
  ));
};

export default MapToolsCards;
