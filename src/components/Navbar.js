// src/Navbar.js
import React, { Component } from 'react';
import './Styling/Navbar.css'; // CSS file for styling the navbar
import { Router } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuOpen: false, // Track whether the mobile menu is open or closed
      };
    }
  
    toggleMenu = () => {
      this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
    };
  
    render() {
      return (
        <div className="navbar">
        {/* Hamburger Menu for mobile */}
        <div className="hamburger" onClick={this.toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>

        {/* Menu */}
        <div className={`menu ${this.state.menuOpen ? 'active' : ''}`}>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        </div>
      );
    }
  }
  
  export default Navbar;