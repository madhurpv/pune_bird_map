import React, { Component } from 'react';
import Title from './Title';
//import './Centre.css'; // Optional: If you want to style this separately

class Centre extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Welcome" />
        <p>Main Content</p>
      </div>
    );
  }
}

export default Centre;
