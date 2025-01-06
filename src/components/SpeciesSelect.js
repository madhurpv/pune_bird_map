import React, { Component } from "react";
import SearchableDropdown from "./SearchableDropdown";

class SpeciesSelect extends Component {
  constructor(props) {
    super(props);
    this.createSSDs = this.createSSDs.bind(this); // function not called while binding
    this.createSSDs();
  }

  SDDs = []; // searchable drop downs

  createSSDs() {
    for (let i = 0; i < 5; i++) {
      this.SDDs.push(
        <p>
          <SearchableDropdown
            options={this.props.options}
            onChange={this.props.onChange}
            index={i}
          ></SearchableDropdown>
        </p>
      );
    }
  }

  render() {
    return (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <p style={{ color: "white" }}>Select Species</p>
          <button>Add</button>
          <button>Del</button>
        </div>
        {this.SDDs}
      </>
    );
  }
}

export default SpeciesSelect;
