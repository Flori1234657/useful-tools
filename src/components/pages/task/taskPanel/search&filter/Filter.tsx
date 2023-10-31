import { Select, Option } from "@mui/joy";
import { selectClasses } from "@mui/joy/Select";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useMainStore } from "../../../../../state/mainState";

const Filter = () => {
  const lang = useMainStore((state) => state.language.pages.tasks);

  return (
    <Select
      dir={lang.headingTxt === "خطط ليومك!" ? "rtl" : "ltr"}
      size="sm"
      indicator={<MdKeyboardArrowDown />}
      sx={{
        width: { xs: "70%", md: "8rem" },
        fontSize: { xs: "0.813rem", md: "0.8125rem" },
        my: { xs: "0.5rem", md: 0 },
        borderRadius: "0.75rem",
        pl: "2rem",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          mr: "1rem",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
      placeholder={lang.secondPanel.filter_Status.topText}
      variant="solid"
      slotProps={{
        listbox: {
          placement: "bottom-start",
        },
        button: {
          id: "select-filter",
          "aria-labelledby": "select-label select-filter",
        },
      }}
    >
      <Option value={lang.secondPanel.filter_Status.option1}>
        {lang.secondPanel.filter_Status.option1}
      </Option>
      <Option value={lang.secondPanel.filter_Status.option2}>
        {lang.secondPanel.filter_Status.option2}
      </Option>
      <Option value={lang.secondPanel.filter_Status.option3}>
        {lang.secondPanel.filter_Status.option3}
      </Option>
      <Option value="default">---</Option>
    </Select>
  );
};

export default Filter;
