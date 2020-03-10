import React, { useState, useEffect } from 'react';
import './App.css';
import './Sidebar.css'

import { Link} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import Routes from './Routes';

function App() {
  return (
    <div>

      <Menu>
        <span className="menu-wrap">
          <a id="home" className="menu-item" href="/cat-facts">CAT FACTS</a>
        </span>
        <span className="menu-wrap">
          <a id="explore-repos" className="menu-item" href="/explore-repos">EXPLORE REPOS OF GITHUB USERS</a>
        </span>
        <span className="menu-wrap">
          <a id="home" className="menu-item" href="/">Home</a>
        </span>

      </Menu>
      <div className="App">
        <Routes />
      </div>

    </div>
  );
}

export default App;
