import axios from "axios";
import { useMainStore } from "../../../state/mainState";

interface GetProps {
  country: string;
  city: string;
}

export const getPrayerTimes = async ({ country, city }: GetProps) => {
  const url = `http://api.aladhan.com/v1/timingsByCity?`;

  {
    /**
   ## Prayer times
    We chose to use different calculating method for Maghrib prayer time.
    Because Umm Al-Qura calculates Maghrib always 1h.30m after Asr and 
    we used to get the Maghrib prayer time from Muslim World League 
    calculation method. We don't know if this is the best selection but 
    InnshaaAllah we do not make mistakes. And ALLAH knows best! 
  
  */
  }

  useMainStore.setState(() => ({ loading: true }));

  try {
    const ummAlQura = await axios.get(
      `${url}city=${city}&country=${country}&method=4&midnightMode=1`
    );

    const muslimWorldLeague = await axios.get(
      `${url}city=${city}&country=${country}&method=3&midnightMode=1`
    );

    useMainStore.setState(() => ({ loading: false }));
    return {
      uq: ummAlQura.data.data.timings,
      mwl: muslimWorldLeague.data.data.timings,
    };
  } catch (error) {
    console.log(error);
    useMainStore.setState(() => ({ loading: false }));
    return null;
  }
};
