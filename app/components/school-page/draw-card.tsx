import React from "react";
import Image from "next/image";

import DrawModal from "./modal";

function DrawCard({
    draw,
    setSchoolData,
    school_name
}: {
    draw: Draw;
    setSchoolData?: React.Dispatch<React.SetStateAction<Draw[] | undefined>>;
    school_name:string
}) {
    const [drawModal, setDrawModal] = React.useState<number | null>(null);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDrawModal(null);
    };
    console.log(draw)
    return (
        <div
            onClick={() => setDrawModal(draw.id)}
            className="relative cursor-pointer hover:border-secondary mb-4 shadow-xl"
            key={draw.id}
        >
            {draw.selected ? <h6 className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold text-white">
                {draw.votes}
            </h6> : null}
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
            <Image
                width={300}
                height={300}
                src={draw.img_url}
                alt="Dibujo"
            />
        </div>
    );
}

export default DrawCard;
