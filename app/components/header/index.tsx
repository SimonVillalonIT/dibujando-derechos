import React from "react";
import Image from "next/image";

import Item from "./item";

function Header() {
    return (
        <header className="grid h-24 w-full grid-cols-7">
            <div className="col-span-2 flex items-center justify-between pl-12">
                <Image src="/Logo.png" alt="Logo Gobierno de Cordoba" width={200} height={100} />
            </div>
            <div className="col-span-3 flex list-none items-center">
                <Item name="Escuelas" />
                <Item name="Mas Informacion" />
                <Item name="Quienes somos" />
            </div>
            <div className="col-span-2 flex items-center justify-end pr-12">
                <button className="rounded-3xl border border-black px-4 py-1 text-xl text-black">
                    Instagram
                </button>
            </div>
        </header>
    );
}

export default Header;
