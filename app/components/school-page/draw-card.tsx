import React from "react";
import Image from "next/image";

import DrawModal from "./modal";

function DrawCard({
    draw,
    setSchoolData,
    school_name,
}: {
    draw: Draw;
    setSchoolData?: React.Dispatch<React.SetStateAction<Draw[] | undefined>>;
    school_name: string;
}) {
    const [drawModal, setDrawModal] = React.useState<number | null>(null);

    const handleClose = (e: React.MouseEvent<HTMLOrSVGElement>) => {
        e.stopPropagation();
        setDrawModal(null);
    };
    return (
        <div
            onClick={() => setDrawModal(draw.id)}
            className="relative mb-4 cursor-pointer shadow-xl hover:border-secondary"
            key={draw.id}
        >
            {draw.selected ? (
                <h6 className="absolute right-0 top-0 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-secondary font-bold text-white">
                    {draw.votes}
                </h6>
            ) : null}
            <DrawModal
                autor_name={draw.name ?? "Desconocidos"}
                draw_id={draw.id}
                img_url={draw.img_url}
                handleClose={handleClose}
                visible={draw.id === drawModal}
                setSchoolData={setSchoolData}
                selected={draw.selected}
                school_name={school_name}
            />
            <Image width={300} height={300} src={draw.img_url} alt="Dibujo" />
        </div>
    );
}

export default DrawCard;
