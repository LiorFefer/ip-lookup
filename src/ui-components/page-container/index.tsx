import styled, { keyframes } from "styled-components";

export const cardAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
`;

export const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  & > * {
    opacity: 0;
    animation: ${cardAnimation} 0.7s ease-in-out forwards;
  }
`;
