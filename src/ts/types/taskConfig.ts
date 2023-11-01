import { AvailableCountries } from "../enums/countries";

export type TaskConfig = {
  newUser: boolean;
  country?: AvailableCountries;
  city?: string;
};
