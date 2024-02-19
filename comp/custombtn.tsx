"use client";
import Image from "next/image";
const Custombtn = () => {
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
