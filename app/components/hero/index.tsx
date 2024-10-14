import React from "react";
import Image from "next/image";
import Link from "next/link";

import { allura } from "@/lib/fonts";

import Arrow from "../arrow";
import SectionContainer from "../section-container";

function Hero() {
    return (
        <SectionContainer classname="flex">
            <h1 className={`${allura.className} text-5xl text-foreground`}>Entrada al arte</h1>
            <div className="relative h-[620px]">
                <Image className="h-full" width={1400} height={1000} src="/Edificio.png" alt="" />
                <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 transform">
                    <Link href="#map">
                        <Arrow className="z-20 size-12 animate-bounce text-white" />
                    </Link>
                </div>
            </div>
        </SectionContainer>
    );
}

export default Hero;
