import React from "react";
import Image from "next/image";
import Link from "next/link";

import { allura } from "@/lib/fonts";

import Arrow from "../arrow";
import SectionContainer from "../section-container";

function Hero() {
    return (
        <SectionContainer classname="flex">
            <div className="relative h-[620px]">
                <h1
                    style={{ textShadow: "1px 1px 2px white" }}
                    className={`${allura.className} absolute left-1/2 top-20 z-30 -translate-x-1/2 animate-fadeIn text-center text-5xl text-foreground opacity-100 duration-500`}
                >
                    Entrada al arte
                </h1>

                <Image
                    className="mask-fade-top h-full"
                    width={1400}
                    height={1000}
                    src="/hero.png"
                    alt=""
                />
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
