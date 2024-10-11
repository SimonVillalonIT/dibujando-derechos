import React from "react";
import Link from "next/link";

function HeaderLink({ school, onClick }: { school: School; onClick: () => void }) {
    return (
        <Link
            onClick={onClick}
            href={`/schools/${school.id}`}
            className="h-fit rounded-md bg-[#171717]/80 p-2 text-white"
        >
            {school.name}
        </Link>
    );
}

export default HeaderLink;
