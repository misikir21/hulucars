import { CarProps } from "@/types";
import React from "react";

const CarCard = ({ car, make, model, carRent }: CarProps) => {
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
      </p>
    </div>
  );
};

export default CarCard;
