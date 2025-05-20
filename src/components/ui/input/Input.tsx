import { StyledContainer, StyledInput } from "./styles";
import type { IInput } from "./types";

export const Input = ({ label, error, size, onChange }: IInput) => {
  return (
    <StyledContainer>
      <label>{label}</label>
      <StyledInput error={error} size={size} onChange={onChange} />
    </StyledContainer>
  );
};
