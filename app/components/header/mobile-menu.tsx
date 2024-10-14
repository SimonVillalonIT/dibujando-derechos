import React from "react";

import { cn } from "@/lib/utils";

const MobileMenu = ({ active, onClick }: { active: boolean; onClick: () => void }) => {
    return (
        <div
            className={cn(
                "fixed left-0 top-0 flex h-screen w-screen bg-red-700 md:hidden",
                active ? "translate-x-[72rem]" : "-translate-x-[72rem]",
            )}
            onClick={onClick}
        >
            <button className="" onClick={onClick}>
                cerrar
            </button>
        </div>
    );
};

export default MobileMenu;
