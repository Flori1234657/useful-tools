import { Stack, Typography } from "@mui/joy";
import CountrySelect from "./selects/CountrySelect";
import CitySelect from "./selects/CitySelect";
import { AvailableCountries as Avc } from "../../../../ts/enums/countries";
import { useMainStore } from "../../../../state/mainState";

interface Props {
  selectedCountry: Avc | undefined;
  setSelectedCountry: React.Dispatch<React.SetStateAction<Avc | undefined>>;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
}

const SelectsGroup = (props: Props) => {
  const lang = useMainStore((state) => state.language.pages.tasks.firstPanel);

  return (
    <Stack
      alignItems="center"
      sx={{
        width: { xs: "100%", md: "auto" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Stack
        sx={{ width: { xs: "60%", md: "9.23rem" }, mr: { md: "4.62rem" } }}
      >
        <Typography
          level="h3"
          fontSize="1rem"
          fontWeight="500"
          sx={{ color: "white", mb: { xs: "0.25rem", md: "0.62rem" } }}
          alignSelf={
            lang.countriesNames[0] === "ألبانيا" ? "flex-end" : "flex-start"
          }
        >
          {lang.selectsGroup.country}
        </Typography>
        <CountrySelect
          setSelectedCountry={props.setSelectedCountry}
          setSelectedCity={props.setSelectedCity}
        />
      </Stack>
      <Stack sx={{ width: { xs: "60%", md: "9.23rem" } }}>
        <Typography
          level="h3"
          fontSize="1rem"
          fontWeight="500"
          sx={{
            color: "white",
            mb: { xs: "0.25rem", md: "0.62rem" },
            mt: { xs: "0.5rem", md: 0 },
          }}
          alignSelf={
            lang.countriesNames[0] === "ألبانيا" ? "flex-end" : "flex-start"
          }
        >
          {lang.selectsGroup.city}
        </Typography>
        <CitySelect
          selectedCountry={props.selectedCountry}
          setSelectedCity={props.setSelectedCity}
        />
      </Stack>
    </Stack>
  );
};

export default SelectsGroup;
