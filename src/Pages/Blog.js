
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import CardContainer from '../components/CardContainer';

const cardsData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    title: 'Card 1',
    description: 'This is the first card description.',
    link: '/blog1'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 2',
    description: 'This is the second card description.',
    link: '/blog1'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 3',
    description: 'This is the third card description.',
    link: '/blog1'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 4',
    description: 'This is the fourth card description.',
    link: '/blog1'
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