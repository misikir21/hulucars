import { MouseEventHandler } from "react";
export interface CustombtnProps {
  title: string;
  btntype?: "button" | "submit";
  containerStyles?: string;
  handleclick?: MouseEventHandler<HTMLButtonElement>;
}
containerStyles;
