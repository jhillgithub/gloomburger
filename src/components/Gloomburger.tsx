import { Decal, useTexture } from "@react-three/drei";

export const Gloomburger = () => {
  const texture = useTexture("/gloomburger.png");
  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial />
        <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2}>
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      </mesh>
    </>
  );
};
