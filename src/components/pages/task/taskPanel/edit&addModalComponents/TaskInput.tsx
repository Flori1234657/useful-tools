import { Stack, Textarea, Typography } from "@mui/joy";
import React from "react";
import { useMainStore } from "../../../../../state/mainState";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
}

const TaskInput: React.FC<Props> = ({ task, setTask }) => {
  const lang = useMainStore(
    (state) => state.language.pages.tasks.secondPanel.taskModal
  );

  return (
    <Stack alignItems={lang.cancelBtn === "يلغي" ? "flex-end" : "flex-start"}>
      <Typography sx={{ color: "white", mb: "0.5rem" }}>
        {lang.sheet.taskTextArea.headingText}
      </Typography>
      <Textarea
        dir={lang.cancelBtn === "يلغي" ? "rtl" : "ltr"}
        required
        placeholder={lang.sheet.taskTextArea.placeholder}
        variant="solid"
        minRows={4}
        maxRows={4}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{
          width: "100%",
          fontSize: { xs: "0.813rem", md: "0.8125rem" },
          borderRadius: "0.8rem",
        }}
        slotProps={{
          textarea: {
            maxLength: 52,
          },
        }}
      />
    </Stack>
  );
};

export default TaskInput;
