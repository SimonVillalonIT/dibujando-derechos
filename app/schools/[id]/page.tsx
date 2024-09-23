"use client";

import React from "react";
import { useParams } from "next/navigation";

import SectionContainer from "@/app/components/section-container";

function SchooldId() {
    const { id } = useParams<{ id: string }>();
    const imageUrls = [
        "https://picsum.photos/seed/1/300/200",
        "https://picsum.photos/seed/2/300/200",
        "https://picsum.photos/seed/3/300/200",
        "https://picsum.photos/seed/4/300/200",
        "https://picsum.photos/seed/5/300/200",
        "https://picsum.photos/seed/6/300/200",
        "https://picsum.photos/seed/7/300/200",
        "https://picsum.photos/seed/8/300/200",
        "https://picsum.photos/seed/9/300/200",
        "https://picsum.photos/seed/10/300/200",
        "https://picsum.photos/seed/11/300/200",
        "https://picsum.photos/seed/12/300/200",
        "https://picsum.photos/seed/13/300/200",
        "https://picsum.photos/seed/14/300/200",
        "https://picsum.photos/seed/15/300/200",
        "https://picsum.photos/seed/16/300/200",
        "https://picsum.photos/seed/17/300/200",
        "https://picsum.photos/seed/18/300/200",
        "https://picsum.photos/seed/19/300/200",
        "https://picsum.photos/seed/20/300/200",
        "https://picsum.photos/seed/21/300/200",
        "https://picsum.photos/seed/22/300/200",
        "https://picsum.photos/seed/23/300/200",
        "https://picsum.photos/seed/24/300/200",
        "https://picsum.photos/seed/25/300/200",
        "https://picsum.photos/seed/26/300/200",
        "https://picsum.photos/seed/27/300/200",
        "https://picsum.photos/seed/28/300/200",
        "https://picsum.photos/seed/29/300/200",
        "https://picsum.photos/seed/30/300/200",
        "https://picsum.photos/seed/31/300/200",
        "https://picsum.photos/seed/32/300/200",
        "https://picsum.photos/seed/33/300/200",
        "https://picsum.photos/seed/34/300/200",
        "https://picsum.photos/seed/35/300/200",
        "https://picsum.photos/seed/36/300/200",
        "https://picsum.photos/seed/37/300/200",
        "https://picsum.photos/seed/38/300/200",
        "https://picsum.photos/seed/39/300/200",
        "https://picsum.photos/seed/40/300/200",
        "https://picsum.photos/seed/41/300/200",
        "https://picsum.photos/seed/42/300/200",
        "https://picsum.photos/seed/43/300/200",
        "https://picsum.photos/seed/44/300/200",
        "https://picsum.photos/seed/45/300/200",
        "https://picsum.photos/seed/46/300/200",
        "https://picsum.photos/seed/47/300/200",
        "https://picsum.photos/seed/48/300/200",
        "https://picsum.photos/seed/49/300/200",
        "https://picsum.photos/seed/50/300/200",
        "https://picsum.photos/seed/51/300/200",
        "https://picsum.photos/seed/52/300/200",
        "https://picsum.photos/seed/53/300/200",
        "https://picsum.photos/seed/54/300/200",
        "https://picsum.photos/seed/55/300/200",
        "https://picsum.photos/seed/56/300/200",
        "https://picsum.photos/seed/57/300/200",
        "https://picsum.photos/seed/58/300/200",
        "https://picsum.photos/seed/59/300/200",
        "https://picsum.photos/seed/60/300/200",
        "https://picsum.photos/seed/61/300/200",
        "https://picsum.photos/seed/62/300/200",
        "https://picsum.photos/seed/63/300/200",
        "https://picsum.photos/seed/64/300/200",
        "https://picsum.photos/seed/65/300/200",
        "https://picsum.photos/seed/66/300/200",
        "https://picsum.photos/seed/67/300/200",
        "https://picsum.photos/seed/68/300/200",
        "https://picsum.photos/seed/69/300/200",
        "https://picsum.photos/seed/70/300/200",
        "https://picsum.photos/seed/71/300/200",
        "https://picsum.photos/seed/72/300/200",
        "https://picsum.photos/seed/73/300/200",
        "https://picsum.photos/seed/74/300/200",
        "https://picsum.photos/seed/75/300/200",
        "https://picsum.photos/seed/76/300/200",
        "https://picsum.photos/seed/77/300/200",
        "https://picsum.photos/seed/78/300/200",
        "https://picsum.photos/seed/79/300/200",
        "https://picsum.photos/seed/80/300/200",
        "https://picsum.photos/seed/81/300/200",
        "https://picsum.photos/seed/82/300/200",
        "https://picsum.photos/seed/83/300/200",
        "https://picsum.photos/seed/84/300/200",
        "https://picsum.photos/seed/85/300/200",
        "https://picsum.photos/seed/86/300/200",
        "https://picsum.photos/seed/87/300/200",
        "https://picsum.photos/seed/88/300/200",
        "https://picsum.photos/seed/89/300/200",
        "https://picsum.photos/seed/90/300/200",
        "https://picsum.photos/seed/91/300/200",
        "https://picsum.photos/seed/92/300/200",
        "https://picsum.photos/seed/93/300/200",
        "https://picsum.photos/seed/94/300/200",
        "https://picsum.photos/seed/95/300/200",
        "https://picsum.photos/seed/96/300/200",
        "https://picsum.photos/seed/97/300/200",
        "https://picsum.photos/seed/98/300/200",
        "https://picsum.photos/seed/99/300/200",
        "https://picsum.photos/seed/100/300/200",
    ];

    return (
        <SectionContainer classname="from-light bg-gradient-to-b from-0% to-background to-10% bg-no-repeat pt-24">
            <h1 className="text-6xl">{id}</h1>
            <div className="grid-gallery">
                {imageUrls.map((img, i) => (
                    <a className="grid-gallery__item" key={i} href="#">
                        <img className="grid-gallery__image" key={i} src={img} />
                    </a>
                ))}
            </div>
        </SectionContainer>
    );
}

export default SchooldId;
