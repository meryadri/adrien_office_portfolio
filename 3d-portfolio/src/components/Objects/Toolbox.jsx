import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Box3, Vector3 } from "three";

const Toolbox = (props) => {
  const { nodes, materials } = useGLTF("/models/toolbox.glb");
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      const box = new Box3().setFromObject(meshRef.current);
      const center = new Vector3();
      box.getCenter(center);
      meshRef.current.position.sub(center);
    }
  }, []);

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          geometry={nodes.box_a_LP_box_a_0.geometry}
          material={materials.box_a}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/toolbox.glb");

export default Toolbox;
