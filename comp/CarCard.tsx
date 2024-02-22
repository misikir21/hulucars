"use client";
import { CarProps } from "@/types";
import React from "react";
import { CustomButton } from ".";
import { fetchcars } from "@/utils";
interface carcardprops {
  car: CarProps;
}
const CarCard = ({ car }: CarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>

        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
    </div>
  );
};

export default CarCard;
