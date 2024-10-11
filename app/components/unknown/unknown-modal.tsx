import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import Close from "../close";

function UnknownModal({
    visible,
    img_url,
    handleClose,
}: {
    visible: boolean;
    img_url: string;
    draw_id: number;
    handleClose: (e: React.MouseEvent) => void;
}) {
    return (
        <div
            className={cn(
                "fixed left-0 top-0 z-20 hidden h-screen w-full items-center justify-center bg-primary/60 backdrop-blur-md duration-200",
                visible && "flex animate-fadeIn",
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
                        <h3 className="text-4xl">Desconocidos</h3>
                        <h5 className="mt-8 text-xl">Nombre del Autor: Desconocido</h5>
                    </div>
                </div>
                <Close onClick={handleClose} className="absolute right-4 top-4 size-6 text-black" />
            </div>
        </div>
    );
}

export default UnknownModal;
