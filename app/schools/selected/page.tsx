"use client";

import React from "react";

import { createClient } from "@/lib/supabase/client";
import DrawCard from "@/app/components/school-page/draw-card";
import DrawsContainer from "@/app/components/school-page/draws-container";
import Spinner from "@/app/components/spinner";

function Selected() {
    const [schoolData, setSchoolData] = React.useState<Draw[] | undefined>(undefined);

    const supabase = createClient();
    React.useEffect(() => {
        const fetchImages = async () => {
            const { data } = await supabase.from("draws").select("*").is("selected", true);
            if (data) {
                setSchoolData(data);
            }
        };
        fetchImages();
    }, [supabase]);

    return (
        <section className="flex flex-col items-center">
            {!schoolData ? (
                <div className="flex h-[90vh] w-full items-center justify-center">
                    <Spinner />
                </div>
            ) : (
                <>
                    <h1 className="text-6xl">Pre-Seleccionados</h1>
                    <DrawsContainer>
                        {schoolData.length < 1 ? (
                            <h1 className="w-full text-center text-5xl">
                                Este colegio no tiene dibujos cargados
                            </h1>
                        ) : (
                            schoolData.map(draw => (
                                <DrawCard
                                    school_name="Pre-Seleccionados"
                                    key={draw.id}
                                    draw={draw}
                                    setSchoolData={setSchoolData}
                                />
                            ))
                        )}
                    </DrawsContainer>
                </>
            )}
        </section>
    );
}

export default Selected;
