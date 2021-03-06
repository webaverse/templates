import * as THREE from 'three';
import {React, Fragment, Suspense, useLoader} from 'react';
import {Box} from "./box.js"

const Chest = () => (
  <Gltf src="https://avaer.github.io/chest-rtfjs/chest.glb"/>
);
function Gltf({src}) {
  const gltf = useLoader(THREE.GLTFLoader, src);
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

const lightQuaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, -1), new THREE.Vector3(-1, -1, -1).normalize()).toArray();

const render = ({app}) => {
  return (
    <Fragment>
      <ambientLight />
      <directionalLight position={[1, 1, 1]} quaternion={lightQuaternion} intensity={2} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Suspense fallback={<Box position={[0, 0, 0]} />}>
        <Chest />
      </Suspense>
    </Fragment>
  );
};
export default render;
