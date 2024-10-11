import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

import { allura } from "@/lib/fonts";
import { createClient } from "@/lib/supabase/server";

import SectionContainer from "../section-container";

export async function Pictures() {
    const supabase = createClient();
    const { data, error } = await supabase.from("draws").select("*").eq("selected", true);

    if (error) return redirect("/error");

    if (data.length < 1) {
        return (
            <SectionContainer classname="h-screen pb-24 pt-12 bg-background">
                <h1 className={`${allura.className} mb-5 text-5xl text-foreground`}>
                    Expositor de obras
                </h1>
            </SectionContainer>
        );
    }
    return (
        <SectionContainer classname="h-screen pb-24 pt-12 bg-background">
            <h1 className={`${allura.className} mb-5 text-5xl text-foreground`}>
                Expositor de obras
            </h1>
            <div className="grid grid-cols-3 gap-16">
                <Image
                    className="h-[450px]"
                    width={350}
                    height={700}
                    src="/Expositor.png"
                    alt="Images"
                />
                <Image
                    className="h-[450px]"
                    width={350}
                    height={700}
                    src="/Expositor.png"
                    alt="Images"
                />
                <Image
                    className="h-[450px]"
                    width={350}
                    height={700}
                    src="/Expositor.png"
                    alt="Images"
                />
            </div>
        </SectionContainer>
    );
}
