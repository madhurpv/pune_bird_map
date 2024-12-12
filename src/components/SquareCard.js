import React, { Component } from 'react';
import './Styling/SquareCard.css'; 

class SquareCard extends Component {
  render() {
    const { image, title, description, blogtype, typecolour } = this.props;

    return (
      <div className="square-card">
        <img src={image} alt={title} className="square-card-image" />
        <h3 className="square-card-title">{title}</h3>
        <h3 className="square-card-type" style={{color: typecolour}}>{blogtype}</h3>
        <p className="square-card-description">{description}</p>
      </div>
    );
  }
}

export default SquareCard;
