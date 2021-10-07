import * as THREE from 'three';
import {gsap} from "gsap"



export const createScene = (scale: number, elementQueryString: string) => {
    let mouse = {x:0,y:0}
    const canvas = document.querySelector(elementQueryString) as HTMLElement;
    // const clock = new THREE.Clock();


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
    camera.position.set(0, 0, .7);
    scene.add(camera)





    //============================ RENDERER
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: false, })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setSize(sizes.width, sizes.height);




    //============================ RESIZE
    window.addEventListener("resize", () => {
        // if (window.innerWidth > 400) {
        //     sizes.width = window.innerWidth * scale;
        //     sizes.height = window.innerWidth * scale;

        // }

        // sizes.width = sizes.width;
        // sizes.height = sizes.width;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    })




    // const controls = new OrbitControls(camera, (canvas as HTMLElement));
    // controls.enableDamping = true


     //  MOUSEMOVE EVENT
     window.addEventListener("mousemove", (e) => {
        mouse.x = (e.clientX / sizes.width) * 1.2 - 1;
        mouse.y = - (e.clientY / sizes.height) * 1.2 + 1;
    })


    const animate = () => {
        // controls.update();

        if(scene.children) {
        const el = scene.children.find(el => el.type == "Group" );
            if (el) {
                if(window.innerWidth < 550) {
                    el!.rotation.y += 0.01
                }else {
                    gsap.to(el!.rotation, { y: mouse.x });
                    gsap.to(el!.rotation, { x: mouse.y });
                }
            }

            
        }

        
        
        
        renderer.clear();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate()
    renderer.clear();


    return { scene, camera, renderer };
}