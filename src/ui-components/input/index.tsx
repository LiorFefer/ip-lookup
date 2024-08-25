import { FC } from "react";
import styled from "styled-components";
import { noop } from "../../services/utils/noop";
import { colorosPalette, setBorder } from "../../foundations";

const { disabled, error } = colorosPalette;

export const StyledInput = styled.input<{
  isDisabled: boolean;
  isError: boolean;
}>`
  box-sizing: border-box;
  font-size: 24px;
  padding: 4px 8px;
  ${setBorder()}
  ${({ isDisabled }) =>
    isDisabled &&
    `
    background-color: ${disabled};
    color: #a0a0a0;
    cursor: not-allowed;
  `}
  ${({ isError }) =>
    isError &&
    `
    border-color: ${error};
    border-width: 2px;
  `}
`;

interface InputProps {
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  isDisabled?: boolean;
  placeholder?: string;
  isError?: boolean;
}

export const Input: FC<InputProps> = ({
  onChange = noop,
  onBlur = noop,
  isDisabled = false,
  placeholder = "",
  isError = false,
}) => {

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };
  const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onBlur(value);
  };

  const withIsDisabled = <T,>(callback: T) => (isDisabled ? noop : callback);
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={withIsDisabled(onInputChange)}
      onBlur={withIsDisabled(onInputBlur)}
      isDisabled={isDisabled}
      isError={isError}
    />
  );
};
