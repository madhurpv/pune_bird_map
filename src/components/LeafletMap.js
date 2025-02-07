import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.heatLayer = null;
  }

  componentDidMount() {
    this.initializeMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.toShowData !== this.props.toShowData) {
      this.updateMap();
    }
  }

  get_location_details(bird){
    const latlan_array = [];
    var totalcount = 0;

    //iterating over bird
    for (var entry in bird["13"]) {
      if (Object.prototype.hasOwnProperty.call(bird["13"], entry)) {
          //console.log("iterating over : ", entry);
          latlan_array.push([bird["13"][entry]["a"], bird["13"][entry]["b"], bird["13"][entry]["d"]])
          totalcount = bird["13"][entry]["d"]
      }
    }
    console.log("Total Count = ", totalcount);
    return latlan_array;
  }

  initializeMap() {
    // Ensure the map is only initialized once
    if (this.map) return;

    console.log("initializedNow")

    this.map = L.map("map").setView([-37.87, 175.475], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.updateMap();
  }

  updateMap() {
    console.log("InUpdate1")
    if (!this.map) return;
    console.log("InUpdate2")

    // Remove existing heat layer
    if (this.heatLayer) {
      this.map.removeLayer(this.heatLayer);
    }

    var addressPoints;

    const firstBird = Object.values(this.props.toShowData)[0];
    console.log("firstBird = ", firstBird);
    if(firstBird==undefined){
      addressPoints = [[-37.8839, 175.3745188667, "1"],
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
    }
    else{
      addressPoints = this.get_location_details(firstBird);
    }
    

      console.log("AddressPoints = ", addressPoints);



    // Format points correctly
    const points = addressPoints
      .map((p) => (Array.isArray(p) && p.length >= 3 ? [p[0], p[1], Number(p[2])] : null))
      .filter(Boolean);

    if (points.length === 0) return;

    // Define a green gradient for better visibility
    const greenGradient = {
      0.1: "lime",
      0.3: "green",
      0.6: "darkgreen",
      1.0: "black",
    };

    // Create and add the new heat layer
    this.heatLayer = L.heatLayer(points, {
      radius: 20,//Math.floor(Math.random() * 30), // Increased radius for better visibility (20)
      blur: 25,
      maxZoom: 15,
      gradient: greenGradient,
    }).addTo(this.map);

    console.log("AllAdded")
  }

  render() {
    return <div id="map" style={{ height: "100vh" }}></div>;
  }
}

export default LeafletMap;
