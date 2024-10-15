"use client";

import React from "react";
import dynamic from "next/dynamic";

import { allura } from "@/lib/fonts";

import SectionContainer from "../section-container";
import Spinner from "../spinner";

function SchoolsMap() {
    const Map = dynamic(
        () => import("./leaflet"), // replace '@components/map' with your component's location
        {
            loading: () => <Spinner />,
            ssr: false, // This line is important. It's what prevents server-side render
        },
    );
    return (
        <SectionContainer id="map" classname="bg-background py-10 relative hidden md:flex">
            <div className="flex h-full w-full flex-col items-center">
                <h1 className={`${allura.className} mb-12 text-5xl text-foreground`}>
                    Colegios que participan
                </h1>
                <div className="flex h-full min-h-96 w-full flex-1 items-center justify-center">
                    <Map />
                </div>
            </div>
        </SectionContainer>
    );
}

export default SchoolsMap;
