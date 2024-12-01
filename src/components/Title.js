import React, { Component } from 'react';
//import './Centre.css'; // Optional: If you want to style this separately

class Title extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
      };
    }
  
    // Trigger the animation when the component mounts
    componentDidMount() {
      this.setState({ isLoaded: true });
  
      // Reset the animation state after 1 second
      this.timer = setTimeout(() => {
        this.setState({ isLoaded: false });
      }, 1000); // 1 second duration for the animation
    }
  
    // Clean up the timeout when the component unmounts
    componentWillUnmount() {
      clearTimeout(this.timer);
    }
  
    render() {
      const { title } = this.props;
      const { isLoaded } = this.state;
  
      return (
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap" rel="stylesheet" />
          <h1 className={`merienda-600-anim ${isLoaded ? 'animate-weight' : ''}`}>{title}</h1>
        </div>
      );
    }
  }
  
  export default Title;
