import React, { Component } from 'react';
import './Styling/SquareCard.css'; 

class SquareCard extends Component {
  render() {
    const { image, title, description } = this.props;

    return (
      <div className="square-card">
        <img src={image} alt={title} className="square-card-image" />
        <h3 className="square-card-title">{title}</h3>
        <p className="square-card-description">{description}</p>
      </div>
    );
  }
}

export default SquareCard;
