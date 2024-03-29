"use client";

import React from "react";
import maplibre from "maplibre-gl";
import { useEffect } from "react";
import { MAP_KEY } from "../config/config";
import L from "leaflet";

const GeoapifyMap = ({ key }) => {
  let mapContainer;
  let map; // Store map instance

  useEffect(() => {
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";
    const lat = 20.5937;
    const lng = 78.9629;

    const initialState = {
      lat: lat,
      lng: lng,
      zoom: 4,
    };

    map = new maplibre.Map({
      container: mapContainer,
      style: `${mapStyle}?apiKey=${MAP_KEY}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    let marker;

    map.on("load", () => {
      // Now that the map is loaded, you can add the marker
      marker = new maplibre.Marker().setLngLat([lat, lng]).addTo(map);

      // Add a click event to the map
      map.on("click", (event) => {
        console.log(
          "Latitude:",
          event.lngLat.lat,
          "Longitude:",
          event.lngLat.lng
        );

        // Add a new marker at the clicked location
        marker = new maplibre.Marker()
          .setLngLat([event.lngLat.lat, event.lngLat.lng])
          .addTo(map);
      });
    });

    return () => {
      map.remove();
    };

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      className="map-container rounded-2xl"
      ref={(el) => (mapContainer = el)}
      style={{ height: "760px" }}
    ></div>
  );
};

export default GeoapifyMap;
