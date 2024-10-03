"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { useSchool } from "@/hooks/useSchool";
import DrawModal from "@/app/components/school-page/modal";
import Spinner from "@/app/components/spinner";

function SchooldId() {
    const { id } = useParams<{ id: string }>();
    const [drawModal, setDrawModal] = React.useState<number | null>(null);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDrawModal(null);
    };

    const { schoolData, setSchoolData } = useSchool(id);

    return (
        <section className="flex h-full min-h-[80vh] flex-col items-center">
            {!schoolData ? (
                <div className="flex h-[90vh] w-full items-center justify-center">
                    <Spinner />
                </div>
            ) : (
                <>
                    <h1 className="text-6xl">{schoolData.school_name}</h1>
                    <div className="grid-gallery w-full">
                        {schoolData.draws && schoolData.draws[0].id === null ? (
                            <h1 className="w-full text-center text-5xl">
                                Este colegio no tiene dibujos cargados
                            </h1>
                        ) : (
                            (schoolData.draws as Draw[]).map(draw => (
                                <div
                                    onClick={() => setDrawModal(draw.id)}
                                    className="grid-gallery__item group relative cursor-pointer border-2 border-transparent hover:border-secondary"
                                    key={id}
                                >
                                    <h6 className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold text-white">
                                        {draw.votes}
                                    </h6>
                                    <DrawModal
                                        visible={draw.id === drawModal}
                                        handleClose={handleClose}
                                        draw_id={draw.id}
                                        img_url={draw.img_url}
                                        name={schoolData.school_name}
                                        setSchoolData={setSchoolData}
                                    />
                                    <Image
                                        width={500}
                                        height={500}
                                        className="grid-gallery__image"
                                        src={draw.img_url}
                                        alt="Dibujo"
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </>
            )}
        </section>
    );
}

export default SchooldId;
