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
}

const AddTaskModal: React.FC<Props> = ({ open, setOpen }) => {
  const store = useMainStore();

  const [time, setTime] = useState<string>("");
  const [task, setTask] = useState<string>("");

  const handleSubmit = () => {
    store.setLoading(true);

    const id: number | null =
      store.tasks.length > 0 ? store.tasks[store.tasks.length - 1].id : null;

    const tsk: TaskCard = {
      id: id !== null ? id + 1 : 1,
      //@ts-ignore
      hijriTimes: HijriTimes[time],
      task: task,
      status: SelectedStatusOption.O1,
    };
    store.setTasks(tsk);

    setTime("");
    setTask("");
    store.setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <Modal
        aria-labelledby="Add task modal"
        aria-describedby="Modal to add a new task"
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
              Add a new task!
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
                  onChange={(e, newVal) =>
                    typeof newVal === "string" ? setTime(newVal) : ""
                  }
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
                    backgroundColor: "#b84743",
                    p: "1em 2em",
                    fontSize: "0.688rem",
                    ":hover": {
                      backgroundColor: "#b84743af",
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
                  Add Task
                </Button>
              </Stack>
            </Stack>
          </form>{" "}
        </Sheet>
      </Modal>
    </>
  );
};

export default AddTaskModal;
