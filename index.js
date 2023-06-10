import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// init

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10 );

const orbit = new OrbitControls(camera, renderer.domElement);


camera.position.z = (5);
orbit.update();

const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
const material = new THREE.MeshNormalMaterial();


const loader = new GLTFLoader();

loader.load('https://drive.google.com/file/d/1UPNtbh5zLXooY4N86UKknisy4f19FSGM/view?usp=sharing', function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  // 進行其他操作或設定模型位置、材質等
}, undefined, function (error) {
  console.error(error);
});



// const loader = new GLTFLoader();

// loader.load( 'path/to/model.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

const mesh = new THREE.Mesh( geometry, material ); 
scene.add( mesh );

animation

function animation( time ) {

	mesh.rotation.x = time / 1000;
	mesh.rotation.y = time / 1000;

  renderer.render( scene, camera );
}

renderer.setAnimationLoop(animation);


