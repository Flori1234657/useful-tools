import React from "react";
import { Option, Select, Stack, Typography, selectClasses } from "@mui/joy";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useMainStore } from "../../../../../state/mainState";
import useAvailableTimes from "../../../../../hooks/taskPanel/useAvailableTimes";
import { useTaskStore } from "../../../../../state/tasksState";

interface Props {
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

const TimeInput: React.FC<Props> = ({ time, setTime }) => {
  const lang = useMainStore((state) => state.language.pages.tasks.secondPanel);
  const skipped = useTaskStore((state) => state.taskSetup.skipped);
  const returnObj = useAvailableTimes();

  return (
    <Stack
      my="1rem"
      alignItems={
        lang.taskModal.cancelBtn === "يلغي" ? "flex-end" : "flex-start"
      }
    >
      <Typography level="title-md" sx={{ color: "white", mb: "0.5rem" }}>
        {lang.taskModal.sheet.timeSelect.headingText}
      </Typography>
      <Select
        dir={lang.taskModal.cancelBtn === "يلغي" ? "rtl" : "ltr"}
        required
        indicator={<MdKeyboardArrowDown />}
        placeholder={lang.taskModal.sheet.timeSelect.headingText}
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
        {skipped ? (
          <>
            <Option value={"T1"}>{lang.hijriTimes[0]}</Option>
            <Option value={"T2"}>{lang.hijriTimes[1]}</Option>
            <Option value={"T3"}>{lang.hijriTimes[2]}</Option>
            <Option value={"T4"}>{lang.hijriTimes[3]}</Option>
            <Option value={"T5"}>{lang.hijriTimes[4]}</Option>
          </>
        ) : (
          returnObj?.map((el, i) =>
            el ? (
              <Option key={`T${i + 1}`} value={`T${i + 1}`}>
                {lang.hijriTimes[i]}
              </Option>
            ) : (
              ""
            )
          )
        )}
      </Select>
    </Stack>
  );
};

export default TimeInput;
