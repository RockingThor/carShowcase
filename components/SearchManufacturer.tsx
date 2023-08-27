"use client";
import { searchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const SearchManufacturer = ({
    manufacturer,
    setManufacturer,
}: searchManufacturerProps) => {
    return (
        <div className="search-manufacturer">
            <Combobox>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            alt="car logo"
                            width={20}
                            height={20}
                            className="ml-4"
                        />
                    </Combobox.Button>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;
