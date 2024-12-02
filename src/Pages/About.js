
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';

class About extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Welcome" />
        <p>This is About</p>
      </div>
    );
  }
}

export default About;