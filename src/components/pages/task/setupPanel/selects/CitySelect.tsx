import { Select } from "@mui/joy";
import { MdKeyboardArrowDown } from "react-icons/md";
import { selectStyles } from "./sxObj";
import { AvailableCountries as Avc } from "../../../../../ts/enums/countries";
import Options from "./city/Options";
import { useMainStore } from "../../../../../state/mainState";

interface Props {
  selectedCountry: Avc | undefined;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
}

const CitySelect = (props: Props) => {
  const selCn = props.selectedCountry;

  const lang = useMainStore((state) => state.language.pages.tasks.firstPanel);

  return (
    <Select
      dir={lang.countriesNames[0] === "ألبانيا" ? "rtl" : "ltr"}
      disabled={selCn === undefined}
      size="sm"
      placeholder={lang.selectsGroup.city}
      sx={selectStyles}
      indicator={<MdKeyboardArrowDown />}
      variant="solid"
      onChange={(e, val) =>
        typeof val === "string" && props.setSelectedCity(val)
      }
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
