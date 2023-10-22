import { Select, Option } from "@mui/joy";
import { selectClasses } from "@mui/joy/Select";
import { MdKeyboardArrowDown } from "react-icons/md";

const Filter = () => {
  return (
    <Select
      size="sm"
      indicator={<MdKeyboardArrowDown />}
      sx={{
        width: { xs: "70%", md: "3.387rem" },
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
      placeholder="Filter"
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
      <Option value="Pending">Pending</Option>
      <Option value="Completed">Completed</Option>
      <Option value="Failed">Failed</Option>
      <Option value="default">No Filter</Option>
    </Select>
  );
};

export default Filter;
