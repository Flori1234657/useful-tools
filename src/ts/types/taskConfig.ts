import { AvailableCountries } from "../enums/countries";

export type TaskConfig = {
  newUser: boolean;
  country?: AvailableCountries;
  city?: string;
  times?: HijriDayTimes;
};

export type HijriDayTimes = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};
