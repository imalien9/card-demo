// // components/Card.js
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";

// export default function Card() {
//   const cardRef = useRef();

//   // 卡牌旋轉動畫
//   useFrame(() => {
//     if (cardRef.current) {
//       cardRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh ref={cardRef} position={[0, 0, 0]}>
//       {/* 卡牌平面 */}
//       <boxGeometry args={[2, 3, 0.1]} />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   );
// }

// components/Card.js (更新)
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export default function Card() {
//   const texture = useLoader(TextureLoader, "/123.png");
    const textureFront = useLoader(TextureLoader, "/123.png");
    const textureBack = useLoader(TextureLoader, "/456.jpg");

  return (
    // <mesh position={[0, 0, 0]}>
    //   <boxGeometry args={[4, 6, 0.1]} />
    //   <meshStandardMaterial map={texture} />
    // </mesh>
    <mesh position={[0, 0, 0]}>
    <boxGeometry args={[4, 6, 0.1]} />
        <meshStandardMaterial attach="material-0" color="gray" />  {/* 右面 */}
        <meshStandardMaterial attach="material-1" color="gray" />   {/* 左面 */}
        <meshStandardMaterial attach="material-2" color="gray" />    {/* 頂面 */}
        <meshStandardMaterial attach="material-3" color="gray" /> {/* 底面 */}
        <meshStandardMaterial attach="material-4" map={textureFront} />  {/* 前面 */}
        <meshStandardMaterial attach="material-5" map={textureBack} />   {/* 後面 */}
    </mesh>
  );
}
