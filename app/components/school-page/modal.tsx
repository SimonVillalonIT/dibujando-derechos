import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { handleVote } from "../../actions/vote-action";
import Close from "../close";
import Spinner from "../spinner";

function DrawModal({
    visible,
    img_url,
    name,
    draw_id,
    handleClose,
    setSchoolData,
}: {
    visible: boolean;
    img_url: string;
    name: string;
    draw_id: number;
    handleClose: (e: React.MouseEvent) => void;
    setSchoolData: React.Dispatch<React.SetStateAction<SchoolDataType>>;
}) {
    const [loading, setLoading] = React.useState(false);

    const handleClick = async () => {
        setLoading(true);
        const data = await handleVote(draw_id);
        if (data) {
            setSchoolData(prev => {
                if (!prev) return prev; // Handle case where prev is undefined

                const updatedDraws = prev.draws.map(draw => {
                    // Check if the draw matches the updated one
                    if (draw.id === data.draw_id) {
                        return { ...draw, votes: data.updated_votes }; // Update the votes
                    }
                    return draw; // Return the original draw if no changes are needed
                });

                // Return the new state object with updated draws
                return { ...prev, draws: updatedDraws } as SchoolDataType;
            });
        }
        setLoading(false);
    };

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
                        <h3 className="text-4xl">{name}</h3>
                        <h5 className="mt-8 text-xl">Nombre de Alumno: Simon Villalon</h5>
                    </div>
                    <button
                        onClick={handleClick}
                        className="flex h-16 w-32 items-center justify-center bg-secondary font-semibold duration-100 hover:scale-105"
                    >
                        {loading ? <Spinner className="size-8" /> : "Votar"}
                    </button>
                </div>
                <Close onClick={handleClose} className="absolute right-4 top-4 size-6 text-black" />
            </div>
        </div>
    );
}

export default DrawModal;
