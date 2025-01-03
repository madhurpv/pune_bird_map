import logo from './logo.svg';
import Left from './components/Left';
import Right from './components/Right';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './components/Navbar';

import Blog1 from './Pages/Blog/Blog1';


import { BrowserRouter as Router, Routes, Route, HashRouter,} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          {/* Navbar component for top navigation */}
          <Navbar />

          
          {/* Main Layout */}
          <div>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;