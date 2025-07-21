import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";

import { calculateSizes } from "../constants";
import HackerRoom from "../components/Rooms/HackerRoom";
import ExplorerRoom from "../components/Rooms/ExplorerRoom";
import ReaderRoom from "../components/Rooms/ReaderRoom";
import TinkererRoom from "../components/Rooms/TinkererRoom";
import Ground from "../components/Rooms/Ground";

import HeroCamera from "../components/HeroCamera";
import CanvasLoader from "../components/CanvasLoader";
import Target from "../components/target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import Button from "../components/Button";

const Hero = () => {
  // const x = useControls("Hacker Room", {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  //   rotationX: { value: 0, min: -10, max: 10 },
  //   rotationY: { value: 0, min: -10, max: 10 },
  //   rotationZ: { value: 0, min: -10, max: 10 },
  //   scale: { value: 1, min: 0.01, max: 10 },
  // });

  // const y = useControls("ground", {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  //   scale: { value: 1, min: 0.01, max: 5 },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Add state for desk selection
  const [deskType, setDeskType] = useState("programmer");
  const [hoveredType, setHoveredType] = useState(null);

  return (
    <section className="min-h-screen w-full flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          My name is Adrien
          <span className="waving-hand">👋</span>
        </p>
        <div className="absolute top-8 right-0 left-0 w-full z-10 c-space flex flex-row flex-nowrap justify-center gap-4">
          <p className="hero_tag text-gray_gradient whitespace-nowrap">
            I am a{" "}
          </p>
          <div className="flex flex-row flex-nowrap justify-center gap-4">
            {["developer,", "tinkerer,", "learner,", "traveller"].map(
              (type) => (
                <span
                  key={type}
                  className={` hero_tag text-gray_gradient cursor-pointer transition-colors whitespace-nowrap rounded px-2 py-1 ${
                    deskType === type
                      ? "font-bold text-blue-500 bg-blue-50"
                      : ""
                  } ${hoveredType === type ? "text-pink-500 bg-pink-50" : ""}`}
                  onMouseEnter={() => {
                    setDeskType(type);
                    setHoveredType(type);
                  }}
                  onMouseLeave={() => setHoveredType(null)}
                >
                  {type}
                </span>
              )
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              {deskType === "developer," && (
                <HackerRoom
                  position={sizes.hackerDeskPosition}
                  rotation={[0.4, -3.2, 0]}
                  scale={sizes.hackerDeskScale}
                />
              )}
              {deskType === "tinkerer," && (
                <>
                  <TinkererRoom
                    position={sizes.tinkererDeskPosition}
                    rotation={[-5.6, 4.7, 0.2]}
                    scale={sizes.tinkererDeskScale}
                  />
                  <Ground
                    position={sizes.tinkererGroundPosition}
                    rotation={[-5.6, 4.7, 0.2]}
                    scale={sizes.groundScale}
                  />
                </>
              )}
              {deskType === "learner," && (
                <>
                  <ReaderRoom
                    position={sizes.readerDeskPosition}
                    rotation={[-5.7, 4.7, 0.2]}
                    scale={sizes.readerDeskScale}
                  />
                  <Ground
                    position={sizes.readerGroundPosition}
                    rotation={[-5.7, 4.7, 0.2]}
                    scale={sizes.groundScale}
                  />
                </>
              )}
              {deskType === "traveller" && (
                <>
                  <ExplorerRoom
                    position={sizes.explorerDeskPosition}
                    rotation={[0.6, 3.1, 0]}
                    scale={sizes.explorerDeskScale}
                  />
                  <Ground
                    position={sizes.explorerGroundPosition}
                    rotation={[0.6, 3.1, 0]}
                    scale={sizes.groundScale}
                  />
                </>
              )}
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 right-0 left-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
