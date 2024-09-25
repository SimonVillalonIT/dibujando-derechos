import React from "react";
import Link from "next/link";

function HeaderLink({ name, link, onClick }: { name: string; link: string; onClick: () => void }) {
    return (
        <Link
            onClick={onClick}
            href={link}
            className="h-fit rounded-md bg-[#171717]/80 p-2 text-white"
        >
            {name}
        </Link>
    );
}

export default HeaderLink;
