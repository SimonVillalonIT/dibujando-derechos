import React from "react";

import { cn } from "@/lib/utils";
import { SCHOOLS } from "@/constants";

import HeaderLink from "./link";

interface OptionsInterface {
    active: boolean;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}
function Options({ active, handleClick }: OptionsInterface) {
    return (
        <div
            className={cn(
                "absolute left-0 z-50 hidden w-full flex-wrap justify-around gap-8 bg-primary/60 py-4 backdrop-blur-sm transition-all duration-500 md:flex",
                active ? "-translate-y-[40rem]" : "translate-y-[9rem]",
            )}
        >
            {SCHOOLS.map(school => (
                <HeaderLink onClick={handleClick} key={school.id} school={school} />
            ))}
        </div>
    );
}

export default Options;
