
import React, {Component} from 'react';
import Title from '../components/Title';
import Centre from '../components/Centre';

class Resume extends Component {
  render() {
    return (
      <div className="centre">
        <Title title="Resume" />
        <p>This is My Resume</p>
      </div>
    );
  }
}

export default Resume;