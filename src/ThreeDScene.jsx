import React, { useEffect, useRef } from "react";
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const ThreeDScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene,
      camera,
      renderer,
      controls,
      stadium,
      ball,
      rotationSpeed = 0,
      decayRate = 0.95;
    let ballScrollFactor = 0;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 30, -50);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enableRotate = false;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(10, 20, 15);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    pointLight.position.set(0, 30, -20);
    scene.add(pointLight);

    const loader = new GLTFLoader();
    loader.load(
      "/models/cricket_stadium/scene.gltf",
      (gltf) => {
        stadium = gltf.scene;
        scene.add(stadium);
        stadium.position.set(0, 0, 0);
        stadium.scale.set(0.5, 0.5, 0.5);

        const stadiumBase = new THREE.Mesh(
          new THREE.CircleGeometry(50, 32),
          new THREE.MeshStandardMaterial({ color: "#1B360F" })
        );
        stadiumBase.rotation.x = -Math.PI / 2;
        stadiumBase.position.y = -0.1;
        scene.add(stadiumBase);
      },
      undefined,
      (error) => {
        console.error("Error loading stadium:", error);
      }
    );

    loader.load(
      "/models/cricket_ball/scene.gltf",
      (gltf) => {
        ball = gltf.scene;
        scene.add(ball);
        ball.position.set(0, 0.5, 0);
        ball.scale.set(2, 2, 2);
      },
      undefined,
      (error) => {
        console.error("Error loading ball:", error);
      }
    );

    const handleWheel = (event) => {
      rotationSpeed += event.deltaY * 0.0005;
      ballScrollFactor += event.deltaY * 0.02;
    };
    window.addEventListener("wheel", handleWheel);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      if (stadium) {
        stadium.rotation.y += rotationSpeed;
        rotationSpeed *= decayRate;
      }

      if (ball) {
        ball.rotation.y += rotationSpeed;
        rotationSpeed *= decayRate;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(0, 0, 0, 0.8), black)",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default ThreeDScene;