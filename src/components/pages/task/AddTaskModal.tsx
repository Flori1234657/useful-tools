import * as React from "react";
import Modal from "@mui/joy/Modal";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Button, Option, Select, Stack, Textarea } from "@mui/joy";
import { MdKeyboardArrowDown } from "react-icons/md";
import { selectClasses } from "@mui/joy/Select";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskModal: React.FC<Props> = ({ open, setOpen }) => {
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
                variant="solid"
              >
                <Option value={"Fajr"}>{"Fajr"}</Option>
                <Option value={"Zuhur"}>{"Zuhur"}</Option>
                <Option value={"Asr"}>{"Asr"}</Option>
                <Option value={"Maghrib"}>{"Maghrib"}</Option>
                <Option value={"Isha"}>{"Isha"}</Option>
              </Select>
            </Stack>
            <Stack>
              <Typography sx={{ color: "white", mb: "0.5rem" }}>
                Task
              </Typography>
              <Textarea
                placeholder="Write task here..."
                variant="solid"
                minRows={4}
                maxRows={4}
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
        </Sheet>
      </Modal>
    </>
  );
};

export default AddTaskModal;
