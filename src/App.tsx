import React from 'react';
import './App.css';
// different pages
import Home from './pages/home';
import About from './pages/about';
// other components
import ResponsiveAppBar from './navigation/navi';
import {containerStyle, fullPageBackgroundStyle} from './styles/styles';
// elements from MUI


// React components
import { Route, Routes } from 'react-router-dom';
import Publications from './pages/publications';
//import Portfolio from './pages/portfolio';
// open in new tab use '_blank' in target, else use '_self'
// use MUI library
// https://mui.com/core
// material icons
// https://mui.com/material-ui/material-icons/
function App() {

  return (
    <div className="App">
      <div style={fullPageBackgroundStyle}>
        <ResponsiveAppBar/>
        <div style={containerStyle}>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path="/home" Component={Home} />
            <Route path="/publications" Component={Publications} />
            <Route path="/about" Component={About} />
          </Routes>
        </div>
      </div>
      <footer>Sorry, nothing down here!</footer>
    </div>
  );
}

export default App;
