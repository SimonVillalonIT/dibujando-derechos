import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface SectionContainerInterface {
    classname?: string;
}
function SectionContainer({ classname, children }: PropsWithChildren<SectionContainerInterface>) {
    return (
        <section className={cn(classname, "flex h-full w-full flex-col items-center")}>
            {children}
        </section>
    );
}

export default SectionContainer;
