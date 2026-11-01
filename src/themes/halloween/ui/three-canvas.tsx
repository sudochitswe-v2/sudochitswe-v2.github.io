'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

export default function HalloweenThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.0;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ── 1. Realistic Ribbed Pumpkin Geometry ──
    const pumpkinGeo = new THREE.SphereGeometry(1.65, 48, 36);
    const pos = pumpkinGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const w = pos.getZ(i);
      const angle = Math.atan2(w, u);
      // 8 deep pumpkin ribs
      const ribFactor = 1 + 0.12 * Math.sin(angle * 8);
      // Flatten top and bottom
      const flattenFactor = 1 - 0.14 * Math.pow(v / 1.65, 2);
      pos.setX(i, u * ribFactor * flattenFactor);
      pos.setZ(i, w * ribFactor * flattenFactor);
      pos.setY(i, v * 0.92);
    }
    pumpkinGeo.computeVertexNormals();

    const pumpkinMat = new THREE.MeshStandardMaterial({
      color: 0xEE5A00,
      roughness: 0.4,
      metalness: 0.1,
      emissive: 0x331100,
      emissiveIntensity: 0.25,
    });
    const pumpkinMesh = new THREE.Mesh(pumpkinGeo, pumpkinMat);
    mainGroup.add(pumpkinMesh);

    // ── 2. Pumpkin Stem (Curved Dark Green) ──
    const stemGeo = new THREE.CylinderGeometry(0.12, 0.22, 0.7, 16);
    const stemMat = new THREE.MeshStandardMaterial({
      color: 0x2A5210,
      roughness: 0.8,
      metalness: 0.1,
    });
    const stemMesh = new THREE.Mesh(stemGeo, stemMat);
    stemMesh.position.set(0.05, 1.65, 0);
    stemMesh.rotation.z = -0.25;
    stemMesh.rotation.x = 0.1;
    mainGroup.add(stemMesh);

    // ── 3. Carved Glowing Face (Glowing Jack-o'-Lantern) ──
    const faceMat = new THREE.MeshBasicMaterial({
      color: 0xFFD200,
    });

    // Left Eye Triangle
    const eyeShapeL = new THREE.Shape();
    eyeShapeL.moveTo(-0.55, 0.4);
    eyeShapeL.lineTo(-0.25, 0.4);
    eyeShapeL.lineTo(-0.4, 0.75);
    eyeShapeL.closePath();
    const eyeGeoL = new THREE.ShapeGeometry(eyeShapeL);
    const eyeMeshL = new THREE.Mesh(eyeGeoL, faceMat);
    eyeMeshL.position.set(0, 0, 1.58);
    mainGroup.add(eyeMeshL);

    // Right Eye Triangle
    const eyeShapeR = new THREE.Shape();
    eyeShapeR.moveTo(0.25, 0.4);
    eyeShapeR.lineTo(0.55, 0.4);
    eyeShapeR.lineTo(0.4, 0.75);
    eyeShapeR.closePath();
    const eyeGeoR = new THREE.ShapeGeometry(eyeShapeR);
    const eyeMeshR = new THREE.Mesh(eyeGeoR, faceMat);
    eyeMeshR.position.set(0, 0, 1.58);
    mainGroup.add(eyeMeshR);

    // Nose Triangle
    const noseShape = new THREE.Shape();
    noseShape.moveTo(-0.12, 0.2);
    noseShape.lineTo(0.12, 0.2);
    noseShape.lineTo(0, 0.38);
    noseShape.closePath();
    const noseGeo = new THREE.ShapeGeometry(noseShape);
    const noseMesh = new THREE.Mesh(noseGeo, faceMat);
    noseMesh.position.set(0, 0, 1.63);
    mainGroup.add(noseMesh);

    // Jagged Grin Mouth
    const mouthShape = new THREE.Shape();
    mouthShape.moveTo(-0.85, -0.15);
    mouthShape.lineTo(-0.6, -0.45);
    mouthShape.lineTo(-0.4, -0.25);
    mouthShape.lineTo(-0.2, -0.55);
    mouthShape.lineTo(0, -0.3);
    mouthShape.lineTo(0.2, -0.55);
    mouthShape.lineTo(0.4, -0.25);
    mouthShape.lineTo(0.6, -0.45);
    mouthShape.lineTo(0.85, -0.15);
    // Upper lip cutouts
    mouthShape.lineTo(0.55, -0.25);
    mouthShape.lineTo(0.35, -0.05);
    mouthShape.lineTo(0.15, -0.28);
    mouthShape.lineTo(0, -0.1);
    mouthShape.lineTo(-0.15, -0.28);
    mouthShape.lineTo(-0.35, -0.05);
    mouthShape.lineTo(-0.55, -0.25);
    mouthShape.closePath();
    const mouthGeo = new THREE.ShapeGeometry(mouthShape);
    const mouthMesh = new THREE.Mesh(mouthGeo, faceMat);
    mouthMesh.position.set(0, 0, 1.55);
    mainGroup.add(mouthMesh);

    // ── 4. Floating Wisps / Ghostly Fireflies ──
    const emberCount = 80;
    const emberPositions = new Float32Array(emberCount * 3);
    const emberColors = new Float32Array(emberCount * 3);

    for (let i = 0; i < emberCount; i++) {
      const radius = 2.2 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      emberPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      emberPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      emberPositions[i * 3 + 2] = radius * Math.cos(phi);

      // Alternate between Spooky Green (0x39FF14) and Ghost Purple (0x8A2BE2)
      if (i % 2 === 0) {
        emberColors[i * 3] = 0.22;
        emberColors[i * 3 + 1] = 1.0;
        emberColors[i * 3 + 2] = 0.08;
      } else {
        emberColors[i * 3] = 0.65;
        emberColors[i * 3 + 1] = 0.15;
        emberColors[i * 3 + 2] = 0.95;
      }
    }

    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    emberGeo.setAttribute('color', new THREE.BufferAttribute(emberColors, 3));
    const emberMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    mainGroup.add(embers);

    // ── 5. Lighting (Internal Candle Flame Light + Spooky Atmospheric Light) ──
    const ambientLight = new THREE.AmbientLight(0x221133, 1.5);
    scene.add(ambientLight);

    // Internal flickering candle light inside the face
    const candleLight = new THREE.PointLight(0xFFB703, 3.5, 8);
    candleLight.position.set(0, 0, 1.8);
    scene.add(candleLight);

    // Eerie Purple fill light from left
    const purpleLight = new THREE.DirectionalLight(0x8A2BE2, 2.0);
    purpleLight.position.set(-5, 4, 3);
    scene.add(purpleLight);

    // Slime Green backlight
    const greenLight = new THREE.DirectionalLight(0x39FF14, 1.8);
    greenLight.position.set(4, -3, -4);
    scene.add(greenLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 0.7;
      mouseY = (y / rect.height) * 0.7;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Candle flicker effect
      const flicker = Math.sin(elapsedTime * 14) * 0.3 + Math.cos(elapsedTime * 23) * 0.15;
      candleLight.intensity = 3.2 + flicker;

      // Gentle floating bob
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;
      mainGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.2 + targetX;
      mainGroup.rotation.x = Math.cos(elapsedTime * 0.6) * 0.08 - targetY;

      // Orbiting embers
      embers.rotation.y -= 0.003;
      embers.rotation.x += 0.001;

      renderer.render(scene, camera);
    };

    animate();

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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      pumpkinGeo.dispose();
      pumpkinMat.dispose();
      stemGeo.dispose();
      stemMat.dispose();
      eyeGeoL.dispose();
      eyeGeoR.dispose();
      noseGeo.dispose();
      mouthGeo.dispose();
      faceMat.dispose();
      emberGeo.dispose();
      emberMat.dispose();

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
      aria-label="Interactive 3D Jack-o-Lantern Pumpkin"
    />
  );
}
