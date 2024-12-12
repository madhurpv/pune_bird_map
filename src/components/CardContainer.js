import React, { Component } from 'react';
import './Styling/CardContainer.css'; 
import SquareCard from './SquareCard';

class CardContainer extends Component {
  render() {
    const { cards } = this.props;

    return (
      <div className="card-container">
        {cards.map((card, index) => (
          <a href={card.link} style={{textDecoration: "none"}}>
            <SquareCard 
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              blogtype={card.blogtype}
              typecolour={card.typecolour}
              link={card.link}
            />
          </a>
        ))}
      </div>
    );
  }
}

export default CardContainer;
