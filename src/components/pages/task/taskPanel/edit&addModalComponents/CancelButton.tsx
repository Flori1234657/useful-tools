import { Button } from "@mui/joy";
import React from "react";
import { useMainStore } from "../../../../../state/mainState";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CancelButton: React.FC<Props> = ({ setOpen }) => {
  const lang = useMainStore(
    (state) => state.language.pages.tasks.secondPanel.taskModal
  );

  return (
    <Button
      color="danger"
      sx={{
        borderRadius: "0.8rem",
        backgroundColor: "#43abb8",
        p: "1em 2em",
        fontSize: "0.688rem",
        ":hover": {
          backgroundColor: "#43aab8a4",
        },
      }}
      onClick={() => setOpen(false)}
    >
      {lang.cancelBtn}
    </Button>
  );
};

export default CancelButton;
