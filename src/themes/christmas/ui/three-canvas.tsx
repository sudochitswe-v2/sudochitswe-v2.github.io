'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

export default function ChristmasThreeCanvas() {
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
    camera.position.z = 6.2;

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

    // ── 1. Christmas Tree Trunk ──
    const trunkGeo = new THREE.CylinderGeometry(0.22, 0.28, 0.9, 16);
    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x4A2E18,
      roughness: 0.9,
    });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = -1.6;
    mainGroup.add(trunk);

    // ── 2. Tree Foliage Tiers (Pine Evergreen) ──
    const foliageMat = new THREE.MeshStandardMaterial({
      color: 0x165B33,
      roughness: 0.45,
      metalness: 0.1,
      emissive: 0x052010,
      emissiveIntensity: 0.3,
    });

    // Tier 1 (Bottom)
    const tier1Geo = new THREE.ConeGeometry(1.75, 1.35, 24);
    const tier1 = new THREE.Mesh(tier1Geo, foliageMat);
    tier1.position.y = -0.85;
    mainGroup.add(tier1);

    // Tier 2 (Middle)
    const tier2Geo = new THREE.ConeGeometry(1.4, 1.25, 24);
    const tier2 = new THREE.Mesh(tier2Geo, foliageMat);
    tier2.position.y = -0.15;
    mainGroup.add(tier2);

    // Tier 3 (Top)
    const tier3Geo = new THREE.ConeGeometry(1.0, 1.15, 24);
    const tier3 = new THREE.Mesh(tier3Geo, foliageMat);
    tier3.position.y = 0.55;
    mainGroup.add(tier3);

    // ── 3. Ornaments / Baubles (Red, Gold, Icy Blue) ──
    const baubleGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const redMat = new THREE.MeshStandardMaterial({
      color: 0xD42426,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x550000,
      emissiveIntensity: 0.25,
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xF8B229,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x443000,
      emissiveIntensity: 0.25,
    });
    const blueMat = new THREE.MeshStandardMaterial({
      color: 0x00E5FF,
      metalness: 0.8,
      roughness: 0.2,
    });

    const ornamentMaterials = [redMat, goldMat, blueMat];
    const ornamentGroup = new THREE.Group();

    // Place baubles spiraling up each tier
    const tiers = [
      { radius: 1.5, y: -1.2, count: 9 },
      { radius: 1.2, y: -0.5, count: 7 },
      { radius: 0.85, y: 0.2, count: 5 },
    ];

    let matIndex = 0;
    tiers.forEach((t) => {
      for (let i = 0; i < t.count; i++) {
        const angle = (i / t.count) * Math.PI * 2 + (t.y * 0.5);
        const bauble = new THREE.Mesh(baubleGeo, ornamentMaterials[matIndex % ornamentMaterials.length]);
        bauble.position.set(Math.cos(angle) * t.radius, t.y, Math.sin(angle) * t.radius);
        ornamentGroup.add(bauble);
        matIndex++;
      }
    });
    mainGroup.add(ornamentGroup);

    // ── 4. Golden Star Topper ──
    const starShape = new THREE.Shape();
    const starPoints = 5;
    const outerR = 0.45;
    const innerR = 0.2;
    for (let i = 0; i < starPoints * 2; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const angle = (i * Math.PI) / starPoints - Math.PI / 2;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) starShape.moveTo(x, y);
      else starShape.lineTo(x, y);
    }
    starShape.closePath();

    const starGeo = new THREE.ExtrudeGeometry(starShape, {
      depth: 0.08,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
    });
    const starMesh = new THREE.Mesh(starGeo, goldMat);
    starMesh.position.set(0, 1.45, 0);
    mainGroup.add(starMesh);

    // Star Glow Light
    const starLight = new THREE.PointLight(0xFFD700, 2.8, 6);
    starLight.position.set(0, 1.5, 0.4);
    scene.add(starLight);

    // ── 5. Twinkling Fairy Lights (Orbiting Sparkles) ──
    const lightCount = 45;
    const lightPositions = new Float32Array(lightCount * 3);
    for (let i = 0; i < lightCount; i++) {
      const prog = i / lightCount;
      const h = -1.2 + prog * 2.3;
      const r = (1 - prog * 0.65) * 1.6;
      const a = prog * Math.PI * 8; // spiral
      lightPositions[i * 3] = Math.cos(a) * r;
      lightPositions[i * 3 + 1] = h;
      lightPositions[i * 3 + 2] = Math.sin(a) * r;
    }
    const fairyGeo = new THREE.BufferGeometry();
    fairyGeo.setAttribute('position', new THREE.BufferAttribute(lightPositions, 3));
    const fairyMat = new THREE.PointsMaterial({
      color: 0xFFF3B0,
      size: 0.1,
      transparent: true,
      opacity: 0.9,
    });
    const fairyLights = new THREE.Points(fairyGeo, fairyMat);
    mainGroup.add(fairyLights);

    // ── 6. Falling Snowflakes ──
    const snowCount = 120;
    const snowPositions = new Float32Array(snowCount * 3);
    for (let i = 0; i < snowCount; i++) {
      snowPositions[i * 3] = (Math.random() - 0.5) * 6;
      snowPositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const snowGeo = new THREE.BufferGeometry();
    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3));
    const snowMat = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.06,
      transparent: true,
      opacity: 0.8,
    });
    const snowflakes = new THREE.Points(snowGeo, snowMat);
    scene.add(snowflakes);

    // ── 7. Lighting ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const redLight = new THREE.PointLight(0xD42426, 2.5, 10);
    redLight.position.set(-4, -1, 3);
    scene.add(redLight);

    const goldKeyLight = new THREE.DirectionalLight(0xFFF0D0, 2.0);
    goldKeyLight.position.set(5, 5, 5);
    scene.add(goldKeyLight);

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

      // Gentle tree festive rotation & tilt
      mainGroup.rotation.y = elapsedTime * 0.4 + targetX;
      mainGroup.rotation.x = -targetY * 0.5;

      // Rotate topper star independently
      starMesh.rotation.z = Math.sin(elapsedTime * 1.5) * 0.1;

      // Fairy lights pulse
      fairyMat.size = 0.08 + Math.sin(elapsedTime * 6) * 0.03;

      // Snowflakes falling animation
      const sPos = snowGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < snowCount; i++) {
        let y = sPos.getY(i) - 0.015;
        if (y < -3) y = 3;
        sPos.setY(i, y);
      }
      sPos.needsUpdate = true;

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

      trunkGeo.dispose();
      trunkMat.dispose();
      tier1Geo.dispose();
      tier2Geo.dispose();
      tier3Geo.dispose();
      foliageMat.dispose();
      baubleGeo.dispose();
      redMat.dispose();
      goldMat.dispose();
      blueMat.dispose();
      starGeo.dispose();
      fairyGeo.dispose();
      fairyMat.dispose();
      snowGeo.dispose();
      snowMat.dispose();

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
      aria-label="Interactive 3D Festive Christmas Tree"
    />
  );
}
