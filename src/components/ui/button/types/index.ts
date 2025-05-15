export interface IButton {
  variant: buttonVariantType;
  label: string;
  size?: buttonSizeType;
  onClick: () => void;
}

export type buttonVariantType =
  | "primary"
  | "secondary"
  | "danger"
  | "background"
  | "text"
  | "muted";

export type buttonSizeType = "small" | "medium" | "large";
