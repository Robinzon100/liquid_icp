import { FC, useEffect } from 'react';
import { addGLFModel } from './utils/mesh.controller';
import { createScene } from './utils/scene.contoller';



const ThreeDIcon: FC = () => {
    const IconData = [
        { placeholder: "/images/circle.png", path: '/3d_models/circle.glb', text: "Bridge from Dfinity to EVM compatible blockchains" },
        { placeholder: "/images/circle_inside_ball.png", path: '/3d_models/circle_with_orbit.glb', text: "Participate in rich DeFi ecosystems" },
        { placeholder: "/images/cube.png", path: '/3d_models/cube.glb', text: "Get insurance on your ICP holdings" },
        { placeholder: "/images/triangle.png", path: '/3d_models/2x.glb', text: "Lend, Borrow and earn 2x Rewards" }
    ]



    useEffect(() => {
        init()
    }, [])


    const init = () => {
        for (let i = 0; i < IconData.length; i++) {
            let { scene, renderer } = createScene(.2, `.three_d_icon_${i}`)
            addGLFModel(scene, renderer, IconData[i].path, `.three_d_icon_${i}`)
        }
    }

    return (
        <>
            <div className="icons_container">
                <div className="dark-container">
                    {IconData.map((icon, i) => (
                        <div className="icon_container" key={i}>

                            <canvas  className={`three_d_icon_${i} icon`} 
                                // style={{backgroundImage:`url(${icon.placeholder})`,
                                // backgroundRepeat:"none",
                                // backgroundSize:"cover"}} 
                            />

                            <h1 className="heading">{icon.text}</h1>

                        </div>
                    ))}
                </div>
                    

            </div>
        </>
    )
}

export default ThreeDIcon
