import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
});

renderer.setPixelRatio(window.devicePixelRatio)


