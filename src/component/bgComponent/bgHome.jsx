
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min"

export default function VantaBackground({children}) {
  const vantaRef = useRef(null); // reference to the div
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
      GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 100.00,
        minWidth: 100.00,
        scale: 0.80,
        scaleMobile: 1.00,
        color: 0x222831,
        color2: 0x0,
        backgroundColor: 0xdfd0b8
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy(); // cleanup on unmount
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className=" relative ">
        <div className="relative z-10 ">
        {children} 
      </div>
    </div>
  );
}
