import React from "react";

import { cn } from "@/lib/utils";
import { SCHOOLS } from "@/constants";

import HeaderLink from "./link";

interface OptionsInterface {
    active: boolean;
    handleClick: () => void;
}
function Options({ active, handleClick }: OptionsInterface) {
    return (
        <div
            className={cn(
                "absolute -top-80 z-10 flex w-full flex-wrap gap-8 bg-primary/60 px-16 py-4 backdrop-blur-sm transition-all duration-500",
                active ? "" : "translate-y-[26rem]",
            )}
        >
            {SCHOOLS.map(school => (
                <HeaderLink onClick={handleClick} key={school.id} school={school} />
            ))}
        </div>
    );
}

export default Options;
