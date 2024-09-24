"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import Item from "./item";
import HeaderLink from "./link";

function Header() {
    const [active, setActive] = React.useState(true);

    const schools = [
        { name: "Escuela Primaria Saavedra", link: "/schools/1" },
        { name: "Instituto San Juan Bautista", link: "/schools/2" },
        { name: "Colegio Luna Nueva", link: "/schools/3" },
        { name: "Escuela Secundaria Estrella del Norte", link: "/schools/4" },
        { name: "Centro Educativo Norteamérica", link: "/schools/5" },
        { name: "Escuela Técnica del Sur", link: "/schools/6" },
        { name: "Instituto Educacional Este-Oeste", link: "/schools/7" },
        { name: "Escuela de Artes Ríos de Luz", link: "/schools/8" },
        { name: "Colegio Montaña Verde", link: "/schools/9" },
        { name: "Escuela del Valle Encantado", link: "/schools/10" },
        { name: "Jardín Infantil Creciendo Juntos", link: "/schools/11" },
        { name: "Horizonte Académico Internacional", link: "/schools/12" },
    ];
    return (
        <header
            className={cn(
                "absolute top-0 z-20 grid min-h-24 w-full grid-cols-7 transition-all delay-200 duration-500",
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
                <Item
                    onClick={() => {
                        console.log("click");
                        setActive(prev => !prev);
                    }}
                    name="Escuelas"
                />
                <Item name="Mas Informacion" />
                <Item name="Quienes somos" />
            </nav>
            <div className="col-span-2 flex items-center justify-end pr-12">
                <button
                    className={cn(
                        "cursor-pointer rounded-3xl border border-black px-4 py-1 text-xl duration-100 hover:scale-110 hover:border-secondary hover:font-bold hover:text-secondary",
                    )}
                >
                    Instagram
                </button>
            </div>
            <div
                className={cn(
                    "absolute -top-80 z-10 flex w-full flex-wrap gap-8 bg-primary/60 px-16 py-4 backdrop-blur-sm transition-all duration-500",
                    active ? "" : "translate-y-[26rem]",
                )}
            >
                {schools.map((school, i) => (
                    <HeaderLink key={i} {...school} />
                ))}
            </div>
        </header>
    );
}

export default Header;
