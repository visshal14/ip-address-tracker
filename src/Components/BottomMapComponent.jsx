import React from 'react'


import {
    MapContainer, TileLayer, Marker
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
// import marker from '../assests/icon-location.svg';
const myIcon = new L.Icon({
    iconUrl: "/images/icon-location.svg",
    iconRetinaUrl: "/images/icon-location.svg",
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});


const BottomMapComponent = ({ lat, lng }) => {
    return (
        <MapContainer center={[lat, lng]} height={200} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]} icon={myIcon}>
            </Marker>
        </MapContainer>
    )
}

export default BottomMapComponent