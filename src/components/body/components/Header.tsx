import { FC } from "react";
import { Paragraph, Button, FlexRow } from "src/ui-components";
import styled from "styled-components";
import { setBorder } from "src/foundations";
import { useInternetProtocolsList } from "../custom-hooks/useInternetProtocolsList";
import { generateUUID } from "src/services/utils/generateUUID";
import { RenderIf } from "src/components/RenderIf";

const Container = styled.div`
  padding-bottom: 24px;
  ${setBorder({ border: "border-bottom" })}
`;

export const Header: FC = () => {
  const [internetProtocols, setInternetProtocols] = useInternetProtocolsList();
  const onAddInternetProtocol = () => {
    const id = generateUUID();
    setInternetProtocols({ ...internetProtocols, [id]: { id } });
  };
  const onResetInternetProtocol = () => {
    setInternetProtocols({});
  };
  const internetProtocolsCount = Object.values(internetProtocols).length;
  return (
    <Container>
      <Paragraph>Enter one or more IP adresses and get their country</Paragraph>
      <FlexRow gap="8px">
        <Button onClick={onAddInternetProtocol}>+ Add</Button>
        <RenderIf condition={internetProtocolsCount > 0}>
          <Button onClick={onResetInternetProtocol} type="warning">
            Reset
          </Button>
        </RenderIf>
      </FlexRow>
    </Container>
  );
};
