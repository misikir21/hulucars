"use client";
import Image from "next/image";
import { CustombtnProps } from "@/types";
const Custombtn = ({
  title,
  containerStyles,
  btntype,
  handleclick,
}: CustombtnProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btntype || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleclick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};
export default Custombtn;
