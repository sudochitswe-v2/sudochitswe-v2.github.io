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
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Brutalism = aliased, raw edges
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(1); // Pixelated look
    container.appendChild(renderer.domElement);

    // Group to hold the meshes
    const group = new THREE.Group();
    scene.add(group);

    const isDark = resolvedTheme === 'dark';
    const lineColor = isDark ? 0xFFFFFF : 0x000000;
    
    // Geometry: Raw Icosahedron
    const geometry = new THREE.IcosahedronGeometry(1.8, 0);
    
    // Edges geometry for thick visible borders
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      linewidth: 3,
    });
    const wireframe = new THREE.LineSegments(edgesGeometry, lineMaterial);
    group.add(wireframe);

    // Solid inner geometry (white/black depending on theme)
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x000000 : 0xFFFFFF,
      polygonOffset: true,
      polygonOffsetFactor: 1, 
      polygonOffsetUnits: 1
    });
    const solidMesh = new THREE.Mesh(geometry, innerMaterial);
    group.add(solidMesh);

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

      // Hard snapping rotation (brutalist, no smooth lerp)
      targetX = mouseX;
      targetY = mouseY;

      group.rotation.x += 0.01;
      group.rotation.y += 0.015;

      group.rotation.y += (targetX - group.rotation.y) * 0.1;
      group.rotation.x += (-targetY - group.rotation.x) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
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

      geometry.dispose();
      edgesGeometry.dispose();
      lineMaterial.dispose();
      innerMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] cursor-crosshair border-4 border-foreground shadow-[12px_12px_0px_0px]"
      aria-label="Interactive 3D Wireframe"
    />
  );
}
