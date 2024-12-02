
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import CardContainer from '../components/CardContainer';

const cardsData = [
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 1',
    description: 'This is the first card description.'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 2',
    description: 'This is the second card description.'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 3',
    description: 'This is the third card description.'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 4',
    description: 'This is the fourth card description.'
  }
];

class Blog extends Component {
  
  render() {
    return (
      <div className="centre">
        <Title title="Blog" />
        <p>This is My Blog</p>
        <CardContainer cards={cardsData} />
      </div>
    );
  }
}

export default Blog;