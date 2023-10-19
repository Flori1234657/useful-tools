import { Select, Option } from "@mui/joy";
import { selectClasses } from "@mui/joy/Select";
import { MdKeyboardArrowDown } from "react-icons/md";

const SelectCont = () => {
  return (
    <Select
      size="sm"
      indicator={<MdKeyboardArrowDown />}
      sx={{
        width: "80%",
        fontSize: "0.813rem",
        my: "1rem",
        borderRadius: "0.5rem",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
      placeholder="Lang: EN"
      variant="solid"
      slotProps={{
        listbox: {
          placement: "bottom-start",
        },
        // button: {
        //   id: "select-button",
        //   "aria-labelledby": "select-label select-button",
        // },
      }}
    >
      <Option value="AR">AR</Option>
      <Option value="EN">EN</Option>
      <Option value="HI">HI</Option>
      <Option value="RU">RU</Option>
      <Option value="SQ">SQ</Option>
      <Option value="TR">TR</Option>
    </Select>
  );
};

export default SelectCont;
