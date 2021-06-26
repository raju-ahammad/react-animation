import React from "react";
import Particle from "react-particles-js";
import "../assets/about.css";

import particlesConfig from "../assets/particlesConfig.json";
import data from "../assets/data.json";
function App() {
 
  
  
  return (
    <>
      <Particle params={particlesConfig} className="App-particles__container" />
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">Animation Test</h1>
          <div className="card__wrapper">
            {data.map((data) => (
              <div className="card">
                <img  src={data.image} alt="Logo" />
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
