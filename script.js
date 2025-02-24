// Grab the container where we'll place the canvas
const container = document.getElementById('three-container');

// 1. CREATE SCENE
const scene = new THREE.Scene();

// 2. CREATE CAMERA
// PerspectiveCamera(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 40); // Move the camera back so we can see the object

// 3. CREATE RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
// Make sure the renderer covers the container's size
renderer.setSize(window.innerWidth, window.innerHeight);
// Append canvas to the container
container.appendChild(renderer.domElement);

// 4. ADD A LIGHT
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 20, 20);
scene.add(pointLight);

// 5. CREATE A GEOMETRY & MESH (Example: rotating torus)
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// 6. ANIMATION LOOP
function animate() {
  requestAnimationFrame(animate);

  // Rotate the torus
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  // Render the scene through the camera
  renderer.render(scene, camera);
}
animate();

// 7. HANDLE RESIZE
window.addEventListener('resize', () => {
  // Update camera aspect ratio and renderer size
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
