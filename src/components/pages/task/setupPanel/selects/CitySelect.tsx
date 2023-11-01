import { Select } from "@mui/joy";
import { MdKeyboardArrowDown } from "react-icons/md";
import { selectStyles } from "./sxObj";
import { AvailableCountries as Avc } from "../../../../../ts/enums/countries";
import Options from "./city/Options";
import { useMainStore } from "../../../../../state/mainState";

const CitySelect = (props: { selectedCountry: Avc | undefined }) => {
  const selCn = props.selectedCountry;

  const lang = useMainStore((state) => state.language.pages.tasks.firstPanel);

  return (
    <Select
      dir={lang.countriesNames[0] === "ألبانيا" ? "rtl" : "ltr"}
      disabled={selCn === undefined ? true : false}
      size="sm"
      placeholder={lang.selectsGroup.city}
      sx={selectStyles}
      indicator={<MdKeyboardArrowDown />}
      variant="solid"
      slotProps={{
        listbox: {
          placement: "bottom-start",
        },
      }}
    >
      {selCn !== undefined ? <Options selectedCountry={selCn} /> : ""};
    </Select>
  );
};

export default CitySelect;
