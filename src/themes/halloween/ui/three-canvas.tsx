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
    camera.position.set(0, 0.4, 6.2);

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

    // ── 1. Weathered Stone Tombstone Monument & Altar Plinth ──
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x221E1B, // Weathered Dark Basalt / Granite
      roughness: 0.95,
      metalness: 0.05,
    });
    const stoneTrimMat = new THREE.MeshStandardMaterial({
      color: 0x36302B, // Chiseled slate edge
      roughness: 0.9,
      metalness: 0.05,
    });
    const mossMat = new THREE.MeshStandardMaterial({
      color: 0x225526, // Crypt Moss Green
      roughness: 0.85,
      metalness: 0.05,
    });

    // Lower Stepped Stone Foundation Plinth
    const lowerPlinthGeo = new THREE.BoxGeometry(4.2, 0.4, 2.6);
    const lowerPlinth = new THREE.Mesh(lowerPlinthGeo, stoneMat);
    lowerPlinth.position.set(0, -1.8, -0.2);
    mainGroup.add(lowerPlinth);

    // Upper Carved Stone Altar Step
    const upperPlinthGeo = new THREE.BoxGeometry(3.5, 0.35, 2.2);
    const upperPlinth = new THREE.Mesh(upperPlinthGeo, stoneTrimMat);
    upperPlinth.position.set(0, -1.45, -0.2);
    mainGroup.add(upperPlinth);

    // Upright Arched Stone Headstone (Standing behind the Pumpkin)
    const headstoneShape = new THREE.Shape();
    headstoneShape.moveTo(-1.25, -1.3);
    headstoneShape.lineTo(-1.25, 0.7);
    headstoneShape.absarc(0, 0.7, 1.25, Math.PI, 0, true);
    headstoneShape.lineTo(1.25, -1.3);
    headstoneShape.closePath();

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.35,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 3,
    };
    const headstoneGeo = new THREE.ExtrudeGeometry(headstoneShape, extrudeSettings);
    const headstoneMesh = new THREE.Mesh(headstoneGeo, stoneMat);
    headstoneMesh.position.set(0, -0.1, -0.8);
    mainGroup.add(headstoneMesh);

    // Carved Gothic Cross on the Stone Slab Face
    const crossMat = new THREE.MeshStandardMaterial({
      color: 0x5C544B,
      roughness: 0.8,
      emissive: 0x1A2B14,
      emissiveIntensity: 0.3,
    });
    // Vertical Cross Bar
    const crossVGeo = new THREE.BoxGeometry(0.18, 0.85, 0.06);
    const crossV = new THREE.Mesh(crossVGeo, crossMat);
    crossV.position.set(0, 1.15, -0.42);
    mainGroup.add(crossV);

    // Horizontal Cross Bar
    const crossHGeo = new THREE.BoxGeometry(0.65, 0.18, 0.06);
    const crossH = new THREE.Mesh(crossHGeo, crossMat);
    crossH.position.set(0, 1.35, -0.42);
    mainGroup.add(crossH);

    // Crypt Moss Clumps along the Stone Plinth
    const moss1 = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.4, 0.12, 7), mossMat);
    moss1.position.set(-1.6, -1.25, 0.7);
    mainGroup.add(moss1);

    const moss2 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.35, 0.1, 7), mossMat);
    moss2.position.set(1.5, -1.25, 0.6);
    mainGroup.add(moss2);

    const moss3 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 0.14, 7), mossMat);
    moss3.position.set(-1.8, -1.6, 0.9);
    mainGroup.add(moss3);

    // ── 2. Realistic Ribbed Pumpkin Geometry Sitting on the Stone Altar ──
    const pumpkinGeo = new THREE.SphereGeometry(1.4, 48, 36);
    const pos = pumpkinGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const w = pos.getZ(i);
      const angle = Math.atan2(w, u);
      // 8 deep pumpkin ribs
      const ribFactor = 1 + 0.12 * Math.sin(angle * 8);
      // Flatten top and bottom to sit on stone
      const flattenFactor = 1 - 0.15 * Math.pow(v / 1.4, 2);
      pos.setX(i, u * ribFactor * flattenFactor);
      pos.setZ(i, w * ribFactor * flattenFactor);
      pos.setY(i, v * 0.9);
    }
    pumpkinGeo.computeVertexNormals();

    const pumpkinMat = new THREE.MeshStandardMaterial({
      color: 0xEE5500,
      roughness: 0.45,
      metalness: 0.1,
      emissive: 0x331000,
      emissiveIntensity: 0.3,
    });
    const pumpkinMesh = new THREE.Mesh(pumpkinGeo, pumpkinMat);
    pumpkinMesh.position.set(0, 0.05, 0.15);
    mainGroup.add(pumpkinMesh);

    // ── 3. Pumpkin Stem (Curved Dark Green) ──
    const stemGeo = new THREE.CylinderGeometry(0.1, 0.18, 0.6, 16);
    const stemMat = new THREE.MeshStandardMaterial({
      color: 0x244212,
      roughness: 0.85,
      metalness: 0.1,
    });
    const stemMesh = new THREE.Mesh(stemGeo, stemMat);
    stemMesh.position.set(0.04, 1.42, 0.15);
    stemMesh.rotation.z = -0.22;
    stemMesh.rotation.x = 0.1;
    mainGroup.add(stemMesh);

    // ── 4. Carved Glowing Face (Glowing Jack-o'-Lantern) ──
    const faceMat = new THREE.MeshBasicMaterial({
      color: 0xFFCA10,
    });

    // Left Eye Triangle
    const eyeShapeL = new THREE.Shape();
    eyeShapeL.moveTo(-0.45, 0.35);
    eyeShapeL.lineTo(-0.2, 0.35);
    eyeShapeL.lineTo(-0.32, 0.65);
    eyeShapeL.closePath();
    const eyeMeshL = new THREE.Mesh(new THREE.ShapeGeometry(eyeShapeL), faceMat);
    eyeMeshL.position.set(0, 0.05, 1.48);
    mainGroup.add(eyeMeshL);

    // Right Eye Triangle
    const eyeShapeR = new THREE.Shape();
    eyeShapeR.moveTo(0.2, 0.35);
    eyeShapeR.lineTo(0.45, 0.35);
    eyeShapeR.lineTo(0.32, 0.65);
    eyeShapeR.closePath();
    const eyeMeshR = new THREE.Mesh(new THREE.ShapeGeometry(eyeShapeR), faceMat);
    eyeMeshR.position.set(0, 0.05, 1.48);
    mainGroup.add(eyeMeshR);

    // Nose Triangle
    const noseShape = new THREE.Shape();
    noseShape.moveTo(-0.1, 0.18);
    noseShape.lineTo(0.1, 0.18);
    noseShape.lineTo(0, 0.34);
    noseShape.closePath();
    const noseMesh = new THREE.Mesh(new THREE.ShapeGeometry(noseShape), faceMat);
    noseMesh.position.set(0, 0.05, 1.52);
    mainGroup.add(noseMesh);

    // Jagged Grin Mouth
    const mouthShape = new THREE.Shape();
    mouthShape.moveTo(-0.75, -0.12);
    mouthShape.lineTo(-0.5, -0.38);
    mouthShape.lineTo(-0.35, -0.2);
    mouthShape.lineTo(-0.18, -0.45);
    mouthShape.lineTo(0, -0.24);
    mouthShape.lineTo(0.18, -0.45);
    mouthShape.lineTo(0.35, -0.2);
    mouthShape.lineTo(0.5, -0.38);
    mouthShape.lineTo(0.75, -0.12);
    mouthShape.lineTo(0.5, -0.2);
    mouthShape.lineTo(0.3, -0.05);
    mouthShape.lineTo(0.12, -0.24);
    mouthShape.lineTo(0, -0.08);
    mouthShape.lineTo(-0.12, -0.24);
    mouthShape.lineTo(-0.3, -0.05);
    mouthShape.lineTo(-0.5, -0.2);
    mouthShape.closePath();
    const mouthMesh = new THREE.Mesh(new THREE.ShapeGeometry(mouthShape), faceMat);
    mouthMesh.position.set(0, 0.05, 1.46);
    mainGroup.add(mouthMesh);

    // ── 5. Floating Wisps / Ghostly Gravestone Embers ──
    const emberCount = 70;
    const emberPositions = new Float32Array(emberCount * 3);
    const emberColors = new Float32Array(emberCount * 3);

    for (let i = 0; i < emberCount; i++) {
      const radius = 2.2 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      emberPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      emberPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) + 0.2;
      emberPositions[i * 3 + 2] = radius * Math.cos(phi);

      // Alternate between Grave Moss Green (0x22C55E) and Ember Gold (0xF59E0B)
      if (i % 2 === 0) {
        emberColors[i * 3] = 0.15;
        emberColors[i * 3 + 1] = 0.85;
        emberColors[i * 3 + 2] = 0.35;
      } else {
        emberColors[i * 3] = 0.95;
        emberColors[i * 3 + 1] = 0.6;
        emberColors[i * 3 + 2] = 0.05;
      }
    }

    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    emberGeo.setAttribute('color', new THREE.BufferAttribute(emberColors, 3));
    const emberMat = new THREE.PointsMaterial({
      size: 0.075,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    mainGroup.add(embers);

    // ── 6. Lighting (Internal Candle Flame Light + Stone Moonbeam Light) ──
    const ambientLight = new THREE.AmbientLight(0x221D1A, 1.6);
    scene.add(ambientLight);

    // Internal flickering candle light illuminating the face and stone slab
    const candleLight = new THREE.PointLight(0xFFB010, 3.8, 8);
    candleLight.position.set(0, 0.2, 1.7);
    scene.add(candleLight);

    // Cold Crypt Moonbeam highlighting stone edges from top-right
    const moonLight = new THREE.DirectionalLight(0x78716C, 2.2);
    moonLight.position.set(4, 5, 3);
    scene.add(moonLight);

    // Eerie Moss Green backlight illuminating the tombstone silhouette
    const mossLight = new THREE.DirectionalLight(0x22C55E, 1.6);
    mossLight.position.set(-4, -2, -3);
    scene.add(mossLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 0.55;
      mouseY = (y / rect.height) * 0.55;
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
      const flicker = Math.sin(elapsedTime * 14) * 0.35 + Math.cos(elapsedTime * 23) * 0.18;
      candleLight.intensity = 3.4 + flicker;

      // Gentle monument shift with perspective
      mainGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.12 + targetX;
      mainGroup.rotation.x = 0.05 + Math.cos(elapsedTime * 0.5) * 0.04 - targetY;

      // Orbiting embers
      embers.rotation.y -= 0.0025;
      embers.rotation.x += 0.0008;

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

      lowerPlinthGeo.dispose();
      upperPlinthGeo.dispose();
      headstoneGeo.dispose();
      crossVGeo.dispose();
      crossHGeo.dispose();
      pumpkinGeo.dispose();
      stemGeo.dispose();
      emberGeo.dispose();

      stoneMat.dispose();
      stoneTrimMat.dispose();
      mossMat.dispose();
      crossMat.dispose();
      pumpkinMat.dispose();
      stemMat.dispose();
      faceMat.dispose();
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
      aria-label="Interactive 3D Stone Tombstone Monument & Jack-o'-Lantern"
    />
  );
}
