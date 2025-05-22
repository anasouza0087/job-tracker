import { StyledText } from "./styles";
import type { IText } from "./types";

export const Text = ({ color, size, as, children }: IText) => {
  return (
    <StyledText as={as} $size={size} $color={color}>
      {children}
    </StyledText>
  );
};
