import logo from './logo.svg';
import Left from './components/Left';
import Right from './components/Right';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Navbar from './components/Navbar';


import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* Navbar component for top navigation */}
          <Navbar />

          
          {/* Main Layout */}
          <div className="layout-container">

            <Left />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Right />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;