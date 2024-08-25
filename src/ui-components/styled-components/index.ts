import { CSSSize } from "src/foundations/types/css";
import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 12px 24px;
`;

export const FlexRow = styled.div<{
  gap?: CSSSize;
  alignItems?: "center" | "top" | "bottom";
}>`
  display: flex;
  ${({ gap }) => `gap: ${gap};`}
  ${({ alignItems = "center" }) => `align-items: ${alignItems};`}
`;

export const FlexColumn = styled(FlexRow)`
  display: flex;
  flex-direction: column;
`;
