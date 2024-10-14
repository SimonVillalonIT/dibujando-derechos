import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { handleVote } from "../../actions/vote-action";
import Close from "../close";
import Spinner from "../spinner";

function DrawModal({
    visible,
    img_url,
    school_name,
    autor_name,
    draw_id,
    selected,
    handleClose,
    setSchoolData,
}: {
    visible: boolean;
    img_url: string;
    school_name: string;
    autor_name: string;
    draw_id: number;
    selected: boolean;
    handleClose: (e: React.MouseEvent) => void;
    setSchoolData?: React.Dispatch<React.SetStateAction<Draw[] | undefined>>;
}) {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleClick = async () => {
        if (!setSchoolData) return null;

        // Check if the user has already voted using localStorage
        const hasVoted = localStorage.getItem(`voted_${draw_id}`);
        if (hasVoted) {
            setError("You have already voted for this draw.");
            return;
        }

        setLoading(true);
        const data = await handleVote(draw_id);

        if ("error" in data) {
            // If the response contains an error
            setError(data.error);
        } else {
            // If the response is successful
            setSchoolData(prev =>
                (prev ?? []).map(item => {
                    if (item.id !== data.draw_id) return item;
                    return { ...item, votes: data.updated_votes };
                }),
            );

            // Store a flag in localStorage to prevent future votes
            localStorage.setItem(`voted_${draw_id}`, "true");
        }

        setLoading(false);
    };
    return (
        <div
            className={cn(
                "fixed left-0 top-0 z-20 hidden h-screen w-full cursor-default items-center justify-center bg-primary/60 backdrop-blur-md duration-200",
                visible && "flex animate-fadeIn",
            )}
        >
            <div className="relative grid h-4/5 grid-cols-3 bg-background shadow-lg">
                <div className="relative col-span-2">
                    <Image fill={true} src={img_url} alt="Dibujo" />
                </div>
                <div className="flex flex-col items-center justify-between px-4 py-16">
                    <div>
                        <h3 className="text-center text-4xl">{school_name}</h3>
                        <h5 className="mt-8 text-xl">Nombre del Autor: {autor_name}</h5>
                    </div>
                    {selected ? (
                        <>
                            {error && <p className="text-red-500">{error}</p>}
                            <button
                                onClick={handleClick}
                                className="flex h-16 w-32 items-center justify-center bg-secondary font-semibold duration-100 hover:scale-105"
                            >
                                {loading ? <Spinner className="size-8" /> : "Votar"}
                            </button>
                        </>
                    ) : null}
                </div>
                <Close onClick={handleClose} className="absolute right-4 top-4 size-6 text-black" />
            </div>
        </div>
    );
}

export default DrawModal;
