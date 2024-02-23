import React from "react";
import { CarProps } from "@/types";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
interface CarDetailsprops {
  isopen: boolean;
  closemodal: () => void;
  car: CarProps;
}
function CarDetails({ isopen, closemodal, car }: CarDetailsprops) {
  return <div>CarDetails</div>;
}

export default CarDetails;
