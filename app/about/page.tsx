import React from "react";

function AboutPage() {
    return (
        <main>
            <section className="mt-8 h-full w-full">
                <div className="flex w-full flex-col items-center">
                    <h1 className="mb-4 text-center text-4xl font-bold">¿Quienes somos?</h1>
                    <p className="mt-8 max-w-prose text-center text-2xl">
                        El concurso es el resultado de una colaboración conjunta entre la Secretaría
                        de Niñez de la Provincia (UDER Río Tercero) y la Mesa de Niñez, Adolescencia
                        y Familia del Centro Cívico de Río Tercero.
                    </p>
                </div>
                <div className="h-full">
                    <div className="flex items-center px-2 mb-24">
                        <span className="h-1 w-1/5 bg-black"></span>
                        <h2 className="ml-3 text-3xl font-semibold">Organizadores y Equipo</h2>
                    </div>
                    <div className="px-32">
                        <p>
                            Este comité está integrado por un equipo multidisciplinario, entre los
                            cuales se destacan:
                        </p>
                        <li>Yamil Mengo Becil – Director del Centro Cívico de Río Tercero</li>
                        <li>Gustavo Pretini – Abogado </li>
                        <li>María Belén Carezzano – Abogada</li>
                        <li>Edgar Rinaudo – Psicólogo</li>
                        <p>
                            Además, el equipo cuenta con la colaboración de otros profesionales
                            comprometidos con la promoción y protección de los derechos de los niños
                            y niñas.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mt-8 h-full w-full px-32">
                <div className="flex items-center">
                    <span className="h-2 w-full bg-black"></span>
                    <h2 className="text-3xl font-semibold">Jurado</h2>
                </div>
                <p>
                    El panel de jueces está integrado por personalidades reconocidas en el ámbito
                    legal, artístico y educativo:
                </p>
                <li>
                    <h3>Rubén Ramonda</h3>
                    <p>
                        Reconocido artista visual y plástico de trayectoria local e internacional.
                        Formado en la Escuela Provincial de Bellas Artes de Córdoba y en la New York
                        Academy of Arts. Ha sido curador en el Consulado Argentino en Nueva York y
                        actualmente es director del Centro Cultural Casino y miembro de la Fundación
                        Tania Abrile.
                    </p>
                </li>
            </section>
        </main>
    );
}

export default AboutPage;
