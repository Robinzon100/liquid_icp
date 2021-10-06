import { FC, useEffect } from 'react';
import { addGLFModel } from './utils/mesh.controller';
import { createScene } from './utils/scene.contoller';


const ThreeDIcon: FC = () => {
    const gltfModelPaths = [
        '/3d_models/hex.glb',
        '/3d_models/circle_with_orbit.glb',
        '/3d_models/logo.glb',
        '/3d_models/hex.glb'
    ]



    useEffect(() => {
        init()
    }, [])


    const init = () => {
        for (let i = 0; i < gltfModelPaths.length; i++) {
            let { scene, renderer } = createScene(.2, `.three_d_icon_${i}`)
            addGLFModel(scene, renderer, gltfModelPaths[i])
        }
    }

    return (
        <>
            <div className="icons_container">
                {gltfModelPaths.map((path, i) => (
                    <canvas key={path} className={`three_d_icon_${i}`}></canvas>
                ))}
            </div>
        </>
    )
}

export default ThreeDIcon
