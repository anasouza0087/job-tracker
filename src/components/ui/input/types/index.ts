import type { ChangeEvent } from "react";

type inputPositionType = "top" | "right" | "bottom" | "left";

export interface IInput {
  label: string;
  error?: boolean;
  size?: string;
  position?: inputPositionType;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledInput {
  error?: boolean;
  size?: string;
}

export interface IStyledContainer {
  position?: inputPositionType;
}
