import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemInterface {
    name: string;
    onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;

    href?: string;
}
function Item({ href, name, onClick }: ItemInterface) {
    const pathname = usePathname();

    if (pathname === href) return <></>;
    if (href) {
        return (
            <Link
                href={href}
                style={{ textShadow: "1px 1px 2px white" }}
                className="cursor-pointer hover:text-secondary"
            >
                {name}
            </Link>
        );
    }

    return (
        <li role="button" onClick={onClick} className="cursor-pointer hover:text-secondary">
            {name}
        </li>
    );
}

export default Item;
