import React from "react";
import Image from "next/image";

function Unknown() {
    return (
        <section className="flex items-center justify-center pb-12">
            <div className="flex h-[22rem] w-[60%] bg-primary shadow-2xl">
                <div className="flex h-full w-[40%] flex-col justify-between p-8">
                    <div>
                        <h1 className="mb-4 text-5xl text-white">Autores Desconocidos</h1>
                        <p className="text-xl font-light text-white/70">
                            No encontraste tu dibujo?
                        </p>
                    </div>
                    <button className="bg-white/20 p-3 text-xl text-white backdrop-blur-xl">
                        Encontra tu dibujo
                    </button>
                </div>
                <div className="relative w-3/5">
                    <Image
                        className="absolute -right-8 top-4 w-full"
                        src="/Desconocidos.png"
                        alt=""
                        width={400}
                        height={200}
                    />
                </div>
            </div>
        </section>
    );
}

export default Unknown;
