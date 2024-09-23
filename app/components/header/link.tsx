import React from "react";
import Link from "next/link";

function HeaderLink({ name, link }: { name: string; link: string }) {
    return (
        <Link href={link} className="h-fit rounded-md bg-[#171717]/70 p-2 text-white">
            {name}
        </Link>
    );
}

export default HeaderLink;
