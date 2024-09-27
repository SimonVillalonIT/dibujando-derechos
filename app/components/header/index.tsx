"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import Item from "./item";
import Options from "./options";

interface HeaderInterface {
    schools:School[] 
}

function Header({schools}:HeaderInterface) {
    const [active, setActive] = React.useState(true);
        const handleClick = () => {
        setActive(prev => !prev);
    };

    return (
        <header
            className={cn(
                "grid min-h-24 w-full grid-cols-7 transition-all delay-200 duration-500",
                active ? "" : "bg-primary/60",
            )}
        >
            <div className="col-span-2 flex items-center justify-between pl-12">
                <Link href={"/"}>
                    <Image
                        src="/Logo.png"
                        alt="Logo Gobierno de Cordoba"
                        width={200}
                        height={100}
                    />
                </Link>
            </div>
            <nav className="col-span-3 flex list-none items-center">
                <Item onClick={handleClick} name="Escuelas" />
                <Item href="/info" name="Mas Informacion" />
                <Item href="/about" name="Sobre nosotros" />
            </nav>
            <div className="col-span-2 flex items-center justify-end pr-12">
                <button
                    className={cn(
                        "cursor-pointer rounded-3xl border border-black px-4 py-1 text-xl duration-100 hover:border-secondary hover:bg-secondary hover:text-white",
                    )}
                >
                    Instagram
                </button>
            </div>
            <Options schools={schools} handleClick={handleClick} active={active} />
        </header>
    );
}

export default Header;
