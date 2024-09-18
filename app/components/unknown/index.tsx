import React from "react";

import { allura } from "@/lib/fonts";

function Unknown() {
    return (
        <section className="flex items-center justify-center pb-12">
            <div className="flex w-3/4 shadow-2xl">
                <div className="w-[35%] bg-black">
                    <h1 className={`${allura.className} mb-4 text-5xl`}>Autores Desconocidos</h1>
                </div>
                <div className="w-[65%]">
                    <img className="w-full" src="/Edificio.png" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Unknown;
