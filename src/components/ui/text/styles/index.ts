import styled from "styled-components";
import type { IStyledText } from "../types";

export const StyledText = styled.span<IStyledText>`
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => $size};
`;
