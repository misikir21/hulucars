"use client";
import Image from "next/image";
import { CustombtnProps } from "@/types";
const Custombtn = ({ title, containerStyles, handleclick }: CustombtnProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={"button"}
        className={`custom-btn`}
        onClick={() => {}}
      >
        <span className={`flex-1`}>titte</span>
      </button>
    </div>
  );
};
export default Custombtn;
