import React from "react";

import { cn } from "@/lib/utils";

function Arrow({ className }: { className: string }) {
    return (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={cn("size-24", className)}
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>
    );
}

export default Arrow;
