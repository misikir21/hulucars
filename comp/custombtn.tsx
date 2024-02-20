"use client";
import Image from "next/image";
import { CustombtnProps } from "@/types";
const Custombtn = ({ title, Styles, btntype, handleclick }: CustombtnProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btntype || "button"}
        className={`custom-btn ${Styles}`}
        onClick={handleclick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};
export default Custombtn;
