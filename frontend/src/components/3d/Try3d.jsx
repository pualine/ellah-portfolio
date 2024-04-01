import React, { useEffect } from 'react'
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
// import "../3d/3d.css"


const Try3d = () => {
    useEffect(() =>{
        
        const scene = new THREE.Scene();  // Create a three.js Scene object
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        camera.position.setZ(30);

        const display = new THREE.WebGLRenderer({
            canvas: document.querySelector("#bgtry")
        });
        display.setSize(window.innerWidth, window.innerHeight);
        display.setPixelRatio(window.devicePixelRatio);
        display.render(scene, camera);

        const tryRingGeometry = new THREE.TorusGeometry(10, 3, 16, 100)  //create the type geometry you want to use
        const materialColor = new THREE.MeshBasicMaterial({
            color: 0xf1f5f9,
            wireframe: true,

        });

        const meshTryRing = new THREE.Mesh(tryRingGeometry, materialColor);
        scene.add(meshTryRing);

        const pointLight = new THREE.PointLight(0xfffff);
        pointLight.position.set(5,5,5)
        const lightHelper = new THREE.PointLightHelper(pointLight)
        const gridHelper = new THREE.GridHelper(200, 50);
        scene.add(lightHelper, gridHelper);

        const controls = new OrbitControls(camera, display.domElement);

        function animate(){
            requestAnimationFrame(animate);
            meshTryRing.rotation.x += 0.01;
            meshTryRing.rotation.y += 0.005;
            meshTryRing.rotation.z += 0.02;

            display.render(scene, camera);
            controls.update()

        };

        animate();

    }, []);
  return (
    <canvas id='bgtry'></canvas>
  )
}

export default Try3d