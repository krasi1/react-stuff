import { Canvas } from "@react-three/fiber";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Box from "./Box";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar>
        <Home />
        <Link to="/about">2</Link>
        <Link to="/contact">3</Link>
      </Navbar>

      <div className="canvas-container">
        <Canvas className="canvas">
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
