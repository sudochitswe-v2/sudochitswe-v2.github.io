'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

export default function SovietThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera setup
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.8;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Main Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const isDark = resolvedTheme === 'dark';
    const goldColor = 0xFFC82C;
    const redColor = 0xB81414;
    const darkWoodColor = 0x5C3A21;

    // Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: goldColor,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x443000,
      emissiveIntensity: 0.2,
    });

    const redMaterial = new THREE.MeshStandardMaterial({
      color: redColor,
      metalness: 0.5,
      roughness: 0.35,
      emissive: 0x330000,
      emissiveIntensity: 0.3,
    });

    const handleMaterial = new THREE.MeshStandardMaterial({
      color: darkWoodColor,
      metalness: 0.2,
      roughness: 0.7,
    });

    // ── 1. The Sickle ──
    const sickleGroup = new THREE.Group();

    // Sickle Blade (Crescent shape)
    const sickleShape = new THREE.Shape();
    const outerR = 1.35;
    const innerR = 1.05;
    const centerOffset = 0.25;

    // Outer curve from base to sharp tip
    const outerSteps = 32;
    for (let i = 0; i <= outerSteps; i++) {
      const angle = -0.3 + (i / outerSteps) * (Math.PI * 0.95);
      const x = Math.cos(angle) * outerR;
      const y = Math.sin(angle) * outerR;
      if (i === 0) sickleShape.moveTo(x, y);
      else sickleShape.lineTo(x, y);
    }

    // Inner curve from tip back to base
    const innerSteps = 32;
    for (let i = innerSteps; i >= 0; i--) {
      const angle = -0.25 + (i / innerSteps) * (Math.PI * 0.93);
      const x = Math.cos(angle) * innerR + centerOffset;
      const y = Math.sin(angle) * innerR;
      sickleShape.lineTo(x, y);
    }
    sickleShape.closePath();

    const sickleGeo = new THREE.ExtrudeGeometry(sickleShape, {
      depth: 0.08,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    });
    const sickleMesh = new THREE.Mesh(sickleGeo, goldMaterial);
    sickleGroup.add(sickleMesh);

    // Sickle Handle
    const sickleHandleGeo = new THREE.CylinderGeometry(0.08, 0.07, 1.0, 16);
    const sickleHandle = new THREE.Mesh(sickleHandleGeo, handleMaterial);
    sickleHandle.position.set(1.3, -0.65, 0.04);
    sickleHandle.rotation.z = Math.PI / 4;
    sickleGroup.add(sickleHandle);

    // Sickle Collar (gold ring connecting blade to handle)
    const collarGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.12, 16);
    const collar = new THREE.Mesh(collarGeo, goldMaterial);
    collar.position.set(1.22, -0.4, 0.04);
    collar.rotation.z = Math.PI / 4;
    sickleGroup.add(collar);

    // Center the sickle
    sickleGroup.position.set(-0.5, 0.1, 0.05);
    mainGroup.add(sickleGroup);

    // ── 2. The Hammer ──
    const hammerGroup = new THREE.Group();

    // Hammer Handle
    const hammerHandleGeo = new THREE.CylinderGeometry(0.07, 0.065, 2.7, 16);
    const hammerHandle = new THREE.Mesh(hammerHandleGeo, handleMaterial);
    hammerGroup.add(hammerHandle);

    // Hammer Head (Constructivist rectangular head)
    const hammerHeadGeo = new THREE.BoxGeometry(0.35, 0.75, 0.35);
    const hammerHead = new THREE.Mesh(hammerHeadGeo, goldMaterial);
    hammerHead.position.set(0, 1.15, 0);
    hammerGroup.add(hammerHead);

    // Hammer Peen (Claw or bevel back)
    const peenGeo = new THREE.CylinderGeometry(0.12, 0.18, 0.35, 16);
    const peen = new THREE.Mesh(peenGeo, goldMaterial);
    peen.position.set(0, 1.4, 0);
    hammerGroup.add(peen);

    // Hammer angle across sickle
    hammerGroup.rotation.z = -Math.PI / 4;
    hammerGroup.position.set(0.1, 0.1, 0.2);
    mainGroup.add(hammerGroup);

    // ── 3. The 3D Five-Pointed Star (Crown) ──
    const starShape = new THREE.Shape();
    const starPoints = 5;
    const outerRadius = 0.55;
    const innerRadius = 0.24;
    for (let i = 0; i < starPoints * 2; i++) {
      const r = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / starPoints - Math.PI / 2;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) starShape.moveTo(x, y);
      else starShape.lineTo(x, y);
    }
    starShape.closePath();

    const starGeo = new THREE.ExtrudeGeometry(starShape, {
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelSegments: 2,
    });
    const starMesh = new THREE.Mesh(starGeo, redMaterial);
    starMesh.position.set(0, 1.55, -0.1);
    mainGroup.add(starMesh);

    // Golden border star backing
    const starBorderMesh = new THREE.Mesh(starGeo, goldMaterial);
    starBorderMesh.scale.set(1.08, 1.08, 1.08);
    starBorderMesh.position.set(0, 1.55, -0.16);
    mainGroup.add(starBorderMesh);

    // ── 4. Constructivist Orbiting Wire Ring ──
    const ringGeo = new THREE.TorusGeometry(2.3, 0.015, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: goldColor,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    mainGroup.add(ring2);

    // ── 5. Golden & Red Spark Particles ──
    const particleCount = 75;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: isDark ? goldColor : redColor,
      size: 0.07,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // ── Lighting ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.5);
    keyLight.position.set(5, 5, 6);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(redColor, 3.0, 15);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    const goldBacklight = new THREE.PointLight(goldColor, 2.5, 12);
    goldBacklight.position.set(2, 4, -4);
    scene.add(goldBacklight);

    // Mouse interaction tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 0.8;
      mouseY = (y / rect.height) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Gentle floating sway
      mainGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.25 + targetX;
      mainGroup.rotation.x = Math.cos(elapsedTime * 0.6) * 0.1 - targetY;
      mainGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08;

      // Rotate decorative rings
      ring1.rotation.z += 0.005;
      ring2.rotation.z -= 0.005;

      // Particles orbit
      particles.rotation.y -= 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      sickleGeo.dispose();
      sickleHandleGeo.dispose();
      collarGeo.dispose();
      hammerHandleGeo.dispose();
      hammerHeadGeo.dispose();
      peenGeo.dispose();
      starGeo.dispose();
      ringGeo.dispose();
      particleGeo.dispose();

      goldMaterial.dispose();
      redMaterial.dispose();
      handleMaterial.dispose();
      ringMat.dispose();
      particleMat.dispose();

      renderer.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="relative h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] lg:h-[540px] lg:w-[540px] cursor-grab active:cursor-grabbing pointer-events-auto select-none"
      aria-label="Interactive 3D Soviet Hammer and Sickle Emblem"
    />
  );
}
