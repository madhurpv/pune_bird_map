import React, { Component } from 'react';
import './Styling/CardContainer.css'; 
import SquareCard from './SquareCard';

class CardContainer extends Component {
  render() {
    const { cards } = this.props;

    return (
      <div className="card-container">
        {cards.map((card, index) => (
          <SquareCard 
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    );
  }
}

export default CardContainer;
