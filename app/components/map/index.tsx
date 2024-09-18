import React from "react";
import Image from "next/image";

import { allura } from "@/lib/fonts";

import SectionContainer from "../section-container";

function SchoolsMap() {
    return (
        <SectionContainer classname="bg-[#464655] py-10">
            <h1 className={`${allura.className} mb-4 text-5xl`}>Colegios que participan</h1>
            <Image src="/mapa.png" alt="Mapa de Colegios Rio Tercero" width={800} height={600} />
        </SectionContainer>
    );
}

export default SchoolsMap;
