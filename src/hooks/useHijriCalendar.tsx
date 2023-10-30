import uq from "@umalqura/core";
import { useMainStore } from "../state/mainState";

interface HijriCalendarData {
  hjDate: string;
  hjMonth: number;
  hjYear: string;
  hjMonths: string[];
}

const useHijriCalendar = (): HijriCalendarData => {
  const locale = useMainStore((state) => state.language.nav.lang);

  uq.locale(locale.chosen.toLowerCase()); // Gjuha a muajve
  const hijriDate = uq(new Date()); // data Hixhrit
  const hirjiMonths = uq.months();

  return {
    hjDate: hijriDate.hd.toLocaleString(locale.localeString),
    hjMonth: hijriDate.hm,
    hjYear: hijriDate.hy.toLocaleString(locale.localeString),
    hjMonths: hirjiMonths,
  };
};

export default useHijriCalendar;
