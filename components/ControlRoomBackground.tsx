"use client";

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

function GridPlane() {
  const grid = useMemo(() => {
    const helper = new THREE.GridHelper(50, 50, 0x3b82f6, 0x1e293b);
    (helper.material as THREE.Material).transparent = true;
    (helper.material as THREE.Material).opacity = 0.055;
    return helper;
  }, []);

  return <primitive object={grid} position={[0, -1.6, 0]} />;
}

export default function ControlRoomBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Base */}
      <div className="absolute inset-0 bg-[#0F172A]" />

      {/* Soft blue glow */}
      <div className="absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-blue-500/18 blur-3xl" />

      {/* Subtle orange accent glow */}
      <div className="absolute bottom-[-220px] right-[-120px] h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-3xl" />

      {/* Light radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-45">
        <Canvas
          frameloop="demand"
          camera={{ position: [0, 2.4, 8], fov: 55 }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 6, 2]} intensity={0.35} />
          <GridPlane />
        </Canvas>
      </div>
    </div>
  );
}