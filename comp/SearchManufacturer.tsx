"use client";
import React from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Image from "next/image";
function SearchManufacturer({
  manufacturer,
  setmanufacturer,
}: setmanufacturerprops) {
  const [query, setquery] = useState("");
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="car logo"
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setquery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            afterLeave={() => setquery("")}
          >
            <Combobox.Options></Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
