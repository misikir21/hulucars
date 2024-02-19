import { MouseEventHandler } from "react";
export interface CustombtnProps {
  title: string;
  containerStyles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
