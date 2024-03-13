"use client";

import React from "react";
import maplibre from "maplibre-gl";
import { useEffect } from "react";

const GeoapifyMap = ({key}) => {
  let mapContainer;
  let map; // Store map instance

  useEffect(() => {
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";
    const initialState = {
      lat: 20.5937,
      lng: 78.9629,
      zoom: 4,
    };
const key=process.env.MAP_API_KEY;
    map = new maplibre.Map({
      container: mapContainer,
      style: `${mapStyle}?apiKey=${key}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

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
