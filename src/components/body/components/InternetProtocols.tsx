import { FC } from "react";
import {
  useInternetProtocolsList,
  InternetProtocol as InternetProtocolType,
} from "../custom-hooks/useInternetProtocolsList";
import styled from "styled-components";
import { InternetProtocol } from "./InternetProtocol";

const renderInternetProtocol = (
  internetProtocol: InternetProtocolType,
  index: number
) => {
  const { id } = internetProtocol;
  const displayCount = index + 1;
  return (
    <InternetProtocol
      key={id}
      index={displayCount}
      internetProtocol={internetProtocol}
    />
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  overflow-y: auto;
  gap: 12px;
`;

export const InternetProtocols: FC = () => {
  const [internetProtocols, _setInternetProtocols] = useInternetProtocolsList();
  const internetProtocolsArray = Object.values(internetProtocols);
  return (
    <Container>{internetProtocolsArray.map(renderInternetProtocol)}</Container>
  );
};
