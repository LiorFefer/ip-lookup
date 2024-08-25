import styled from "styled-components";
import { ContentContainer, Header as StyledHeader } from "../ui-components";
import { setBorder } from "../foundations";

const Container = styled(ContentContainer)`
  display: flex;
  ${setBorder({ border: "border-bottom" })}
`;

export const Header = () => {
  return (
    <Container>
      <StyledHeader>IP Lookup</StyledHeader>
    </Container>
  );
};
