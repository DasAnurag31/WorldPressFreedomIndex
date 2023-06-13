import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import countryData from "../data/countries.json";
import pressIndexData from "../data/RSB_DataSet.json";
import List from "./List";

const handleCountry = (feature, layer) => {
  const countryName = feature.properties.ADMIN;
  layer.options.fillColor = "#fff";

  layer.on({
    mouseover: (e) => {
      e.target.setStyle({
        color: "white",
        weight: 3.5,
      });
      layer.openPopup(e.latlng);
    },
    mouseout: (e) => {
      e.target.setStyle({
        color: "white",
        weight: 1,
      });
      layer.closePopup();
    },
  });

  // Fill Colours
  pressIndexData.map((ele) => {
    if (ele.Country == countryName) {
      layer.bindPopup(`
        <div id="popup">
          <p id="country">${ele.Country}</p>
          <p>Ranking: <span>${ele.Ranking}</span></p>
          <p>Score: <span>${ele.Score}</span></p>
          <p>Safety Score: <span>${ele.SafetyScore}</span> </p>
          <p>Economic Context: <span>${ele.EconomicContext}</span> </p>
        </div>
      `);
      if (ele.Score > 85) {
        layer.options.fillColor = "#70e000";
      } else if (ele.Score > 70) {
        layer.options.fillColor = "#fca311";
      } else if (ele.Score > 55) {
        layer.options.fillColor = "#ff5400";
      } else if (ele.Score > 40) {
        layer.options.fillColor = "#e5383b";
      } else if (ele.Score > 0) {
        layer.options.fillColor = "#780116";
      }
    }
  });
};
const styleGeoJSON = () => {
  return {
    weight: 1,
    color: "white",
    fillColor: "white",
    fillOpacity: 1,
    opacity: 1,
    dashArray: 5,
  };
};

const Map = () => {
  return (
    <div className="w-[100%] backgroundB md:flex">
      <MapContainer
        className="h-[88vh] w-[100%] md:w-[80%] z-0"
        id="mapContainer"
        center={[30.0, 50.0]}
        zoom={1.5}
        scrollWheelZoom={false}
        dragging={true}
        worldCopyJump={true}
        bounceAtZoomLimits={false}
        minZoom={1.5}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        touchZoom={[50.0, 50.0]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          style={styleGeoJSON}
          data={countryData.features}
          onEachFeature={handleCountry}
        />
      </MapContainer>
      <List />
    </div>
  );
};
export default Map;
