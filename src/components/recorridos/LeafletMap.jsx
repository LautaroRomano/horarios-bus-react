import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function LeafletMap() {
  useEffect(() => {
    const mapEl = document.getElementById("map");

    if (!mapEl) {
      return;
    }

    mapEl.innerHTML = "";

    L.Marker.prototype.options.icon = DefaultIcon;
    const mapSW = new L.Point(0, 960);
    const mapNE = new L.Point(960, 0);
    const map = L.map("map", { crs: L.CRS.Simple }).setView([0, 0], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      tileSize: 32,
      minZoom: 4,
      maxZoom: 5,
      noWrap: true
    }).addTo(map);

    var maxBounds = L.latLngBounds(
      map.unproject(mapSW, map.getMaxZoom()),
      map.unproject(mapNE, map.getMaxZoom())
    );
    map.setMaxBounds(maxBounds);

    var marker = L.marker([0, 0], {
      draggable: true
    }).addTo(map);

    marker.bindPopup("<b>Our hero!</b>").openPopup();

    function onMapClick(e) {
      let tileSize = new L.Point(32, 32);
      let pixelPoint = map.project(e.latlng, map.getMaxZoom()).floor();
      let coords = pixelPoint.unscaleBy(tileSize).floor();
      alert("You clicked the map at " + coords);
    }
    map.on("click", onMapClick);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "100%", width: "100%" }}></div>;
}
