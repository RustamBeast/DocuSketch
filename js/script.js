// Rotate button
const rotateButton = document.querySelector('button.area__button');
rotateButton.addEventListener('click', rotate);

// Canvas
const width = window.innerWidth;
const height = window.innerHeight;
const canvas = document.querySelector('canvas.area');
canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

// Renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setClearColor(0x000000);

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 5000);
camera.position.set(0, 0, 1000);

// Light
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// First room object (rectangle form)
const geometryForRectangle = new THREE.PlaneGeometry(400, 200);
const materialForRectangle = new THREE.MeshBasicMaterial({color: 0x00ca00});
const meshOfRectangle = new THREE.Mesh(geometryForRectangle, materialForRectangle);
meshOfRectangle.position.x = -width / 4;
scene.add(meshOfRectangle);

// Second room object ("L" form)
const LShape = new THREE.Shape();
LShape.moveTo(0,150)
LShape.lineTo(75, 150);
LShape.lineTo(75, 0);
LShape.lineTo(150, 0);
LShape.lineTo(150, -75);
LShape.lineTo(0, -75);
const geometryForLShape = new THREE.ShapeGeometry(LShape);
const materialForLShape = new THREE.MeshBasicMaterial({color: 0x0000bb});
const meshForLShape = new THREE.Mesh(geometryForLShape, materialForLShape);
meshForLShape.position.x = width / 4;
scene.add(meshForLShape);

// Render the result
renderer.render(scene, camera);

// Rotate function
function rotate() {
    meshOfRectangle.rotateZ(-Math.PI / 2);
    meshForLShape.rotateZ(-Math.PI / 2);
    renderer.render(scene, camera);
}

