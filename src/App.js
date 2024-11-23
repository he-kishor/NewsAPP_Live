
import './App.css';
import Headline from './component/Headlines.js';
import Navbar from './component/Navbar.js';
import Sidemenu from './component/sidemenu.js';
import Article from './component/Article.js';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    
    return (
      <div>
        <Navbar/>
        <Headline/>
        <Sidemenu/>
        <Article/>

      </div>
    );
  }
}

// aeae2366fc7f422baff77890ec1e1b4a
