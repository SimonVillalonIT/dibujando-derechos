import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="flex w-full items-center justify-between px-12 py-8">
            <Image width={200} height={200} alt="Logo Cordoba" src="/Logo.png" />
            <div className="text-center">
                <h6>© Copyright {new Date().getFullYear()}</h6>
                <p className="font-light">
                    Centro Cívico Río Tercero - San Martin 255 - Rio Tercero
                </p>
            </div>
            <button className="border border-black p-2 duration-200 hover:bg-black hover:text-white">
                Contactate con Nosotros
            </button>
        </footer>
    );
}

export default Footer;
