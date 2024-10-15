import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="flex w-full flex-col items-center justify-between px-12 py-8 md:flex-row">
            <Image width={200} height={200} alt="Logo Cordoba" src="/Logo.png" />
            <div className="text-center">
                <h6>© Copyright {new Date().getFullYear()}</h6>
                <p>Centro Cívico Río Tercero - San Martin 255 - Rio Tercero</p>
            </div>
            <a
                href="mailto:centrocivico2024@gmail.com"
                className="border border-black p-2 duration-200 hover:bg-black hover:text-white"
            >
                Contactate con Nosotros
            </a>
        </footer>
    );
}

export default Footer;
