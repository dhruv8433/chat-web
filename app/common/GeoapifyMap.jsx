"use client";

import React, { useEffect } from "react";
import maplibre from "maplibre-gl";

function GeoapifyMap() {
  let mapContainer;
  let map; // Store map instance

  useEffect(() => {
    const myAPIKey = "7a63216f12d64daf8c810b73b0866e99";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4,
    };

    map = new maplibre.Map({
      container: mapContainer,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
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
}

export default GeoapifyMap;
