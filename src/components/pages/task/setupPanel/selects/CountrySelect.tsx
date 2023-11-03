import { Option, Select } from "@mui/joy";
import { MdKeyboardArrowDown } from "react-icons/md";
import { selectStyles } from "./sxObj";
import { AvailableCountries as Avc } from "../../../../../ts/enums/countries";
import { useMainStore } from "../../../../../state/mainState";

const CountrySelect = (props: {
  setSelectedCountry: React.Dispatch<React.SetStateAction<Avc | undefined>>;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const setCountry = props.setSelectedCountry;

  const lang = useMainStore((state) => state.language.pages.tasks.firstPanel);

  return (
    <Select
      dir={lang.countriesNames[0] === "ألبانيا" ? "rtl" : "ltr"}
      size="sm"
      placeholder={lang.selectsGroup.country}
      sx={selectStyles}
      indicator={<MdKeyboardArrowDown />}
      variant="solid"
      onChange={(e, val) =>
        val !== null &&
        //@ts-ignore
        setCountry((prev) => {
          if (prev !== val) props.setSelectedCity("");
          return val;
        })
      }
      slotProps={{
        listbox: {
          placement: "bottom-start",
        },
      }}
    >
      <Option value={Avc.AL}>{lang.countriesNames[0]}</Option>
      <Option value={Avc.EG}>{lang.countriesNames[1]}</Option>
      <Option value={Avc.IN}>{lang.countriesNames[2]}</Option>
      <Option value={Avc.IQ}>{lang.countriesNames[3]}</Option>
      <Option value={Avc.KSA}>{lang.countriesNames[4]}</Option>
      <Option value={Avc.PK}>{lang.countriesNames[5]}</Option>
      <Option value={Avc.PS}>{lang.countriesNames[6]}</Option>
      <Option value={Avc.RU}>{lang.countriesNames[7]}</Option>
      <Option value={Avc.SY}>{lang.countriesNames[8]}</Option>
      <Option value={Avc.TR}>{lang.countriesNames[9]}</Option>
      <Option value={Avc.UK}>{lang.countriesNames[10]}</Option>
      <Option value={Avc.US}>{lang.countriesNames[11]}</Option>
    </Select>
  );
};

export default CountrySelect;

{
  /**

///------------ SELECT PROPS -------------///

    // SLOT PROPS --//

         button: {
             id: "select-filter",
             "aria-labelledby": "select-label select-filter",
           },

*/
}
