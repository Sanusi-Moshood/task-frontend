'use client'

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import geoJson from "../data.json";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib2xhd2FsZS1kZXYiLCJhIjoiY2xyNnh2dHcxMXpibzJ2dDM2dDY4bjJ6ZiJ9.XFUbN6UA6FZ4b-54kKYlbg";

const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [0, 0],
      zoom: 1.5,
      projection: 'globe'
    });

    map.on('style.load', () => {
      map.setFog({
          color: 'transparent', // Lower atmosphere
          'high-color': 'transparent', // Upper atmosphere
          'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
          'space-color': 'transparent', // Background color
          'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )
      });
  });
  
   

    map.on("load", function () {
        // Loop through each feature in GeoJSON data
        geoJson.features.forEach((feature, index) => {
          const imageUrl = feature.properties.imageUrl || "/mlad2.png"; // Default image URL or specify a default image
          map.loadImage(imageUrl, function (error, image) {
            if (error) throw error;
  
            // Add a unique image for each feature
            map.addImage(`custom-marker-${index}`, image);
  
            // Add a GeoJSON source with a single point for each feature
            map.addSource(`point-${index}`, {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [feature],
              },
            });
  
            // Add a symbol layer for each feature
            map.addLayer({
              id: `point-${index}`,
              type: "symbol",
              source: `point-${index}`,
              layout: {
                "icon-image": `custom-marker-${index}`,
              },
            });
          });
        });
      });
  
 

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container pb[55px] overflow-hidden" ref={mapContainerRef} />;
};

export default Map;