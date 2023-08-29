import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: String;
    containerStyles: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: String;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface searchManufacturerProps {
    manufacturer: String;
    setManufacturer: (manufacturer: String) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
