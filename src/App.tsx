import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";
import Box from "./Box";
import Navbar from "./Navbar";
import BoxPage from "./pages/BoxPage";
import SpherePage from "./pages/SpherePage";

function App() {
  return (
    <>
      {/* TODO: Handle page switching. Render Box for the box page and Sphere for the Sphere Page*/}
      <Navbar>
        <BoxPage />
        <SpherePage />
      </Navbar>

      {/* TODO: fix lightning*/}
      <div className="canvas-container">
        <Canvas className="canvas">
          <OrbitControls />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            decay={0}
            intensity={Math.PI}
            castShadow={true}
          />
          <Box position={[0, 0, 0]} rotation={[0.5, Math.PI / 4, 0]} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
