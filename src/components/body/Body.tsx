import { FC } from "react";
import { Header } from "./components/Header";
import { InternetProtocols } from "./components/InternetProtocols";
import { ContentContainer } from "../../ui-components";
import styled from "styled-components";

const Container = styled(ContentContainer)`
  min-height: 1px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const Body: FC = () => {
  return (
    <Container>
      <Header />
      <InternetProtocols />
    </Container>
  );
};
