import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Mesh } from "three";

const geom = [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)];

export default function Box({
  position,
  rotation,
}: {
  position: any;
  rotation: any;
}) {
  const ref = useRef<Mesh>();
  const [count, setCount] = useState(0);

  const [hovered, hover] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;
    }
  });
  return (
    <mesh
      position={position}
      rotation={rotation}
      //@ts-expect-error
      ref={ref}
      scale={1}
      onClick={()=>setCount((count + 1) % 2)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      geometry={geom[count]}
    >
      <meshStandardMaterial color={hovered ? "hotpink" : "purple"} />
    </mesh>
  );
}
