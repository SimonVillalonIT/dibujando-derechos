import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface SectionContainerInterface {
    classname?: string;
    id?: string;
}
function SectionContainer({
    classname,
    children,
    id,
}: PropsWithChildren<SectionContainerInterface>) {
    return (
        <section id={id} className={cn(classname, "flex h-full w-full flex-col items-center")}>
            {children}
        </section>
    );
}

export default SectionContainer;
