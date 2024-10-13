import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { allura } from "@/lib/fonts";
import { createClient } from "@/lib/supabase/server";

import SectionContainer from "../section-container";
import ClientPictures from "./client-pictures";

export async function Pictures() {
    const supabase = createClient();
    const { data, error } = await supabase.from("draws").select("*").eq("selected", true);

    if (error) return redirect("/error");

        return (
            <SectionContainer classname="h-screen pb-24 pt-12 bg-background">
                <h1 className={`${allura.className} mb-5 text-5xl text-foreground`}>
                    Expositor de obras
                </h1>
                <ClientPictures draws={data} />

                <Link className="bg-secondary p-4 text-white font-semibold text-center" href="/schools/selected">
                    Ir a Pre-seleccionados
                </Link>
            </SectionContainer>
        );
    }