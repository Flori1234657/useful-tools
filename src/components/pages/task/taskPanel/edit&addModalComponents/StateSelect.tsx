import React from "react";
import { Option, Select, Stack, Typography, selectClasses } from "@mui/joy";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useMainStore } from "../../../../../state/mainState";

interface Props {
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const StateSelect: React.FC<Props> = ({ setState }) => {
  const lang = useMainStore((state) => state.language.pages.tasks.secondPanel);

  return (
    <Stack
      my="1rem"
      alignItems={
        lang.taskModal.cancelBtn === "يلغي" ? "flex-end" : "flex-start"
      }
    >
      <Typography level="title-md" sx={{ color: "white", mb: "0.5rem" }}>
        {lang.taskModal.sheet.stateSelect.headingText}{" "}
      </Typography>
      <Select
        required
        indicator={<MdKeyboardArrowDown />}
        placeholder={lang.taskModal.sheet.stateSelect.headingText}
        dir={lang.taskModal.cancelBtn === "يلغي" ? "rtl" : "ltr"}
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
        <Option value={"O1"}>{lang.filter_Status.option1}</Option>
        <Option value={"O2"}>{lang.filter_Status.option2}</Option>
        <Option value={"O3"}>{lang.filter_Status.option3}</Option>
      </Select>
    </Stack>
  );
};

export default StateSelect;
