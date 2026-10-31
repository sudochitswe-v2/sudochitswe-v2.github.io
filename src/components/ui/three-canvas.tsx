'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const isDark = resolvedTheme === 'dark';
    const primaryColor = isDark ? 0xF5F5F0 : 0x1A1A1A;
    const accentColor = isDark ? 0xFFE600 : 0xFF2D6B; // Electric yellow in dark, hot pink in light
    const secondaryColor = isDark ? 0x00FF66 : 0x2196F3; // Neon green in dark, blue in light

    // ── 1. Outer Brutalist Wireframe Cage (Expands well beyond the profile photo) ──
    const outerGeometry = new THREE.IcosahedronGeometry(2.7, 0);
    const outerEdges = new THREE.EdgesGeometry(outerGeometry);
    const outerLineMaterial = new THREE.LineBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.85,
    });
    const outerWireframe = new THREE.LineSegments(outerEdges, outerLineMaterial);
    mainGroup.add(outerWireframe);

    // Subtle translucent faces for depth
    const facetMaterial = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: isDark ? 0.05 : 0.03,
      side: THREE.DoubleSide,
    });
    const outerMesh = new THREE.Mesh(outerGeometry, facetMaterial);
    mainGroup.add(outerMesh);

    // ── 2. Corner Node Markers (Brutalist cubes at each icosahedron vertex) ──
    const vertexPositions = outerGeometry.attributes.position;
    const cubeGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: accentColor,
    });
    const nodeGroup = new THREE.Group();
    const uniqueVertices = new Set<string>();

    for (let i = 0; i < vertexPositions.count; i++) {
      const x = Number(vertexPositions.getX(i).toFixed(3));
      const y = Number(vertexPositions.getY(i).toFixed(3));
      const z = Number(vertexPositions.getZ(i).toFixed(3));
      const key = `${x},${y},${z}`;
      if (!uniqueVertices.has(key)) {
        uniqueVertices.add(key);
        const node = new THREE.Mesh(cubeGeo, cubeMat);
        node.position.set(x, y, z);
        nodeGroup.add(node);
      }
    }
    mainGroup.add(nodeGroup);

    // ── 3. Inner Counter-Rotating Cage ──
    const innerGroup = new THREE.Group();
    mainGroup.add(innerGroup);

    const innerGeometry = new THREE.OctahedronGeometry(2.2, 0);
    const innerEdges = new THREE.EdgesGeometry(innerGeometry);
    const innerLineMaterial = new THREE.LineBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.65,
    });
    const innerWireframe = new THREE.LineSegments(innerEdges, innerLineMaterial);
    innerGroup.add(innerWireframe);

    // ── 4. Floating Orbiting Particles ──
    const particleCount = 60;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 1.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: secondaryColor,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particleSystem);

    // Mouse interaction tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Primary group rotation
      mainGroup.rotation.x += 0.006;
      mainGroup.rotation.y += 0.008;

      // Counter-rotation on inner cage
      innerGroup.rotation.x -= 0.01;
      innerGroup.rotation.z += 0.008;

      // Mouse interactive tilt
      mainGroup.rotation.y += (targetX - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (-targetY - mainGroup.rotation.x) * 0.05;

      particleSystem.rotation.y -= 0.002;

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

      outerGeometry.dispose();
      outerEdges.dispose();
      outerLineMaterial.dispose();
      facetMaterial.dispose();

      cubeGeo.dispose();
      cubeMat.dispose();

      innerGeometry.dispose();
      innerEdges.dispose();
      innerLineMaterial.dispose();

      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="relative h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px] cursor-crosshair pointer-events-auto"
      aria-label="Interactive 3D Wireframe"
    />
  );
}
