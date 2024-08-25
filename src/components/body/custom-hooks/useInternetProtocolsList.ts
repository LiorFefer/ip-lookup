import { createGlobalState } from "../../../services/createGlobalState";
import { CountryID } from "../utils/mockData";

export type InternetProtocol = {
  id: string;
  ip?: string;
  loadingState?: "initial" | "loading" | "loaded" | "error";
  countryID?: CountryID;
};

type ID = string;

export type InternetProtocols = Record<ID, InternetProtocol>;

const INITIAL_INTERNET_PROTOCOLS: InternetProtocols = {};

export const useInternetProtocolsList = createGlobalState(
  INITIAL_INTERNET_PROTOCOLS
);
