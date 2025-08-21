import React from "react";
import Particles from "./bgParticles"; 

export default function BgBody({ children }) {
  return (
    <div className="relative w-full  overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Particles
        particleColors={['#ffffff', 'black']}
        particleCount={400}
        particleSpread={4}
        speed={0.2}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
  />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex items-center justify-center h-full ">
        {children}
      </div>
    </div>
  );
}
