import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create geometric shapes
    const geometries = [
      new THREE.TetrahedronGeometry(1),
      new THREE.OctahedronGeometry(1),
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.ConeGeometry(1, 2, 4),
      new THREE.TorusGeometry(1, 0.4, 8, 16)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0xff0000, 
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xff0000, 
        wireframe: false, 
        transparent: true, 
        opacity: 0.3 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xff0000, 
        wireframe: false, 
        transparent: true, 
        opacity: 0.2 
      })
    ];

    const shapes = [];
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 50;
      mesh.position.y = (Math.random() - 0.5) * 50;
      mesh.position.z = (Math.random() - 0.5) * 50;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      mesh.userData.rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      };

      scene.add(mesh);
      shapes.push(mesh);
    }

    // Grid floor
    const gridHelper = new THREE.GridHelper(100, 50, 0xff0000, 0x330000);
    gridHelper.position.y = -20;
    scene.add(gridHelper);

    // Animation loop
    let time = 0;
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Rotate shapes
      shapes.forEach(shape => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
      });

      // Camera movement
      camera.position.x = Math.sin(time * 0.1) * 5;
      camera.position.y = Math.cos(time * 0.15) * 3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      // Dispose geometries and materials
      shapes.forEach(shape => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (containerRef.current && rendererRef.current.domElement) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
