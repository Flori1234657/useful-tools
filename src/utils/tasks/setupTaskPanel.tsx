import { useTaskStore } from "../../state/tasksState";
import { AvailableCountries } from "../../ts/enums/countries";
import { TaskConfig } from "../../ts/types/taskConfig";
import { getPrayerTimes } from "./setupPanel/axiosRequest";

export const configTaskPanel = async (
  country: AvailableCountries,
  city: string
) => {
  const getRequest = await getPrayerTimes({ country, city });

  if (getRequest === null) {
    alert("Ndodhi nje problem provoni me von");
    return;
  }

  useTaskStore.setState(() => {
    const startPathU = getRequest.uq;
    const startPathM = getRequest.mwl;

    const data: TaskConfig = {
      newUser: false,
      country: country,
      city: city,
      times: {
        Fajr: startPathU.Fajr,
        Sunrise: startPathU.Sunrise,
        Dhuhr: startPathU.Dhuhr,
        Asr: startPathU.Asr,
        Maghrib: startPathM.Maghrib,
        Isha: startPathU.Isha,
      },
    };

    return {
      taskSetup: data,
    };
  });
};
