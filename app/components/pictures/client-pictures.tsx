"use client";

import React from "react";

import DrawCard from "../school-page/draw-card";

function ClientPictures({ draws }: { draws: Draw[] }) {
    const [currentDraws, setCurrentDraws] = React.useState<Draw[] | undefined>([]);
    const [isFading, setIsFading] = React.useState(false);

    React.useEffect(() => {
        const updateDraws = () => {
            setIsFading(true); // Inicia la animación de desvanecimiento

            // Espera que la animación termine antes de actualizar los draws
            setTimeout(() => {
                const randomDraws = [...draws].sort(() => Math.random() - 0.5).slice(0, 3);

                setCurrentDraws(randomDraws);
                setIsFading(false); // Inicia la animación de aparición
            }, 500); // La duración de la animación de desvanecimiento (0.5 segundos)
        };

        updateDraws(); // Actualiza al inicio

        const interval = setInterval(updateDraws, 15000); // Cada 15 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, [draws]);

    return (
        <div
            className={`grid min-h-96 grid-cols-3 gap-16 transition-opacity duration-500 ${
                isFading ? "opacity-0" : "opacity-100"
            }`}
        >
            {currentDraws?.map(draw => (
                <DrawCard
                    school_name="Pre-Seleccionados"
                    draw={draw}
                    key={draw.id}
                    setSchoolData={setCurrentDraws}
                />
            ))}
        </div>
    );
}

export default ClientPictures;
