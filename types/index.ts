import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: String;
    containerStyles: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface searchManufacturerProps {
    manufacturer: String;
    setManufacturer: (manufacturer: String) => void;
}
