import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { SCHOOLS } from "@/constants";

import Close from "../close";
import Item from "./item";

const MobileMenu = ({
    active,
    onClick,
}: {
    active: boolean;
    onClick: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
}) => {
    return (
        <div
            className={cn(
                "fixed left-0 top-0 z-50 h-screen w-screen overflow-hidden bg-primary/50 py-4 backdrop-blur-lg transition-all duration-500 md:hidden",
                active ? "translate-x-[48rem]" : "-translate-x-0",
            )}
            onClick={onClick}
        >
            <div className="flex h-12 w-full justify-between px-6 py-2">
                <Close onClick={onClick} className="size-8" />
                <a
                    target="_blank"
                    href="https://www.instagram.com/centrocivicorio3/"
                    className={cn(
                        "flex cursor-pointer items-center rounded-3xl border border-black px-2 py-1 duration-100 hover:border-secondary hover:bg-secondary hover:text-white",
                    )}
                >
                    Instagram
                </a>
            </div>
            <div className="flex h-full w-full">
                <div className="flex h-full w-2/5 flex-col gap-6 border-r-2 border-white/10 px-6">
                    <Item href="/" name="Inicio" />
                    <Item href="/info" name="Mas Informacion" />
                    <Item href="/about" name="Sobre nosotros" />
                    <Item href="/schools/unknown" name="Desconocidos" />
                    <Item href="/schools/selected" name="Pre-seleccionados" />
                </div>
                <div className="flex flex-1 flex-col gap-1 px-6">
                    {SCHOOLS.map(school => {
                        return (
                            <Link
                                className="block text-lg font-light"
                                href={`/schools/${school.id}`}
                                key={school.id}
                            >
                                {school.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
