"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { cn } from "@/lib/utils";
import Close from "@/app/components/close";
import SectionContainer from "@/app/components/section-container";
import { useSchool } from "@/hooks/useSchool";

function SchooldId() {
    const { id } = useParams<{ id: string }>();
    const [drawModal, setDrawModal] = React.useState<number | null>(null);
 
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDrawModal(null);
    };

     const {schoolData} = useSchool(id)

     console.log(schoolData)
    
    if (!schoolData) return "loading...";
    return (
        <SectionContainer>
            <h1 className="text-6xl">{schoolData.school_name}</h1>
            <div className="grid-gallery">
                {(schoolData.draws as {img_url:string,id:number}[] ).map(({id,img_url}) => (
                    <div
                        onClick={() => setDrawModal(id)}
                        className="grid-gallery__item group relative cursor-pointer border-2 border-transparent hover:border-secondary"
                        key={id}
                    >
                        <h6 className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold text-white">
                            44
                        </h6>
                        {
                            <div
                                className={cn(
                                    "fixed left-0 top-0 z-20 hidden h-screen w-full items-center justify-center bg-primary/60 backdrop-blur-md duration-200",
                                    drawModal === id && "flex animate-fadeIn",
                                )}
                            >
                                <div className="relative grid h-4/5 w-2/3 grid-cols-3 bg-background shadow-lg">
                                    <Image
                                        width={500}
                                        height={500}
                                        className="grid-gallery__image col-span-2"
                                        src={img_url}
                                        alt="Dibujo"
                                    />
                                    <div className="flex flex-col items-center justify-between px-4 py-16">
                                        <div>
                                            <h3 className="text-4xl">{id}</h3>
                                            <h5 className="mt-8 text-xl">
                                                Nombre de Alumno: Simon Villalon
                                            </h5>
                                        </div>
                                        <button className="bg-secondary px-8 py-4 font-semibold duration-100 hover:scale-105">
                                            Votar
                                        </button>
                                    </div>
                                    <Close
                                        onClick={handleClose}
                                        className="absolute right-4 top-4 size-6 text-black"
                                    />
                                </div>
                            </div>
                        }
                        <Image
                            width={500}
                            height={500}
                            className="grid-gallery__image"
                            src={img_url}
                            alt="Dibujo"
                        />
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}

export default SchooldId;
