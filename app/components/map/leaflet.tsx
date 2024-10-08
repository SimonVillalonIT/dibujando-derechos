"use client";

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import Link from "next/link";
import { icon } from "leaflet";

import { SCHOOLS } from "@/constants";

const SimpleMap = () => {
    const mapRef = React.useRef(null);
    const latitude = -32.17301;
    const longitude = -64.11405;

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={14}
            minZoom={14}
            ref={mapRef}
            style={{ height: "80vh", width: "100vw" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {SCHOOLS.map(school => (
                <Marker
                    icon={icon({
                        iconUrl: "/school.png",
                        iconSize: [24, 24],
                        shadowSize: [50, 64],
                        iconAnchor: [12, 24],
                        shadowAnchor: [4, 62],
                        popupAnchor: [-3, -76],
                    })}
                    key={school.id}
                    position={[school.latitude, school.longitude]}
                >
                    <Popup>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-xl">{school.name}</h1>
                            <Link href={`/schools/${school.id}`}>Ver los dibujos</Link>{" "}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default SimpleMap;
