import { useTaskStore } from "../../state/tasksState";
import { AvailableCountries } from "../../ts/enums/countries";
import { TaskConfig } from "../../ts/types/taskConfig";
import { getPrayerTimes } from "./setupPanel/axiosRequest";

export const configTaskPanel = async (
  country: AvailableCountries,
  city: string
) => {
  const getRequest = await getPrayerTimes({ country, city });

  if (getRequest === null) return;

  useTaskStore.setState(() => {
    const startPathU = getRequest.uq;
    const startPathM = getRequest.mwl;

    const date = new Date();

    const data: TaskConfig = {
      newUser: false,
      country: country,
      city: city,
      fetchDate: `${date.getDate()}${date.getMonth()}${date.getFullYear()}`,
      skipped: false,
      times: {
        Fajr: startPathU.Fajr,
        Sunrise: startPathU.Sunrise,
        Dhuhr: startPathU.Dhuhr,
        Asr: startPathU.Asr,
        Maghrib: startPathM.Maghrib,
        Isha: startPathU.Isha,
        Midnight: startPathM.Midnight,
      },
    };

    return {
      taskSetup: data,
    };
  });
};
