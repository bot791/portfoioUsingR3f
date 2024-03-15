import React from "react";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Torusknot = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <torusKnotGeometry args={size} />
      <MeshWobbleMaterial color={color} factor={2} speed={0.5} />
    </mesh>
  );
};

const Mainpage = () => {
  return (
    <>
      <div className=" min-h-screen flex flex-col sm:flex-row sm:justify-evenly max-w-full overflow-scroll">
        <div className=" h-96 w-full p-5 sm:w-[45%] mt-20">
          <Canvas className="">
            <directionalLight position={[0, 0, 2]} intensity={0.5} />
            <ambientLight intensity={0.5} />
            <Torusknot
              position={[0, 0, 0]}
              size={[1.5, 0.5, 1000, 50]}
              color={"greenyellow"}
            />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <p className="text sm:mt-48 mt-10 text-center font-mono font-bold text-emerald-500 sm:text-fuchsia-800  text-2xl sm:text-5xl">
          Hi I'm Kajal Biswas
          <br />A Full Stack Developer
        </p>
      </div>
    </>
  );
};

export default Mainpage;
