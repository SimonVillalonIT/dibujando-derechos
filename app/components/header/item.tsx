import React from "react";

interface ItemInterface {
    name: string;
}
function Item({ name }: ItemInterface) {
    return <li className="flex w-full justify-center">{name}</li>;
}

export default Item;
