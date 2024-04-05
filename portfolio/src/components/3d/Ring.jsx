import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Ring = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.setZ(17);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true, // Set alpha to true to make the canvas transparent
    });

    // Resize the canvas to match its parent container
    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = canvasRef.current.parentElement;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      // camera.position.setZ(37)
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const geometryRing = new THREE.TorusGeometry(5, 1, 8, 50);
    const materialColor = new THREE.MeshBasicMaterial({
      color: 0x3d69eb,
      wireframe: true,
    });
    const meshRing = new THREE.Mesh(geometryRing, materialColor);
    scene.add(meshRing);

    const animate = () => {
      requestAnimationFrame(animate);
      meshRing.rotation.x += 0.01;
      meshRing.rotation.y += 0.005;
      meshRing.rotation.z += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Ring;
