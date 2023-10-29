import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Button, Option, Select, Stack, Textarea } from "@mui/joy";
import { MdKeyboardArrowDown } from "react-icons/md";
import { selectClasses } from "@mui/joy/Select";
import { useMainStore } from "../../../state/mainState";
import { TaskCard } from "../../../ts/types/taskCard";
import { SelectedStatusOption, HijriTimes } from "../../../ts/enums/tasks";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: TaskCard;
}

const EditTaskModal: React.FC<Props> = ({ open, setOpen, data }) => {
  const mainStore = useMainStore();
  const secPanelTasks = useMainStore(
    (state) => state.language.pages.tasks.secondPanel
  );

  const [time, setTime] = useState<string>(HijriTimes[data.hijriTimes]);
  const [task, setTask] = useState<string>(data.task);
  const [state, setState] = useState<string>(data.status);

  const handleSubmit = () => {
    mainStore.setLoading(true);
    mainStore.setTasks({
      id: data.id,
      //@ts-ignore
      hijriTimes: HijriTimes[time],
      task: task,
      //@ts-ignore
      status: SelectedStatusOption[state],
    });

    mainStore.setLoading(false);
  };

  return (
    <Modal
      aria-labelledby="Edit task modal"
      aria-describedby="Modal to edit task"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          width: { xs: "90.65%", md: "30.769rem" },
          maxWidth: { xs: "500px", sm: "700px" },
          borderRadius: "1.5rem",
          border: "none",
          p: "1.5rem",
          boxShadow: "lg",
          backgroundImage: `linear-gradient(180deg, #43abb8 0%, #394f64 78.12%)`,
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            sx={{ color: "white" }}
            textAlign="center"
            fontWeight="lg"
            mb="1rem"
          >
            Edit this task!
          </Typography>
          <Stack width="100%">
            <Stack my="1rem">
              <Typography
                level="title-md"
                sx={{ color: "white", mb: "0.5rem" }}
              >
                Time
              </Typography>
              <Select
                required
                indicator={<MdKeyboardArrowDown />}
                placeholder="Time"
                defaultValue={time}
                onChange={(e, newVal) =>
                  typeof newVal === "string" ? setTime(newVal) : ""
                }
                sx={{
                  width: { xs: "50%", md: "35%" },
                  fontSize: { xs: "0.813rem", md: "0.8125rem" },
                  borderRadius: "0.8rem",
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                  },
                }}
                variant="solid"
              >
                <Option value={"T1"}>{"Fajr"}</Option>
                <Option value={"T2"}>{"Zuhur"}</Option>
                <Option value={"T3"}>{"Asr"}</Option>
                <Option value={"T4"}>{"Maghrib"}</Option>
                <Option value={"T5"}>{"Isha"}</Option>
              </Select>
            </Stack>
            <Stack>
              <Typography sx={{ color: "white", mb: "0.5rem" }}>
                Task
              </Typography>
              <Textarea
                required
                placeholder="Write task here..."
                variant="solid"
                minRows={4}
                maxRows={4}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                sx={{
                  fontSize: { xs: "0.813rem", md: "0.8125rem" },
                  borderRadius: "0.8rem",
                }}
              />
            </Stack>
            <Stack my="1rem">
              <Typography
                level="title-md"
                sx={{ color: "white", mb: "0.5rem" }}
              >
                State
              </Typography>
              <Select
                required
                indicator={<MdKeyboardArrowDown />}
                placeholder="State"
                onChange={(e, newVal) =>
                  typeof newVal === "string" ? setState(newVal) : ""
                }
                sx={{
                  width: { xs: "50%", md: "35%" },
                  fontSize: { xs: "0.813rem", md: "0.8125rem" },
                  borderRadius: "0.8rem",
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                  },
                }}
                variant="solid"
              >
                <Option value={"O1"}>{"Pending"}</Option>
                <Option value={"O2"}>{"Completed"}</Option>
                <Option value={"O3"}>{"Failed"}</Option>
              </Select>
            </Stack>
            <Stack
              mt="1.5rem"
              direction="row"
              justifyContent="space-between"
              width="100%"
            >
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
                Cancel
              </Button>
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
                Save and Exit
              </Button>
            </Stack>
            <Stack mt="1rem" justifyContent="center" width="100%">
              <Button
                color="warning"
                sx={{
                  borderRadius: "0.8rem",
                  backgroundColor: "#b84743",
                  p: "1em 2em",
                  fontSize: "0.688rem",
                  ":hover": {
                    backgroundColor: "#b84743af",
                  },
                }}
                onClick={() => {
                  mainStore.setLoading(true);
                  mainStore.removeTask(data.id);
                  mainStore.setLoading(false);
                  setOpen(false);
                }}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </form>
      </Sheet>
    </Modal>
  );
};

export default EditTaskModal;
