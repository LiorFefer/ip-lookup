import { InternetProtocol } from "../custom-hooks/useInternetProtocolsList";
import { COUNTRIES, CountryID } from "./mockData";

export const fetInternetProtocolCountry = async (
  internetProtocol: InternetProtocol
): Promise<InternetProtocol> => {
  const countryID = await fetchDataMock();
  return { ...internetProtocol, countryID };
};

const fetchDataMock = async (): Promise<CountryID> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = Math.floor(Math.random() * COUNTRIES.length);
      const countryID = COUNTRIES[index];
      resolve(countryID);
    }, 1000);
  });
};
