import { CurrentTimeInCountry } from "./CurrentTimeInCountry";
import { FC } from "react";
import { CountryID } from "../utils/mockData";
import { CountryFlag } from "./CountryFlag";
import { FlexRow, Loader } from "src/ui-components";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 30px;
  aspect-ratio: 1;
`;

export const CountryFlagAndTime: FC<{
  countryID?: CountryID;
  isLoading: boolean;
}> = ({ countryID, isLoading }) => {
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }
  if (!countryID) return null;
  return (
    <FlexRow gap="8px">
      <CountryFlag countryID={countryID} />
      <CurrentTimeInCountry countryID={countryID} />
    </FlexRow>
  );
};
