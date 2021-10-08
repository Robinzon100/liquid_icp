import { FC, useEffect } from 'react';
import { addGLFModel } from './utils/mesh.controller';
import { createScene } from './utils/scene.contoller';
import ReactHtmlParser from 'react-html-parser';
 


const ThreeDIcon: FC = () => {
    const IconData = [
        { placeholder: "/images/circle_big.png", path: '/3d_models/circle.glb', 
        text: "<h1>ICP-20</h1> <p>1:1 bridged ICP token on erc-20 standard which can be traded or used in various defi projects as collateral, staked to earn</p> </br></br> <p>LP rewards or staked for st-ICP (Liquid version of icp-20) which enables user to earn Neuron staking rewards.</p> ", },

        // { placeholder: "/images/circle_inside_ball.png", path: '/3d_models/circle_with_orbit.glb', text: "Participate in rich DeFi ecosystems" },
        // { placeholder: "/images/cube.png", path: '/3d_models/cube.glb', text: "Get insurance on your ICP holdings" },
        // { placeholder: "/images/triangle.png", path: '/3d_models/2x.glb', text: "Lend, Borrow and earn 2x Rewards" }
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
                            
                            <div className="main_heading">

                                {ReactHtmlParser(icon.text)}

                            </div>

                            <canvas className={`three_d_icon_${i} icon`}
                            // style={{backgroundImage:`url(${icon.placeholder})`,
                            // backgroundRepeat:"none",
                            // backgroundSize:"cover"}} 
                            />


                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default ThreeDIcon
