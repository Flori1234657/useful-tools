import { Select, Option } from "@mui/joy";
import { selectClasses } from "@mui/joy/Select";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Nav } from "../../ts/types/lang";
import { changeLang } from "../../utils/changeLang";
import { LangType } from "../../ts/enums/language";

const SelectCont = (str: Nav) => {
  return (
    <Select
      onChange={(e, newVal: LangType | null) => {
        if (newVal !== null) changeLang(LangType[newVal]);
      }}
      size="sm"
      indicator={<MdKeyboardArrowDown />}
      sx={{
        width: { xs: "80%", md: "3.387rem" },
        fontSize: { xs: "0.813rem", md: "0.8125rem" },
        my: { xs: "1rem", md: 0 },
        borderRadius: "0.5rem",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
      placeholder={str.lang.chosen}
      variant="solid"
      slotProps={{
        listbox: {
          placement: "bottom-start",
        },
        button: {
          id: "select-lang",
          "aria-labelledby": "select-label select-lang",
        },
      }}
    >
      <Option value={str.lang.available[0]}>{str.lang.available[0]}</Option>
      <Option value={str.lang.available[1]}>{str.lang.available[1]}</Option>
      <Option value={str.lang.available[2]}>{str.lang.available[2]}</Option>
      <Option value={str.lang.available[3]}>{str.lang.available[3]}</Option>
      <Option value={str.lang.available[4]}>{str.lang.available[4]}</Option>
      <Option value={str.lang.available[5]}>{str.lang.available[5]}</Option>
    </Select>
  );
};

export default SelectCont;
