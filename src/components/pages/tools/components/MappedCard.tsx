import React, { useState } from "react";
import { ToolObj } from "../../../../ts/types/toolsObjArr";
import { useMainStore } from "../../../../state/mainState";
import { useMiniAppsStore } from "../../../../state/miniAppsState";
import useBestImage from "../../../../hooks/useBestImage";

type Props = {
  el: ToolObj;
  setModalCredentials: React.Dispatch<React.SetStateAction<string>>;
  i: number;
};

const MappedCard = (props: Props) => {
  const lang = useMainStore((state) => state.language.pages.tools);
  const bckgImport = useBestImage({
    path: `../assets/images/toolsImgs/${props.el.imgCredentials}.webp`,
  });

  return (
    <div
      className="tools__panel__cards-grid__card"
      aria-label="Card Item"
      onClick={() => {
        props.setModalCredentials(props.el.credentials);
        useMiniAppsStore.setState(() => ({ openModal: true }));
      }}
      style={bckgImport ? { backgroundImage: `url(${bckgImport})` } : {}}
    >
      <h3>{lang.toolsNames[props.i]}</h3>
    </div>
  );
};

export default MappedCard;
