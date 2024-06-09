import { useEffect, forwardRef, useRef } from "react";
import * as THREE from "three";
import { useThree } from "../_context/ThreeContext";

const PageBuilderCanvas = forwardRef((props, ref) => {
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.PlaneGeometry(10, 6);
    const material = new THREE.MeshBasicMaterial({ color: 0xebebeb });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = Math.PI * 2;
    plane.position.y = -0.5;

    scene.add(plane);

    if (ref && "current" in ref) {
      ref.current = plane;
    }

    // Clean up
    return () => {
      scene.remove(plane);
    };
  }, [scene, ref]);

  return null;
});

export default PageBuilderCanvas;
