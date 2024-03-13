"use client";

import React, { useEffect } from "react";
import maplibre from "maplibre-gl";

function GeoapifyMap() {
  let mapContainer;
  let map; // Store map instance

  useEffect(() => {
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";
    console.log("key", process.env.NEXT_PUBLIC_API_KEY);
    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4,
    };

    map = new maplibre.Map({
      container: mapContainer,
      style: `${mapStyle}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
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
