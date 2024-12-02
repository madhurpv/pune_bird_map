
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';

class Home extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Welcome" />
        <p>This is Home</p>
      </div>
    );
  }
}

export default Home;