import { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

import gsap from "gsap";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";


import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';



import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

//import{ fragment } from "./shaders/fragmentShader";
//import{ vertex } from "./shaders/vertexShader";








const Hero = () => {
    let postEnabled = false
    const [cursor,] = useState({ x: 0, y: 0 })


    useEffect(() => {
        init();
    }, []);





    const init = () => {
        //! TODO: get rid of leva 
        const canvas = document.querySelector(".landing_canvas") as HTMLElement;


        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        const postProcessingParams = {
            exposure: 5,
            bloomStrength: 0.3,
            bloomThreshold: 0,
            bloomRadius: 1
        };



        //============================ RENDERER
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        renderer.setSize(sizes.width, sizes.height);



        //============================ SCENE
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#020305');

        scene.fog = new THREE.Fog(0x000000, 10, 20);




        //============================ CAMERA
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
        camera.position.set(0, -5, 0);
        camera.rotation.set(5, 0, 0)
        scene.add(camera)





        //============================ POSTPROCESSING 
        let composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);
        const renderScene = new RenderPass(scene, camera);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = postProcessingParams.bloomThreshold;
        bloomPass.strength = postProcessingParams.bloomStrength;
        bloomPass.radius = postProcessingParams.bloomRadius;

        composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);


        // const bokehPass = new BokehPass(scene, camera, {
        //     focus: 0.15,
        //     aperture: 0.025,
        //     maxblur: 0.01,

        //     width: window.innerWidth,
        //     height: window.innerHeight
        // });
        // composer.addPass(renderPass);
        // composer.addPass(bokehPass);









        //============================ LIGHT
        // const light = new THREE.DirectionalLight(0x1253FE, 5);
        // light.position.set(0, 1, 0); //default; light shining from top
        // light.castShadow = true; // default false
        // scene.add(light);


        // let pointLigtht1 = new THREE.PointLight(0xE05289, 10);
        // pointLigtht1.position.set(10, 10, 10);
        // pointLigtht1.castShadow = true
        // scene.add(pointLigtht1)

        // let pointLigtht2 = new THREE.PointLight(0x3357FA, 10);
        // pointLigtht2.position.set(-10, 5, 0);
        // pointLigtht2.castShadow = true
        // scene.add(pointLigtht2)

        // let pointLigtht3 = new THREE.PointLight(0x3357FA, 10);
        // pointLigtht3.position.set(0, 5, 0);
        // pointLigtht3.castShadow = true
        // pointLigtht3.scale.set(10, 0, 10);

        // scene.add(pointLigtht3)

        var lighth = new THREE.HemisphereLight(0xf6e86d, 0x404040, 15);
        scene.add(lighth);









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

            const roughnessMapTexture = new THREE.TextureLoader().load('/textures/rought.png')
            const normalMapTexture = new THREE.TextureLoader().load('/textures/Plane_normal.png')
            const townMatterial = new THREE.MeshStandardMaterial({
                color: 0x000000,
                // roughnessMap: roughnessMapTexture,
                roughness: 0.31,
                normalMap: normalMapTexture,
                normalScale: new THREE.Vector2(0.8, 0.8),
                envMap: envmap.texture,
                envMapIntensity: 10,
                side: THREE.DoubleSide,
            });

            const logoMaterial = new THREE.MeshStandardMaterial({
                color: 0x000000,
                // roughnessMap: roughnessMapTexture,
                roughness: 0,
                // normalMap: normalMapTexture,
                // normalScale: new THREE.Vector2(0.2, 0.2),
                emissive: 0x3357FA,
                emissiveIntensity: 0.005,
                envMap: envmap.texture,
                envMapIntensity: 10,
                side: THREE.DoubleSide,
            });

            loader.load(
                '/3d_models/test_test2.glb',
                (gltf) => {
                    scene.add(gltf.scene);


                    gltf.scene.traverse((child: THREE.Object3D) => {
                        if ((child as THREE.Mesh).isMesh) {
                            (child as THREE.Mesh).material = townMatterial;
                            (child as THREE.Mesh).castShadow = true;
                            (child as THREE.Mesh).receiveShadow = true;
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

            loader.load(
                '/3d_models/logo.glb',
                (gltf) => {
                    scene.add(gltf.scene);
                    gltf.scene.position.set(0, 3, 0);
                    gltf.scene.scale.set(2, 2, 2);


                    gltf.scene.traverse((child: THREE.Object3D) => {
                        if ((child as THREE.Mesh).isMesh) {
                            (child as THREE.Mesh).material = logoMaterial;
                            (child as THREE.Mesh).castShadow = true;
                            (child as THREE.Mesh).receiveShadow = true;
                            console.log(child);
                            
                            
                            gsap.to(child.rotation, {
                                y: 10,
                                duration: 10,
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








        // const glitchPass = new GlitchPass();
        // composer.addPass(glitchPass);





        //============================ RESIZE
        window.addEventListener("resize", () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(sizes.width, sizes.height);
            composer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            composer.setSize(window.innerWidth, window.innerHeight);
        })




        //============================  MOUSEMOVE EVENT
        window.addEventListener("mousemove", (e) => {
            cursor.x = (e.clientX / window.innerWidth) * 2.4 - 1;
            cursor.y = - (e.clientY / window.innerHeight) * 2.4 + 1;
        })


        const controls = new OrbitControls(camera, (canvas as HTMLElement));
        controls.enableDamping = true



        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            composer.render();

            // renderer.clear();
            // const elapsedTime = clock.getElapsedTime();
            // renderer.render(scene, camera);
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




export default Hero
