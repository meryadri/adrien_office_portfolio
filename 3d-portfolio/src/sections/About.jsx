import { Suspense } from "react";
import Globe from "react-globe.gl";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { aboutContent } from "../constants";

// import { Leva, useControls } from "leva";
import Button from "../components/Button";
import { useState, useRef, useEffect } from "react";
import Coffee from "../components/Objects/Coffee";
import Toolbox from "../components/Objects/Toolbox";
import Keyboard from "../components/Objects/Keyboard";
import Telephone from "../components/Objects/Telephone";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();

  // const pos = useControls({
  //   x: { value: 0, min: -8, max: 8 },
  //   y: { value: 0, min: -10, max: 10 },
  //   z: { value: 0, min: -10, max: 10 },
  //   rx: { value: 0, min: -Math.PI, max: Math.PI },
  //   ry: { value: 0, min: -Math.PI, max: Math.PI },
  //   rz: { value: 0, min: -Math.PI, max: Math.PI },
  //   sc: { value: 1, min: 0.1, max: 30 },
  // });

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      if (globeRef.current) {
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.8;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(aboutContent.contactEmail);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const {
    introTitle,
    introBody,
    techStackTitle,
    techStackBody,
    globeLabels,
    locationTitle,
    locationBody,
    journeyTitle,
    journeyBody,
    contactCta,
    contactEmail,
    contactLinks,
  } = aboutContent;

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <div
              className="flex justify-center items-center"
              style={{ minHeight: 250, height: 250 }}
            >
              {/* <Leva /> */}
              <Canvas className="w-full h-fit sm:h-[276px] object-contain">
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    {/* <Coffee
                      position={[pos.x, pos.y, pos.z]}
                      rotation={[pos.rx, pos.ry, pos.rz]}
                      scale={pos.sc}
                    /> */}
                    <Coffee
                      position={[-0.2, 0, -0.2]}
                      rotation={[0.75, -0.2, 0]}
                      scale={25}
                    />
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">{introTitle}</p>
              <p className="grid-subtext">{introBody}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <div
              className="flex justify-center items-center"
              style={{ minHeight: 250, height: 250 }}
            >
              <Canvas className="w-full h-fit sm:h-[276px] object-contain">
                <ambientLight intensity={5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    <Toolbox
                      position={[0, 0, 0]}
                      rotation={[0, 0, 0]}
                      scale={10}
                    />
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">{techStackTitle}</p>
              <p className="grid-subtext">{techStackBody}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={340}
                width={340}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={globeLabels}
              />
            </div>
            <div>
              <p className="grid-headtext">{locationTitle}</p>
              <p className="grid-subtext">{locationBody}</p>
              <Button name={contactCta} isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div
              className="flex justify-center items-center"
              style={{ minHeight: 250, height: 250 }}
            >
              <Canvas className="w-full sm:h-[266px] h-fit object-contain">
                <ambientLight intensity={4} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    <Keyboard
                      position={[3.5, 3, 0.2]}
                      rotation={[1.5, 0, 0]}
                      scale={37}
                    />
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">{journeyTitle}</p>
              <p className="grid-subtext">{journeyBody}</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div
              className="flex justify-center items-center"
              style={{ minHeight: 180, height: 180 }}
            >
              <Canvas className="w-full h-fit sm:h-[276px] object-contain">
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    <Telephone
                      position={[0, -1, -0.2]}
                      rotation={[0.36, -1.2, 0.18]}
                      scale={0.5}
                    />
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
              </Canvas>
            </div>
            <div className="space-y-2">
              <p className="grid-subtext text-center">{contactCta}</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  {contactEmail}
                </p>
              </div>
              <div className="flex justify-center gap-4 pt-2">
                {contactLinks.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="social-icon"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                  >
                    <img src={icon} alt={label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
