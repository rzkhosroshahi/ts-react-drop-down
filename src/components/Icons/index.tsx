import React from "react";
import { Check } from "./Check";
import { ChevronDown } from "./ChevronDown";

export enum IconsList {
    check = 'check' ,
    chevronDown = 'chevronDown',
}

const IconsMap: Record<IconsList, React.ReactNode> = {
    check: Check(),
    chevronDown: ChevronDown(),
};

interface IIconsProps {
    name: keyof typeof IconsList,
    className?: string,
}

export const Icons: React.FC<IIconsProps> = ({ name, className }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={className}
        >
            { IconsMap[name] }
        </svg>
    );
};

export default Icons;
