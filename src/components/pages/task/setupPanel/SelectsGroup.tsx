import { Stack, Typography } from "@mui/joy";
import CountrySelect from "./selects/CountrySelect";
import CitySelect from "./selects/CitySelect";
import { useState } from "react";
import { AvailableCountries as Avc } from "../../../../ts/enums/countries";
import { useMainStore } from "../../../../state/mainState";

const SelectsGroup = () => {
  const lang = useMainStore((state) => state.language.pages.tasks.firstPanel);
  const [selectedCountry, setSelectedCountry] = useState<Avc | undefined>(
    undefined
  );

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
        <CountrySelect setSelectedCountry={setSelectedCountry} />
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
        <CitySelect selectedCountry={selectedCountry} />
      </Stack>
    </Stack>
  );
};

export default SelectsGroup;
