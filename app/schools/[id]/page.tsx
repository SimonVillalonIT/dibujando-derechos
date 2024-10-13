"use client";

import React from "react";
import { useParams } from "next/navigation";

import { useSchool } from "@/hooks/useSchool";
import Spinner from "@/app/components/spinner";
import DrawsContainer from "@/app/components/school-page/draws-container";
import DrawCard from "@/app/components/school-page/draw-card";

function SchooldId() {
    const { id } = useParams<{ id: string }>();
    const { schoolData } = useSchool(id);

    return (
        <section className="flex h-full min-h-[80vh] flex-col items-center">
            {!schoolData ? (
                <div className="flex h-[90vh] w-full items-center justify-center">
                    <Spinner />
                </div>
            ) : (
                <>
                    <h1 className="text-6xl">{schoolData.school_name}</h1>
                   <DrawsContainer>
                        {schoolData.draws && schoolData.draws[0].id === null ? (
                            <h1 className="w-full text-center text-5xl">
                                Este colegio no tiene dibujos cargados
                            </h1>
                        ) : (
                            (schoolData.draws as Draw[]).map(draw => (
                                <DrawCard school_name={schoolData.school_name} key={draw.id} draw={draw} />
                            ))
                        )}
            </DrawsContainer>
                    
                </>
            )}
        </section>
    );
}

export default SchooldId;
