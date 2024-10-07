import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { icon } from "leaflet";

import { SCHOOLS } from "@/constants";

const SimpleMap = () => {
    const mapRef = useRef(null);
    const latitude = -32.17301;
    const longitude = -64.11405;

    return (
        // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer
            center={[latitude, longitude]}
            zoom={14}
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
                        iconSize: [24, 24], // size of the icon
                        shadowSize: [50, 64], // size of the shadow
                        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
                        shadowAnchor: [4, 62], // the same for the shadow
                        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
                    })}
                    key={school.id}
                    position={[school.latitude, school.longitude]}
                >
                    <Popup>{school.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default SimpleMap;
