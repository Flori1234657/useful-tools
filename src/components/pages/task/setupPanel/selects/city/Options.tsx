import { Option } from "@mui/joy";
import { AvailableCountries as Avc } from "../../../../../../ts/enums/countries";
import { useState, useEffect } from "react";
import { useMainStore } from "../../../../../../state/mainState";
import { CountryCity } from "../../../../../../ts/types/cities";
import Cities from "../../../../../../data/cities/en.json";

const Options = (props: { selectedCountry: Avc }) => {
  const selCn = props.selectedCountry;

  const lang = useMainStore((state) => state.language.nav.lang.chosen);

  const [cities, setCities] = useState<CountryCity | undefined>(undefined);

  useEffect(() => {
    import(`../../../../../../data/cities/${lang.toLowerCase()}.json`).then(
      (cities) => setCities(cities.default)
    );
  }, [lang]);

  return (
    cities !== undefined &&
    cities[selCn].map((el, i) => (
      <Option key={el} value={Cities[selCn][i]}>
        {el.replace(/\W\d+/g, " ")}
      </Option>
    ))
  );
};

export default Options;
