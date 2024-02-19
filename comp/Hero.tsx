"use client";
import React from "react";
import { Custombtn } from ".";

function Hero() {
  const handlescroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find ,Book or Rent a car --quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <Custombtn
          title="explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleclik={handlescroll}
        />
      </div>
    </div>
  );
}

export default Hero;
