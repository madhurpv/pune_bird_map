
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';
import CardContainer from '../components/CardContainer';

const cardsData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    title: 'Card 1',
    blogtype: 'Travel',
    description: 'This is the first card description.',
    link: '/blog1'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 2',
    blogtype: 'Travel',
    description: 'This is the second card description.',
    link: '/blog1'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 3',
    blogtype: 'Tech',
    description: 'This is the third card description.',
    link: '/blog1'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 4',
    blogtype: 'Travel',
    description: 'This is the fourth card description.',
    link: '/blog1'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Card 5',
    blogtype: 'Travel',
    description: 'This is the fourth card description.',
    link: '/blog1'
  }
];

function modifyCardsData(cardsData) {
  console.log(cardsData);
  if (cardsData.length === 0){
    return cardsData;
  }
  if (cardsData[0].typecolour !== undefined){
    return cardsData;
  }
  for (var i=0; i<cardsData.length; i++) {
    //console.log(cardsData[i]);
    if (cardsData[i].blogtype === "Travel"){
      cardsData[i].typecolour = "#FF8000";
    }
    if (cardsData[i].blogtype === "Tech"){
      cardsData[i].typecolour = "#1150F0";
    }
  }
  return cardsData;
}

class Blog extends Component {
  
  render() {
    modifyCardsData(cardsData);

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