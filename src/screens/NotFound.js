import React from "react";
import { Link } from "react-router-dom";
import Particle from "react-particles-js";
import particlesjsBuble from "../assets/particlesjsBuble.json";
function NotFound() {
  return (
    <>
    <Particle params={particlesjsBuble} className="App-particles__buble" />
    <div className="App">
      <div className="App-text">
        
        
        <Link to="/">Go to home</Link>
      </div>
    </div>
    </>
  );
}

export default NotFound;
