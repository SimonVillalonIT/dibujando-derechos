import React from "react";

import Item from "./item";

function Header() {
    return (
        <header className="grid h-24 w-full grid-cols-7 bg-gradient-to-b from-gray-300 to-neutral-50">
            <div className="col-span-2 flex items-center justify-between bg-red-300 pl-12">
                <h1 className="text-5xl font-medium">LOGO</h1>
            </div>
            <div className="col-span-3 flex list-none items-center bg-blue-300">
                <Item name="Escuelas" />
                <Item name="Mas Informacion" />
                <Item name="Quienes somos" />
            </div>
            <div className="col-span-2 bg-red-300"></div>
        </header>
    );
}

export default Header;
