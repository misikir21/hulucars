import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface setmanufacturerprops {
  manufacturer: string;
  setmanufacturer: (manufacturer: string) => void;
}
