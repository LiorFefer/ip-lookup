import { FC, useEffect, useState } from "react";
import { COUNTRY_TIME_ZONES, CountryID } from "../utils/mockData";
import { durationService } from "src/services/durationService";

const INTERVAL_TIME_IN_MS = 500;

export const CurrentTimeInCountry: FC<{ countryID: CountryID }> = ({
  countryID,
}) => {
  // dummy state to trigger re-render every <INTERVAL_TIME_IN_MS>
  const [_, setDummyState] = useState(false);
  useEffect(() => {
    const intervalRef = setInterval(() => {
      setDummyState((prev) => !prev);
    }, INTERVAL_TIME_IN_MS);
    return () => {
      clearInterval(intervalRef);
    };
  }, []);
  const timeZone = COUNTRY_TIME_ZONES[countryID];
  return <div>{durationService.getTimeInTimeZone(timeZone)}</div>;
};
