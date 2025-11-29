import * as THREE from 'three';

export function create3DObject(geometryType, materialOptions) {
  let geometry;
  switch (geometryType) {
    case 'box':
      geometry = new THREE.BoxGeometry();
      break;
    case 'sphere':
      geometry = new THREE.SphereGeometry();
      break;
    case 'cylinder':
      geometry = new THREE.CylinderGeometry();
      break;
    default:
      geometry = new THREE.BoxGeometry();
  }

  const material = new THREE.MeshStandardMaterial(materialOptions);
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

export function animateMesh(mesh, scene, camera, renderer) {
  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

export function setupLighting(scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);
}