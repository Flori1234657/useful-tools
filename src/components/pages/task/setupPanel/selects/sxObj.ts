import { selectClasses } from "@mui/joy";

export const selectStyles = {
  borderRadius: "0.75rem",
  backgroundColor: "#375165",
  fontSize: "0.813rem",
  [`& .${selectClasses.indicator}`]: {
    transition: "0.2s",
    mr: "1rem",
    [`&.${selectClasses.expanded}`]: {
      transform: "rotate(-180deg)",
    },
  },
  ":hover": {
    backgroundColor: "#375165",
  },
};
