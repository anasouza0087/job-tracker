import styled from "styled-components";
import type { IStyledContainer, IStyledInput } from "../types";

export const StyledInput = styled.input<IStyledInput>`
  border: ${({ error, theme }) =>
    error ? `solid 1px ${theme.colors.danger}` : "1px solid #ccc"};
  width: 200px;
  padding: 12px;
`;

export const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  flex-direction: ${({ position }) => (!position ? "column" : "row")};
  padding: 12px;
  margin: 2px 2px 2px 2px;
`;
