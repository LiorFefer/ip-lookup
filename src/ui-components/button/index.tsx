import styled from "styled-components";
import { colorosPalette } from "../../foundations";

const ButtonTheme = {
  primary: colorosPalette.primary,
  warning: colorosPalette.error,
};

export const Button = styled.button<{ type?: keyof typeof ButtonTheme }>`
  ${({ type = "primary" }) => `
    font-size: 1.5rem;
  color: white;
  background-color: ${ButtonTheme[type]};
  opacity: 0.7;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.6s, color 0.6s;
  &:hover {
    background-color: white;
    color: ${ButtonTheme[type]};
  }
  &:active {
    background-color: ${ButtonTheme[type]};
    color: white;
  }
  border-radius: 6px;
  
  `}
`;
