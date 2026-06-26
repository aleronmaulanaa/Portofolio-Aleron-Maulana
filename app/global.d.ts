// export { };

// declare module '*.glb';
// declare module '*.png';

// declare module 'meshline' {
//   export const MeshLineGeometry: any;
//   export const MeshLineMaterial: any;
// }

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       meshLineGeometry: any;
//       meshLineMaterial: any;
//     }
//   }
// }

// - src/vite-env.d.ts
// /// <reference types="vite/client" />
// declare module '*.glb';
// declare module '*.png';

export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

import type { Object3DNode } from "@react-three/fiber";
import type { MeshLineGeometry, MeshLineMaterial } from "meshline";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}