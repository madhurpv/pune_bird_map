import React, { Component } from 'react';
import Select from 'react-select';

// Class-based component for searchable dropdown
class SearchableDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null, // To track the selected option
    };
  }

  handleChange = (selected) => {
    // Update the selected option in state
    this.setState({ selectedOption: selected });
    
    // Call the onChange prop function if provided
    if (this.props.onChange) {
      this.props.onChange(selected);
    }
  };

  render() {
    const { options } = this.props;
    const { selectedOption } = this.state;

    // Map the array of strings into an array of objects with 'value' and 'label'
    const formattedOptions = options.map(option => ({
      value: option, 
      label: option
    }));

    return (
      <div className="dropdown-container" style={{ width: '300px', margin: '0 auto' }}>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={formattedOptions}
          getOptionLabel={(e) => e.label} // This tells react-select to display the 'label' property of each option
          getOptionValue={(e) => e.value} // This tells react-select to use 'value' for the selected option
          placeholder="Select an option"
          styles={{
            control: (styles) => ({
              ...styles,
              borderRadius: '12px',
              padding: '0 10px',
              borderColor: '#ccc',
              boxShadow: 'none',
            }),
            menu: (styles) => ({
              ...styles,
              borderRadius: '12px',
            }),
            option: (styles, { isFocused, isSelected }) => ({
              ...styles,
              backgroundColor: isSelected ? '#4CAF50' : isFocused ? '#f1f1f1' : '#fff',
              color: isSelected ? 'white' : 'black',
              padding: '10px 15px',
              borderRadius: '8px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: isFocused ? '#e6e6e6' : '#f0f0f0',
              },
            }),
            singleValue: (styles) => ({
              ...styles,
              color: '#333',
            }),
          }}
        />
      </div>
    );
  }
}

export default SearchableDropdown;
