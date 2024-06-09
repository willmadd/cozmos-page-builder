import { useEffect, useRef } from "react";
import { useThree } from "../_context/ThreeContext";
import PageBuilderCanvas from "./PageBuilderCanvas";
import MediaItems from "./MediaItems";

const Scene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { scene, camera, renderer } = useThree();

  useEffect(() => {
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [camera, renderer, scene]);

  return (
    <div ref={mountRef}>
      <PageBuilderCanvas />
      <MediaItems />
    </div>
  );
};

export default Scene;
