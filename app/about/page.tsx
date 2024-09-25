import React from "react";

function AboutPage() {
    return (
        <section className="mt-8 h-full min-h-[calc(100vh-6rem)] w-full px-32">
            <div className="flex w-full flex-col items-center">
                <h1 className="text-center text-4xl font-bold">¿Quienes somos?</h1>
                <p className="mt-8 max-w-prose text-center text-2xl">
                    El concurso es el resultado de una colaboración conjunta entre la Secretaría de
                    Niñez de la Provincia (UDER Río Tercero) y la Mesa de Niñez, Adolescencia y
                    Familia del Centro Cívico de Río Tercero.
                </p>
            </div>
            <div className="h-full">
                <h4 className="mt-8 text-2xl font-semibold">
                    Origen del Concurso &quot;Dibujando Derechos&quot;{" "}
                </h4>
                <p>
                    Este comité está integrado por un equipo multidisciplinario, entre los cuales se
                    destacan:
                </p>
                <li>Yamil Mengo Becil – Director del Centro Cívico de Río Tercero</li>
                <li>Gustavo Pretini – Abogado </li>
                <li>María Belén Carezzano – Abogada</li>
                <li>Edgar Rinaudo – Psicólogo</li>
                <p>
                    Además, el equipo cuenta con la colaboración de otros profesionales
                    comprometidos con la promoción y protección de los derechos de los niños y
                    niñas.
                </p>
            </div>
        </section>
    );
}

export default AboutPage;
