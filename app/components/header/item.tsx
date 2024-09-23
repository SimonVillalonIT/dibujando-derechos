import React from "react";

interface ItemInterface {
    name: string;
    onClick?: () => void;
}
function Item({ name, onClick }: ItemInterface) {
    return (
        <li
            onClick={onClick}
            className="hover:text-secondary flex w-full cursor-pointer justify-center"
        >
            {name}
        </li>
    );
}

export default Item;
