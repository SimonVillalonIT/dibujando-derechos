import React from "react";
import Image from "next/image";

const Title = ({ title }: { title: string }) => (
    <div className="mb-4 flex items-center px-2">
        <span className="h-1 w-1/5 bg-black"></span>
        <h2 className="ml-3 text-3xl font-semibold">{title}</h2>
    </div>
);

const JudgeRight = ({
    name,
    children,
    img,
}: React.PropsWithChildren<{ name: string; img: string }>) => (
    <div className="mt-12 flex flex-col justify-between px-8 md:px-20 lg:flex-row">
        <div className="mb-4 flex flex-col justify-center">
            <li className="text-xl font-semibold">{name}</li>
            <p className="text-lg lg:max-w-[60ch]">{children}</p>
        </div>
        <div className="flex items-center justify-center">
            <span className="mr-8 hidden h-full w-1 bg-black/60 lg:block"></span>{" "}
            {/* Set a fixed height */}
            <Image
                className="min-h-[300px] min-w-[300px]"
                width={300}
                height={300}
                src={img}
                alt={`Juez ${name}`}
            />
        </div>
    </div>
);

const JudgeLeft = ({
    name,
    children,
    img,
}: React.PropsWithChildren<{ name: string; img: string }>) => (
    <div className="mt-12 flex flex-col-reverse justify-between px-8 md:px-20 lg:flex-row">
        <div className="mb-4 flex min-h-[300px] items-center justify-center">
            {" "}
            {/* Ensure a minimum height for layout stability */}
            <Image
                width={300}
                height={300}
                src={img}
                alt={`Juez ${name}`}
                className="min-h-[300px] min-w-[300px] object-cover" // Ensures the image maintains its aspect ratio
            />
            <span className="ml-8 h-full w-1 bg-black/60"></span> {/* Line takes full height */}
        </div>
        <div className="mt-4 flex flex-col justify-center md:mt-0 lg:ml-8">
            <li className="text-xl font-semibold">{name}</li>
            <p className="w-full text-lg lg:max-w-[60ch]">{children}</p>
        </div>
    </div>
);
function AboutPage() {
    return (
        <main>
            <section className="mt-8 h-full w-full">
                <div className="flex w-full flex-col items-center">
                    <h1 className="mb-4 text-center text-4xl font-bold">¿Quienes somos?</h1>
                    <p className="mt-8 max-w-prose px-8 text-center text-2xl lg:px-0">
                        El concurso es el fruto de una colaboración conjunta entre la{" "}
                        <strong>
                            Secretaría de Niñez de la Provincia (UDER Río Tercero) y la Mesa de
                            Niñez, Adolescencia y Familia del Centro Cívico de Río Tercero.
                        </strong>{" "}
                        Juntos, trabajamos para promover los derechos y el bienestar de niños, niñas
                        y adolescentes en la región.
                    </p>
                </div>
                <div className="mt-8 h-full">
                    <Title title="Organizadores y Equipo" />
                    <div className="px-8 lg:px-32">
                        <p>
                            Este comité está integrado por un equipo multidisciplinario, entre los
                            cuales se destacan:
                        </p>
                        <li>
                            <strong>Yamil Mengo Becil </strong> – Director del Centro Cívico de Río
                            Tercero
                        </li>
                        <li>
                            <strong>Gustavo Pretini – </strong> Abogado{" "}
                        </li>
                        <li>
                            <strong>María Belén Carezzano </strong> – Abogada
                        </li>
                        <li>
                            <strong>Edgar Rinaudo – </strong> Psicólogo
                        </li>
                        <li>
                            <strong>Simón Villalón – </strong> Desarrollador Web{" "}
                        </li>
                        <li>
                            <strong>Esteban Romero – </strong> Diseñador Web
                        </li>
                        <p>
                            Además, el equipo cuenta con la colaboración de otros profesionales
                            comprometidos con la promoción y protección de los derechos de los niños
                            y niñas.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mt-8 h-full w-full">
                <Title title="Jurado" />
                <div className="px-8 lg:px-40">
                    <p className="text-xl">
                        El panel de jueces está integrado por personalidades reconocidas en el
                        ámbito legal, artístico y educativo:
                    </p>
                    <JudgeRight img="/jueces/Ramonda.png" name="Rubén Ramonda">
                        Reconocido artista visual y plástico de trayectoria local e internacional.
                        Formado en la Escuela Provincial de Bellas Artes de Córdoba y en la New York
                        Academy of Arts. Ha sido curador en el Consulado Argentino en Nueva York y
                        actualmente es director del Centro Cultural Casino y miembro de la Fundación
                        Tania Abrile.
                    </JudgeRight>
                    <JudgeLeft img="/jueces/Galliano.jpeg" name="Silvia Beatriz Galliano">
                        Docente de nivel primario con más de 30 años de experiencia, actualmente
                        Coordinadora de Educación del Centro Cívico.
                    </JudgeLeft>
                    <JudgeRight img="/jueces/Francisetti.jpeg" name="Dra. Soledad Francisetti">
                        Responsable de la Defensoría de Niñas, Niños y Adolescentes de la Provincia
                        de Córdoba y concejal de Río Tercero.
                    </JudgeRight>
                    <JudgeLeft img="/jueces/Rinaudo.jpeg" name="Edgar Rinaudo">
                        Licenciado en Psicología, delegado de UDER Río Tercero y representante de
                        SENAF del Ministerio de Desarrollo Humano.
                    </JudgeLeft>
                    <JudgeRight img="/jueces/Guzman.png" name="Silvia Guzmán">
                        Artista local autodidacta, especializada en paisajilgo y realismo al óleo
                        sobre madera.
                    </JudgeRight>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;
