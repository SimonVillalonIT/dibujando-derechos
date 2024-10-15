"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import Menu from "../menu";
import Item from "./item";
import MobileMenu from "./mobile-menu";
import Options from "./options";

function Header() {
    const [active, setActive] = React.useState(true);
    const handleClick = (event: React.MouseEvent<HTMLOrSVGElement>) => {
        event.stopPropagation();
        setActive(prev => !prev);
    };

    return (
        <header
            className={cn(
                "flex min-h-24 w-full justify-between overflow-hidden transition-all delay-200 duration-500",
                active ? "" : "md:bg-primary/60",
            )}
        >
            <div className="flex items-center justify-between pl-12">
                <Link href={"/"}>
                    <Image
                        src="/Logo.png"
                        alt="Logo Gobierno de Cordoba"
                        width={200}
                        height={100}
                    />
                </Link>
            </div>
            <nav className="hidden list-none items-center gap-24 md:flex">
                <Item href="/" name="Inicio" />
                <Item onClick={handleClick} name="Escuelas" />
                <Item href="/info" name="Mas Informacion" />
                <Item href="/about" name="Sobre nosotros" />
            </nav>
            <div className="flex items-center justify-end pr-12">
                <a
                    target="_blank"
                    href="https://www.instagram.com/centrocivicorio3/"
                    className={cn(
                        "hidden cursor-pointer rounded-3xl border border-black px-4 py-1 text-xl duration-100 hover:border-secondary hover:bg-secondary hover:text-white md:block",
                    )}
                >
                    Instagram
                </a>
                <Menu onClick={handleClick} />
                <Options handleClick={handleClick} active={active} />

                <MobileMenu onClick={handleClick} active={active} />
            </div>
        </header>
    );
}

export default Header;
