import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import countryData from "../data/countries.json";
import pressIndexData from "../data/RSB_DataSet.json";
import { useState } from "react";
import List from "./List";
import up from "../assets/up.svg";

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
        layer.options.fillColor = "#820263";
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
  const [openList, setopenList] = useState(true);
  return (
    <div className="w-[100%] backgroundB md:flex">
      <MapContainer
        className="h-[88vh] w-[100%] md:w-[75%] z-0 absolute md:relative"
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
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON
          style={styleGeoJSON}
          // data={geojsonData.features}
          data={countryData.features}
          onEachFeature={handleCountry}
        />
      </MapContainer>
      <button
        className="bg-black w-[100%] h-10x flex justify-center md:hidden absolute bottom-0 z-90"
        onClick={() => {
          setopenList(!openList);
        }}
        aria-label="toggle List"
      >
        <img
          className={`w-10 h-8 transition delay-150 ${
            openList ? "" : "rotate-180"
          }`}
          src={up}
          alt="Toggle List"
        />
      </button>
      <div
        className={`z-20 bg-black md:bg-transparent ${
          openList ? "hidden" : ""
        } w-[100%] relative md:h-auto md:absolute md:right-0 md:w-[25%] md:block `}
      >
        <List />
      </div>

      {/* // list  */}
    </div>
  );
};
export default Map;
