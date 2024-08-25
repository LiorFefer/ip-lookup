import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const colorChange = keyframes`
  0% {
    border-color: rgba(0, 0, 0, 0.8);
  }
  50% {
    border-color: rgba(0, 0, 0, 0.3);
  }
  100% {
    border-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Loader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 4px dashed rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  animation: ${spin} 2.5s linear infinite,
    ${colorChange} 3s ease-in-out infinite;
`;
