import React from "react";
import Countdown from "./Countdown";
import UnsplashImage from "./UnsplashImage";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <UnsplashImage /> */}
      
      <div className="content">      
        <Countdown />
      </div>

    </div>
  );
}

export default App;
