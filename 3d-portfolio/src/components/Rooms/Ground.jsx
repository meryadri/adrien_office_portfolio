import { useGLTF } from "@react-three/drei";

const Ground = (props) => {
  const { nodes, materials } = useGLTF("/models/hacker-room.glb");
  return (
    <mesh
      geometry={nodes.table_table_mat_0_11.geometry}
      material={materials.ground_mat}
      {...props}
    />
  );
};

useGLTF.preload("/models/hacker-room.glb");

export default Ground;
