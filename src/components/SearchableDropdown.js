import React, { Component } from "react";
import Select from "react-select";

// Class-based component for searchable dropdown
class SearchableDropdown extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (selected, selectedBirdList, setSelectedBirdList, index) => {
    if (selectedBirdList && setSelectedBirdList) {
      const updatedBirdList = [...selectedBirdList];
      updatedBirdList[index] = selected.value;
      setSelectedBirdList(updatedBirdList);
    }
  };

  deleteDropdown = (deleteFromSelectedBirdList, index) => {
    if (deleteFromSelectedBirdList && index >= 0) {
      deleteFromSelectedBirdList(index);
    }
  };

  render() {
    const {
      options,
      selectedBirdList,
      setSelectedBirdList,
      index,
      deleteFromSelectedBirdList,
    } = this.props;

    // Map the array of strings into an array of objects with 'value' and 'label'
    const formattedOptions = options.map((option) => ({
      value: option,
      label: option,
    }));

    // Get previously selected bird if exist
    const selectedOption = formattedOptions.find(
      (opt) => opt.value === selectedBirdList[index]
    );

    return (
      <>
        <div
          className="dropdown-container"
          style={{ width: "300px", margin: "0 auto" }}
        >
          <Select
            value={selectedOption}
            onChange={(selected) => {
              this.handleChange(
                selected,
                selectedBirdList,
                setSelectedBirdList,
                index
              );
            }}
            options={formattedOptions}
            getOptionLabel={(e) => e.label} // This tells react-select to display the 'label' property of each option
            getOptionValue={(e) => e.value} // This tells react-select to use 'value' for the selected option
            placeholder="Select an option"
            styles={{
              control: (styles) => ({
                ...styles,
                borderRadius: "12px",
                padding: "0 10px",
                borderColor: "#ccc",
                boxShadow: "none",
              }),
              menu: (styles) => ({
                ...styles,
                borderRadius: "12px",
              }),
              option: (styles, { isFocused, isSelected }) => ({
                ...styles,
                backgroundColor: isSelected
                  ? "#4CAF50"
                  : isFocused
                  ? "#f1f1f1"
                  : "#fff",
                color: isSelected ? "white" : "black",
                padding: "10px 15px",
                borderRadius: "8px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: isFocused ? "#e6e6e6" : "#f0f0f0",
                },
              }),
              singleValue: (styles) => ({
                ...styles,
                color: "#333",
              }),
            }}
          />
          <button
            onClick={() => {
              this.deleteDropdown(deleteFromSelectedBirdList, index);
            }}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default SearchableDropdown;
