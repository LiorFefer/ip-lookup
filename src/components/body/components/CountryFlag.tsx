import { FC } from "react";
import { COUNTRIES_FLAGS, CountryID } from "../utils/mockData";
import styled from "styled-components";

const Img = styled.img`
  width: 30px;
  aspect-ratio: 1;
  object-fit: contain;
`;

export const CountryFlag: FC<{ countryID: CountryID }> = ({ countryID }) => {
  const flagURL = COUNTRIES_FLAGS[countryID];
  return <Img src={flagURL} alt="country flag" />;
};
