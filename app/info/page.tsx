import React from "react";

import Book from "../components/book";
import Bulleye from "../components/bulleye";
import Globle from "../components/globe";
import Trophy from "../components/trophy";

const Title = ({ children, Icon }: React.PropsWithChildren<{ Icon: React.ElementType }>) => (
    <div className="mb-4 flex flex-col">
        <div className="ml-48 mt-8 flex items-center">
            <Icon />
            <h4 className="ml-4 text-3xl font-semibold">{children}</h4>
        </div>
        <span className="h-1 w-1/5 bg-gradient-to-r from-black/30 to-background"></span>
    </div>
);

const Paragraph = ({ children }: React.PropsWithChildren) => (
    <p className="px-40 text-lg">{children}</p>
);
function InfoPage() {
    return (
        <section className="mt-8 h-full min-h-[calc(100vh-6rem)] w-full">
            <h1 className="text-center text-4xl font-bold">¿Como surgio el proyecto?</h1>
            <div className="h-full">
                <Title Icon={Book}> Origen del Concurso &quot;Dibujando Derechos&quot;</Title>
                <Paragraph>
                    El concurso de dibujo &quot;Dibujando Derechos&quot; nace como una iniciativa de
                    la Mesa de Niñez, Adolescencia y Familia del Centro Cívico de Río Tercero. Su
                    objetivo es involucrar a los niños y a las comunidades educativas –escuelas y
                    familias– en una actividad lúdica que promueva la reflexión sobre los derechos
                    de la infancia.
                </Paragraph>
                <Title Icon={Globle}> Participación y Alcance</Title>
                <Paragraph>
                    En esta primera edición, se invitó a niños del primer ciclo de todas las
                    escuelas de la ciudad. Niños de hasta 8 años de edad, provenientes de 14
                    establecimientos educativos, participaron activamente en este concurso,
                    compartiendo su visión artística sobre los derechos de los niños.
                </Paragraph>
                <Title Icon={Bulleye}> Objetivos del Concurso</Title>
                <Paragraph>
                    El concurso busca, a través del arte del dibujo, crear espacios de diálogo,
                    reflexión y comprensión sobre los derechos de la infancia. Es un primer paso
                    hacia la prevención y promoción de estos derechos, partiendo de la premisa de
                    que conocer y difundir los derechos es esencial para su protección y promoción.
                </Paragraph>
                <Title Icon={Trophy}> Premios</Title>
                <Paragraph>
                    Los participantes tendrán la oportunidad de ganar premios increíbles, entre los
                    que se incluyen:
                </Paragraph>
                <div className="mt-4 flex justify-center gap-12 px-40 text-xl">
                    <ul className="list-disc">
                        <li>Una bicicleta</li>
                        <li>Árboles para las escuelas</li>
                        <li>Mochilas del Ente BioCórdoba</li>
                        <li>Juguetes del Ente BioCórdoba</li>
                        <li>Meriendas en Alabama</li>
                        <li>Cajas de merienda de Cocoa </li>
                    </ul>
                    <ul className="list-disc">
                        <li>Meriendas en Tarantino</li>
                        <li>Regalos de Mimo</li>
                        <li>Regalos de Secretos Indumentaria</li>
                        <li>Juguetes de Giro Didáctico</li>
                        <li>¡Y muchos premios más!</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default InfoPage;
