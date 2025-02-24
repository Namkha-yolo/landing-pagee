// Get the container element for the renderer
const container = document.getElementById('three-container');

// Create the scene and set a background color
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Set up the camera: PerspectiveCamera(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 10, 50); // Adjust position as needed

// Create the WebGL renderer and attach its canvas to the container
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Add some lighting to illuminate the model
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(50, 50, 50);
scene.add(directionalLight);

// Optional: Create a floor to ground the scene
const floorGeometry = new THREE.PlaneGeometry(200, 200);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
scene.add(floor);

// Load the "office pack.glb" model using GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load(
  // Provide the relative path or URL to your model file.
  // If the filename contains spaces, consider renaming it to "office_pack.glb" or URL-encoding the space.
  'office pack.glb',
  (gltf) => {
    const model = gltf.scene;
    // Optionally adjust model scale and position as needed
    model.scale.set(5, 5, 5);
    model.position.set(0, 0, 0);
    scene.add(model);
  },
  // Called while loading is progressing
  (xhr) => {
    console.log(`Model ${(xhr.loaded / xhr.total * 100).toFixed(2)}% loaded`);
  },
  // Called if an error occurs during loading
  (error) => {
    console.error('An error occurred while loading the model:', error);
  }
);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  // (Optional) Add any animations or interactions here
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

