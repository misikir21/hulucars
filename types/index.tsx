import { MouseEventHandler } from "react";
export interface CustombtnProps {
  title: string;
  Styles?: string;
  btntype?: "button" | "submit";
  handleclick?: MouseEventHandler<HTMLButtonElement>;
}
