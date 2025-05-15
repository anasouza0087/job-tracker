import styled from "styled-components";
import type { buttonVariantType } from "../types";

interface buttonProps {
  variant: buttonVariantType;
}

export const StyledButton = styled.button<buttonProps>`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ variant, theme }) => theme.colors[variant]};
  padding: 8px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  width: 10rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  &:hover {
    opacity: ${({ theme }) => theme.buttons.hover.opacity};
  }
`;
