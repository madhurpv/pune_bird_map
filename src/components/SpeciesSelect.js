import React, { Component } from "react";
import SearchableDropdown from "./SearchableDropdown";

class SpeciesSelect extends Component {
  constructor(props) {
    super(props);
  }

  setSelectedBirdList = this.props.setSelectedBirdList;
  addToSelectedBirdList = this.props.addToSelectedBirdList;

  render() {
    const { options, selectedBirdList, deleteFromSelectedBirdList } =
      this.props;

    return (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <p style={{ color: "white" }}>Select Species</p>
          <button onClick={this.addToSelectedBirdList}>Add</button>
        </div>

        {selectedBirdList.map((_, index) => (
          <SearchableDropdown
            key={index}
            options={options}
            selectedBirdList={selectedBirdList}
            setSelectedBirdList={this.setSelectedBirdList}
            deleteFromSelectedBirdList={deleteFromSelectedBirdList}
            index={index}
          />
        ))}
      </>
    );
  }
}

export default SpeciesSelect;
