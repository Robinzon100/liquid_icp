import { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

import gsap from "gsap";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";


import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

//import{ fragment } from "./shaders/fragmentShader";
//import{ vertex } from "./shaders/vertexShader";


interface IThreeDIcon {
    scale?: number
    gltfModelPath: string,
}





const ThreeDIcon = ({ scale = .3, gltfModelPath}: IThreeDIcon) => {
    let postEnabled = false
    const [cursor,] = useState({ x: 0, y: 0 })




    useEffect(() => {
        init();
    }, []);





    const init = () => {
        // TODO: use leva instead of this
        const canvas = document.querySelector(".landing_canvas") as HTMLElement;
        const clock = new THREE.Clock();


        const sizes = {
            width: window.innerWidth * scale,
            height: window.innerWidth * scale
        }


        //============================ SCENE
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color('#020305');

        scene.fog = new THREE.Fog(0x000000, 10, 20);





        //============================ LIGHT
        const light = new THREE.DirectionalLight(0x1253FE, 5);
        light.position.set(0, 1, 0); //default; light shining from top
        light.castShadow = true; // default false
        scene.add(light);


        let pointLigtht1 = new THREE.PointLight(0xE05289, 10);
        pointLigtht1.position.set(10, 10, 10);
        pointLigtht1.castShadow = true
        scene.add(pointLigtht1)

        let pointLigtht2 = new THREE.PointLight(0x3357FA, 10);
        pointLigtht2.position.set(-10, 5, 0);
        pointLigtht2.castShadow = true
        scene.add(pointLigtht2)

        let pointLigtht3 = new THREE.PointLight(0x3357FA, 10);
        pointLigtht3.position.set(0, 5, 0);
        pointLigtht3.castShadow = true
        pointLigtht3.scale.set(10, 0, 10);

        scene.add(pointLigtht3)

        var lighth = new THREE.HemisphereLight(0xf6e86d, 0x404040, 15);
        scene.add(lighth);






        //============================ CAMERA
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.width, 0.01, 1000);
        camera.position.set(0, 0, 1);
        scene.add(camera)





        //============================ RENDERER
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: false, })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        renderer.setSize(sizes.width, sizes.height);




        //============================ ENV
        let envmapLoader = new THREE.PMREMGenerator(renderer)



        //============================ MESH AND GEOMETRY
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.3.6/');
        loader.setDRACOLoader(dracoLoader);





        new RGBELoader().setPath("/hdr_textures/").load("HDRI.hdr", (hdrmap: any) => {
            let envmap = envmapLoader.fromCubemap(hdrmap)
            // scene.background = hdrmap;
            // scene.environment = hdrmap;

            const roughnessMapTexture = new THREE.TextureLoader().load('/textures/Plane_roughness.png')
            const normalMapTexture = new THREE.TextureLoader().load('/textures/Plane_normal.png')
            const townMatterial = new THREE.MeshStandardMaterial({
                color: 0x000000,
                roughness: 0.31,
                normalMap: normalMapTexture,
                normalScale: new THREE.Vector2(0.8, 0.8),
                envMap: envmap.texture,
                envMapIntensity: 10,
                side: THREE.DoubleSide,
            });

            const logoMaterial = new THREE.MeshStandardMaterial({
                color: 0x000000,
                metalnessMap: roughnessMapTexture,
                roughness: 0.21,
                normalMap: normalMapTexture,
                normalScale: new THREE.Vector2(0.2, 0.2),
                emissive: 0x3357FA,
                emissiveIntensity: 0.005,
                envMap: envmap.texture,
                envMapIntensity: 10,
                side: THREE.DoubleSide,
            });

            loader.load(
                gltfModelPath,
                (gltf) => {
                    scene.add(gltf.scene);

                    scene.traverse((child: THREE.Object3D) => {
                        if ((child as THREE.Mesh).isMesh) {
                            (child as THREE.Mesh).material = logoMaterial;
                            (child as THREE.Mesh).castShadow = true;
                            (child as THREE.Mesh).receiveShadow = true;
                            gsap.to(child.children[0], {
                                x: 100,
                                duration: 10
                            })
                        }
                    })
                },
                (xhr) => {
                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },
                (error) => {
                    console.error('An error happened');
                    console.error(error);
                }
            );
        })






        //============================ POSTPROCESSING 
        let composer = new EffectComposer(renderer);
        let afterimagePass = new AfterimagePass();

        (afterimagePass as any).uniforms['damp'].value = 1
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(afterimagePass);





        //============================ RESIZE
        window.addEventListener("resize", () => {
            sizes.width = sizes.width;
            sizes.height = sizes.width;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            composer.setSize(sizes.width, sizes.width);
        })




        //============================  MOUSEMOVE EVENT
        window.addEventListener("mousemove", (e) => {
            cursor.x = (e.clientX / sizes.width) * 2.4 - 1;
            cursor.y = - (e.clientY / sizes.width) * 2.4 + 1;
        })


        const controls = new OrbitControls(camera, (canvas as HTMLElement));
        controls.enableDamping = true



        const animate = () => {
            controls.update();
            const elapsedTime = clock.getElapsedTime();
            renderer.clear();

            if (postEnabled) {
                composer.render();
            } else {
                renderer.render(scene, camera);
            }
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate()
        renderer.clear();
    }







    return (
        <>
            <div className="hero_landing_main">
                <canvas className="landing_canvas" />
            </div>
        </>
    )
}




export default ThreeDIcon
