import { Component, FC, useState } from "react";
import { InternetProtocol as InternetProtocolType } from "../custom-hooks/useInternetProtocolsList";
import { Loader, Input } from "../../../ui-components";
import styled from "styled-components";
import { useInternetProtocolsListData } from "../custom-hooks/useInternetProtocolsListData";
import { CountryFlagAndTime } from "./CountryFlagAndTime";
import { colorosPalette, setBorder, setBorderRadius } from "src/foundations";

interface InternetProtocolProps {
  internetProtocol: InternetProtocolType;
  index: number;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PLACEHOLDER = "search for an IP...";
const INTERNET_PROTOCOL_META_DATA = {
  DELIMITER: ".",
  CHUNKS: 4,
};

const Index = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  box-sizing: border-box;
  ${setBorderRadius("50%")};
  background-color: ${colorosPalette.background};
  width: 30px;
  aspect-ratio: 1;
  color: black;
`;

// TODO: Implement the isValidIp function properly
const isValidInternetProtocol = (ip: string) => {
  const { CHUNKS, DELIMITER } = INTERNET_PROTOCOL_META_DATA;
  return ip.split(DELIMITER).length === CHUNKS;
};

export const InternetProtocol: FC<InternetProtocolProps> = ({
  index,
  internetProtocol,
}) => {
  const [internetProtocols, setInternetProtocols] =
    useInternetProtocolsListData();
  const { countryID, loadingState, id } = internetProtocol;
  const isLoading = loadingState === "loading";
  const isError = loadingState === "error";
  const [internetProtocolAddress, setInternetProtocolAddress] = useState("");
  const onBlur = () => {
    const ip = internetProtocolAddress;
    const updatedInternetProtocol: InternetProtocolType = {
      ...internetProtocol,
      ip,
      loadingState: isValidInternetProtocol(ip) ? "initial" : "error",
    };
    setInternetProtocols({
      ...internetProtocols,
      [id]: updatedInternetProtocol,
    });
  };
  return (
    <Container>
      <Index>{index}</Index>
      <Input
        onBlur={onBlur}
        isDisabled={isLoading}
        placeholder={PLACEHOLDER}
        isError={isError}
        onChange={setInternetProtocolAddress}
      />
      <CountryFlagAndTime countryID={countryID} isLoading={isLoading} />
    </Container>
  );
};
