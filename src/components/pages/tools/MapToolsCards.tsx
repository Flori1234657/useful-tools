import React from "react";
import toolsObjectArr from "../../../data/tools";
import MappedCard from "./components/MappedCard";

const MapToolsCards = (props: {
  setModalCredentials: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return toolsObjectArr.map((el, i) => (
    <MappedCard
      key={el.id}
      i={i}
      el={el}
      setModalCredentials={props.setModalCredentials}
    />
  ));
};

export default MapToolsCards;
