import { Button } from "@mui/joy";
import React from "react";
import { useMainStore } from "../../../../../state/mainState";

const SubmitButton: React.FC<{ add: boolean }> = ({ add }) => {
  const lang = useMainStore(
    (state) => state.language.pages.tasks.secondPanel.taskModal
  );

  return (
    <Button
      type="submit"
      sx={{
        borderRadius: "0.8rem",
        backgroundColor: "#43abb8",
        p: "1em 2em",
        fontSize: "0.688rem",
        ":hover": {
          backgroundColor: "#43aab8a4",
        },
      }}
    >
      {add ? lang.submitBtn.addTask : lang.submitBtn.editTask}
    </Button>
  );
};

export default SubmitButton;
