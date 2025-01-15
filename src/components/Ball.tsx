import { useEffect } from 'react';
import * as THREE from 'three';

const Ball = () => {
    useEffect(() => {
        // Scéna
        const scene = new THREE.Scene();

        // Kamera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.querySelector('#scene-container')?.appendChild(renderer.domElement);
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5,5,5);
        scene.add(pointLight);


        // Koule
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xffff00, metalness: 0.1, roughness: 0.2 });
        const sphere = new THREE.Mesh(geometry, material);
        
        sphere.position.x = 0;
        sphere.position.y = 0;
        sphere.position.z = 0;

        
        scene.add(sphere);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        
    }, []);

    return <div id="scene-container" style={{ width: '100%', height: '100vh' }} />
}

export default Ball;