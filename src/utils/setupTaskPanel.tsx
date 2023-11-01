import { useMainStore } from "../state/mainState";
import { AvailableCountries } from "../ts/enums/countries";

export const configTaskPanel = (country: AvailableCountries, city: string) => {
  useMainStore.setState((state) => {
    if (state.taskSetup.newUser) {
      return {
        taskSetup: { newUser: false, country: country, city: city },
      };
    }
    return {
      taskSetup: { newUser: false, country: country, city: city },
    };
  });
};
