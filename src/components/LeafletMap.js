import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

class LeafletMap extends Component {

  componentDidMount() {

    const addressPoints = [
        [-37.8839, 175.3745188667, "1"],
        [-37.8869090667, 175.3657417333, "100"],
        [-37.8894207167, 175.4015351167, "2"],
        [-37.8927369333, 175.4087452333, "899"],
        [-37.90585105, 175.4453463833, "1273"],
        [-37.9064188833, 175.4441556833, "1258"],
        [-37.90584715, 175.4463564333, "1279"],
        [-37.9033391333, 175.4244005667, "1078"],
        [-37.9061991333, 175.4492620333, "1309"],
        [-37.9058955167, 175.4445613167, "1261"],
        [-37.88888045, 175.39146475, "734"],
        [-37.90567525, 175.4753235167, "119"],
        [-37.9124889333, 175.4727737833, "278"]
        ];

    const map = L.map("map").setView([-37.87, 175.475], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const points = addressPoints
      ? addressPoints.map((p) => {
          return [p[0], p[1], p[2]];
        })
      : [];

    console.log(points)

    // Create a green heatmap gradient
    const greenGradient = {
      '0': '#00ff00', // Light green for low intensity
      '0.5': '#00cc00', // Medium green for medium intensity
      '1.0': '#008000'  // Dark green for high intensity
    };

    // Add the heatmap with the green gradient
    L.heatLayer(points, {
      radius: 15, // Adjust radius as needed
      blur: 15, // Adjust blur as needed
      gradient: greenGradient
    }).addTo(map);
  }

  render() {
    return <div id="map" style={{ height: "100vh" }}></div>;
  }
}

export default LeafletMap;