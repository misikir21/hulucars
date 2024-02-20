"use client";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
const Custombtn = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};
export default Custombtn;
