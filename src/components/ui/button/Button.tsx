import { StyledButton } from "./styles";
import type { IButton } from "./types";

export const Button = ({ variant, label, onClick }: IButton) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
