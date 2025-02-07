import React, { Component } from "react";
import Title from "../components/Title";
import Centre from "../components/Centre";
import Right from "../components/Right";
import Left from "../components/Left";
import Loading from "../components/Loading";
import SearchableDropdown from "../components/SearchableDropdown";
import BarChart from "../components/BarChart";
import LeafletMap from "../components/LeafletMap";
import SpeciesSelect from "../components/SpeciesSelect";
import { color } from "chart.js/helpers";

import DataJSON from "../assets/birds_combined.json";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

//IMP : If a variable is added in state, make sure to remove it in loaddata() before it is passed to createMonthlyData()

var files = [
  "AlexandrineParakeet.json",
  "AlpineSwift.json",
  "AmurFalcon.json",
  "Ashy-crownedSparrow-Lark.json",
  "AshyDrongo.json",
  "AshyPrinia.json",
  "AshyWoodswallow.json",
  "AsianBrownFlycatcher.json",
  "AsianEmeraldDove.json",
  "AsianFairy-bluebird.json",
  "AsianGreenBee-eater.json",
];

var files2 = [];
var monthlyData = {};

function createMonthlyData(jsonObj) {
  const result = {};
  // Iterate through each "name" in the object
  jsonObj = jsonObj.DataJSON;
  for (let name in jsonObj) {
    //console.log("Name = ", name)
    if (jsonObj.hasOwnProperty(name)) {
      result[name] = []; // Initialize an array for each name

      // Iterate through each month (1-12)
      for (let month = 1; month <= 12; month++) {
        const monthKey = month.toString(); // Convert month number to string
        const monthData = jsonObj[name][monthKey];

        // Initialize the sum for the current month
        let sum = 0;

        // Check if the data exists for this month and is an array
        if (Array.isArray(monthData)) {
          // Sum the "d" values for this month
          sum = monthData.reduce(
            (acc, item) => acc + (parseInt(item.d) || 0),
            0
          );
        }

        // Add the sum to the array for the current name
        result[name].push(sum);
      }
    }
  }
  //await delay(2000);
  console.log("Result = ", result);
  return result;
}

const calculateNames = (jsonObj) => {
  files2 = [];
  /*let name = "";
  for (var i = 0; i < files.length; i++) {
    //console.log(files[i]);
    name = files[i];
    name = name.slice(0, -5);
    // Add a space between lowercase and uppercase characters
    name = name.replace(/([a-z])([A-Z])/g, "$1 $2");
    files2.push(name);
  }*/
  jsonObj = jsonObj.DataJSON;
  for (let name in jsonObj) {
    files2.push(name);
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      birdsSelected: [""],
    };
  }

  componentDidMount() {
    // Fetch the JSON file when the component mounts
    this.loadData();
  }

  loadData = async () => {
    //await delay(2000);

    this.setState({ DataJSON: DataJSON });
    await delay(2000);

    var clonedState = JSON.parse(JSON.stringify(this.state)); //Duplicate state
    //delete clonedState["loading"];
    //delete clonedState["birdsSelected"];
    //console.log(clonedState)
    monthlyData = createMonthlyData(clonedState);
    calculateNames(clonedState);

    this.setState({ loading: false });
    console.log(this.state);
    await delay(2000);
  };

  setSelectedBirdList = (updatedBirdList) => {
    this.setState({ birdsSelected: updatedBirdList });
  };

  addToSelectedBirdList = () => {
    this.setState({ birdsSelected: [...this.state.birdsSelected, ""] });
  };

  deleteFromSelectedBirdList = (index) => {
    const updatedBirdList = [...this.state.birdsSelected];
    updatedBirdList.splice(index, 1);
    this.setState({ birdsSelected: updatedBirdList });
  };

  render() {
    const { loading, sum } = this.state;

    // Render loading or sum based on loading state
    if (loading) {
      return (
        <div className="centre">
          <Loading />
        </div>
      );
    }
    return (
      <div className="layout-container">
        <div className="left">
          <p>Left Menu</p>
          <SpeciesSelect
            options={files2}
            selectedBirdList={this.state.birdsSelected}
            setSelectedBirdList={this.setSelectedBirdList}
            addToSelectedBirdList={this.addToSelectedBirdList}
            deleteFromSelectedBirdList={this.deleteFromSelectedBirdList}
          />
        </div>
        <div className="centre">
          <Title title="Welcome" />
          <p style={{ color: "red" }}>
            This is Home. Bird = {String(this.state.birdsSelected)}
          </p>
          <div
            style={{
              minHeight: 500,
              maxWidth: "80vw",
              height: "fit-content",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {/* TODO: For now only one barchart of the first selected bird is shown: make decision how to handle multiple birds*/}
            <BarChart data={monthlyData[this.state.birdsSelected[0]]} />
          </div>

          <div>
            <LeafletMap />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
