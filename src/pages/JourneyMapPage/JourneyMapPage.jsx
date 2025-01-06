import React, { useEffect, useState } from "react";
import "../JourneyMapPage/JourneyMapPage.scss";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "Leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import axios from "axios";
import Logo from "../../assets/logo/logo.png";

const customIcon = new Icon({
  iconUrl: Logo,
  iconSize: [38, 38],
});

export default function JourneyMapPage() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    async function fetchCoordinates() {
      try {
        const response = await axios.get(`${apiUrl}/journey-map`);
        const data = response.data;
        const allCoordinates = data.map((city) => ({
          id: city.city,
          position: [city.coordinates.latitude, city.coordinates.longitude],
        }));

        if (allCoordinates.length > 0) {
          setCoordinates(allCoordinates);
        } else {
          console.error("No coordinates found.");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    }
    fetchCoordinates();
  }, [apiUrl]);

  return (
    <div className="journey-map">
      <div className="journey-map__header">
        <h1>Your Map</h1>
        <p>Find your journey pins below!</p>
      </div>
      <div className="journey-map__map-container">
        <MapContainer className="journey-map__map" center={[2, 46]} zoom={2}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {coordinates.map((coordinate) => (
            <Marker
              position={coordinate.position}
              key={coordinate.id}
              icon={customIcon}
            ></Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
