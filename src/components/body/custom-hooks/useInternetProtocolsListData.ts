import { fetInternetProtocolCountry } from "../utils/fetInternetProtocolCountry";
import {
  InternetProtocol,
  InternetProtocols,
  useInternetProtocolsList,
} from "./useInternetProtocolsList";

export const useInternetProtocolsListData = (): [
  internetProtocols: InternetProtocols,
  setInternetProtocols: (internetProtocols: InternetProtocols) => void
] => {
  const [internetProtocols, _setInternetProtocols] = useInternetProtocolsList();

  const setInternetProtocols = (internetProtocols: InternetProtocols) => {
    const internetProtocolsToFetch = Object.values(internetProtocols).filter(
      (internetProtocol) => internetProtocol.loadingState === "initial"
    );

    const onFetchedInternetProtocol = (internetProtocol: InternetProtocol) => {
      const { id } = internetProtocol;
      _setInternetProtocols((internetProtocols) => ({
        ...internetProtocols,
        [id]: { ...internetProtocol, loadingState: "loaded" as const },
      }));
    };

    internetProtocolsToFetch.forEach((internetProtocol) => {
      fetInternetProtocolCountry(internetProtocol).then(
        onFetchedInternetProtocol
      );
    });

    const loadingInternetProtocols = internetProtocolsToFetch.reduce(
      (acc, internetProtocol) => {
        const { id } = internetProtocol;
        return {
          ...acc,
          [id]: { ...internetProtocol, loadingState: "loading" },
        };
      },
      {}
    );
    _setInternetProtocols({
      ...internetProtocols,
      ...loadingInternetProtocols,
    });
  };

  return [internetProtocols, setInternetProtocols];
};
