"use client";
import { Custombtn } from ".";
import Image from "next/image";
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
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleclick={handlescroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__images">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
