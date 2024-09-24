import React from "react";
import Image from "next/image";

import { allura } from "@/lib/fonts";

import { ParticlesBackground } from "../particles";
import SectionContainer from "../section-container";

function SchoolsMap() {
    return (
        <SectionContainer classname="bg-background py-10 relative">
            <ParticlesBackground />
            <div className="absolute top-0 flex h-full w-full flex-col items-center">
                <h1 className={`${allura.className} mb-12 text-5xl text-foreground`}>
                    Colegios que participan
                </h1>
                <Image
                    className="shadow-sm"
                    src="/mapa.png"
                    alt="Mapa de Colegios Rio Tercero"
                    width={800}
                    height={600}
                />
            </div>
        </SectionContainer>
    );
}

export default SchoolsMap;
