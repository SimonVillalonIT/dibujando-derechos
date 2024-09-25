import React from "react";
import Link from "next/link";

interface ItemInterface {
    name: string;
    onClick?: () => void;
    href?: string;
}
function Item({ href, name, onClick }: ItemInterface) {
    if (href) {
        return (
            <Link
                href={href}
                onClick={onClick}
                className="flex w-full cursor-pointer justify-center hover:text-secondary"
            >
                {name}
            </Link>
        );
    }

    return (
        <li
            onClick={onClick}
            className="flex w-full cursor-pointer justify-center hover:text-secondary"
        >
            {name}
        </li>
    );
}

export default Item;
