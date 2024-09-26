"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { cn } from "@/lib/utils";
import Close from "@/app/components/close";
import SectionContainer from "@/app/components/section-container";

function SchooldId() {
    const { id } = useParams<{ id: string }>();
    const [drawModal, setDrawModal] = React.useState<number | null>(null);
    const imageUrls = [
        "https://picsum.photos/seed/1/300/200",
        "https://picsum.photos/seed/2/300/200",
        "https://picsum.photos/seed/3/300/200",
        "https://picsum.photos/seed/4/300/200",
        "https://picsum.photos/seed/5/300/200",
        "https://picsum.photos/seed/6/300/200",
        "https://picsum.photos/seed/7/300/200",
        "https://picsum.photos/seed/8/300/200",
        "https://picsum.photos/seed/9/300/200",
        "https://picsum.photos/seed/10/300/200",
        "https://picsum.photos/seed/11/300/200",
        "https://picsum.photos/seed/12/300/200",
        "https://picsum.photos/seed/13/300/200",
        "https://picsum.photos/seed/14/300/200",
        "https://picsum.photos/seed/15/300/200",
        "https://picsum.photos/seed/16/300/200",
        "https://picsum.photos/seed/17/300/200",
        "https://picsum.photos/seed/18/300/200",
        "https://picsum.photos/seed/19/300/200",
        "https://picsum.photos/seed/20/300/200",
        "https://picsum.photos/seed/21/300/200",
        "https://picsum.photos/seed/22/300/200",
        "https://picsum.photos/seed/23/300/200",
        "https://picsum.photos/seed/24/300/200",
        "https://picsum.photos/seed/25/300/200",
        "https://picsum.photos/seed/26/300/200",
        "https://picsum.photos/seed/27/300/200",
        "https://picsum.photos/seed/28/300/200",
        "https://picsum.photos/seed/29/300/200",
        "https://picsum.photos/seed/30/300/200",
        "https://picsum.photos/seed/31/300/200",
        "https://picsum.photos/seed/32/300/200",
        "https://picsum.photos/seed/33/300/200",
        "https://picsum.photos/seed/34/300/200",
        "https://picsum.photos/seed/35/300/200",
        "https://picsum.photos/seed/36/300/200",
        "https://picsum.photos/seed/37/300/200",
        "https://picsum.photos/seed/38/300/200",
        "https://picsum.photos/seed/39/300/200",
        "https://picsum.photos/seed/40/300/200",
        "https://picsum.photos/seed/41/300/200",
        "https://picsum.photos/seed/42/300/200",
        "https://picsum.photos/seed/43/300/200",
        "https://picsum.photos/seed/44/300/200",
        "https://picsum.photos/seed/45/300/200",
        "https://picsum.photos/seed/46/300/200",
        "https://picsum.photos/seed/47/300/200",
        "https://picsum.photos/seed/48/300/200",
        "https://picsum.photos/seed/49/300/200",
        "https://picsum.photos/seed/50/300/200",
    ];
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDrawModal(null);
    };

    return (
        <SectionContainer>
            <h1 className="text-6xl">{id}</h1>
            <div className="grid-gallery">
                {imageUrls.map((img, i) => (
                    <div
                        onClick={() => setDrawModal(i)}
                        className="grid-gallery__item group relative cursor-pointer border-2 border-transparent hover:border-secondary"
                        key={i}
                    >
                        <h6 className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold text-white">
                            44
                        </h6>
                        {
                            <div
                                className={cn(
                                    "fixed left-0 top-0 z-20 hidden h-screen w-full items-center justify-center bg-primary/60 backdrop-blur-md duration-200",
                                    drawModal === i && "animate-fadeIn flex",
                                )}
                            >
                                <div className="relative grid h-4/5 w-2/3 grid-cols-3 bg-background shadow-lg">
                                    <Image
                                        width={500}
                                        height={500}
                                        className="grid-gallery__image col-span-2"
                                        src={img}
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
                            src={img}
                            alt="Dibujo"
                        />
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}

export default SchooldId;
