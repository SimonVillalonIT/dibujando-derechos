"use client";

import React from "react";
import Image from "next/image";

import { createClient } from "@/lib/supabase/client";
import Spinner from "@/app/components/spinner";
import UnknownModal from "@/app/components/unknown/unknown-modal";

function Unknown() {
    const [schoolData, setSchoolData] = React.useState<Draw[]>();

    const supabase = createClient();
    React.useEffect(() => {
        const fetchImages = async () => {
            const { data } = await supabase.from("draws").select("*").eq("school_id", 0);
            if (data) {
                setSchoolData(data);
            }
        };
        fetchImages();
    }, [supabase]);

    const [drawModal, setDrawModal] = React.useState<number | null>(null);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDrawModal(null);
    };

    return (
        <section className="flex h-full min-h-[80vh] flex-col items-center">
            {!schoolData ? (
                <div className="flex h-[90vh] w-full items-center justify-center">
                    <Spinner />
                </div>
            ) : (
                <>
                    <h1 className="text-6xl">Autores Desconocidos</h1>
                    <div className="grid-gallery w-full">
                        {schoolData && schoolData[0].id === null ? (
                            <h1 className="w-full text-center text-5xl">
                                Este colegio no tiene dibujos cargados
                            </h1>
                        ) : (
                            schoolData.map(draw => (
                                <div
                                    onClick={() => setDrawModal(draw.id)}
                                    className="grid-gallery__item group relative cursor-pointer border-2 border-transparent hover:border-secondary"
                                    key={draw.id}
                                >
                                    <h6 className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold text-white">
                                        {draw.votes}
                                    </h6>
                                    <UnknownModal
                                        draw_id={draw.id}
                                        handleClose={handleClose}
                                        img_url={draw.img_url}
                                        visible={draw.id === drawModal}
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

export default Unknown;
