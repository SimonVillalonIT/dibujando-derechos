import React from "react";
import Image from "next/image";

import { allura } from "@/lib/fonts";

import SectionContainer from "../section-container";

function Hero() {
    return (
        <SectionContainer>
            <h1 className={`${allura.className} text-5xl`}>Entrada al arte</h1>
            <Image className="h-[620px]" width={1400} height={1000} src="/Edificio.png" alt="" />
        </SectionContainer>
    );
}

export default Hero;
