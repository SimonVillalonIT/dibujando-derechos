import React from "react";
import Image from "next/image";
import Link from "next/link";

function Unknown() {
    return (
        <section className="flex items-center justify-center pb-12">
            <div className="h-[22rem] w-4/5 bg-primary shadow-2xl md:flex md:w-[60%]">
                <div className="flex h-full flex-col justify-between p-8 md:w-[40%]">
                    <div>
                        <h1 className="mb-4 text-5xl text-white">Autores Desconocidos</h1>
                        <p className="text-xl font-light text-white/70">
                            No encontraste tu dibujo?
                        </p>
                    </div>
                    <Link
                        href="/schools/unknown"
                        className="bg-white/20 p-3 text-xl text-white backdrop-blur-xl"
                    >
                        Encontra tu dibujo
                    </Link>
                </div>
                <div className="hidden md:relative md:block md:w-3/5">
                    <Image
                        className="w-full md:absolute md:-right-8 md:top-4"
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
