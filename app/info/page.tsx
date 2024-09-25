import React from "react";

function InfoPage() {
    return (
        <section className="mt-8 h-full min-h-[calc(100vh-6rem)] w-full px-32">
            <h1 className="text-center text-4xl font-bold">¿Como surgio el proyecto?</h1>
            <div className="h-full">
                <h4 className="mt-8 text-2xl font-semibold">
                    Origen del Concurso &quot;Dibujando Derechos&quot;{" "}
                </h4>
                <p>
                    El concurso de dibujo &quot;Dibujando Derechos&quot; surgió como una iniciativa
                    de la Mesa de Niñez, Adolescencia y Familia del Centro Cívico. Su objetivo
                    principal es involucrar activamente a los niños y a las comunidades educativas,
                    que incluyen tanto a las escuelas como a las familias, en una actividad lúdica
                    que fomente la reflexión sobre los derechos de la infancia.
                </p>

                <h4 className="mt-8 text-2xl font-semibold">Participación y Alcance</h4>
                <p>
                    Para cumplir con este propósito, se invitó a niños del primer ciclo de todas las
                    escuelas de la ciudad a participar. En esta primera edición, se contó con la
                    participación de niños de hasta 8 años de edad, provenientes de 14
                    establecimientos educativos.{" "}
                </p>
                <h4 className="mt-8 text-2xl font-semibold">Objetivos del Concurso</h4>
                <p>
                    Este concurso busca, a través del arte del dibujo, generar espacios de diálogo,
                    reflexión y comprensión sobre los derechos de los niños y las niñas. La
                    finalidad es que este sea el primer paso hacia la prevención y promoción de
                    estos derechos. La premisa central es clara: para poder proteger y promover los
                    derechos de los más pequeños, es fundamental conocerlos y difundirlos.
                </p>
            </div>
        </section>
    );
}
export default InfoPage;
