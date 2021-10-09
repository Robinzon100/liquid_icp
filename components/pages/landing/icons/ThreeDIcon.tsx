import { FC, useEffect } from 'react';
import { addGLFModel } from './utils/mesh.controller';
import { createScene } from './utils/scene.contoller';



const ThreeDIcon: FC = () => {
    const IconData = [
        {
            placeholder: "/images/circle_big.png",
            path: '/3d_models/circle_with_orbit.glb',
            heading: "ICP-20",
            paragraph:
                `1:1 bridged ICP token on erc-20 standard which can be traded or 
                used in various defi projects as collateral, staked to earn LP 
                rewards or staked for st-ICP (Liquid version of icp-20) which 
                enables user to earn Neuron staking rewards.`
        },
        {
            placeholder: "/images/circle_big.png",
            path: '/3d_models/2x.glb',
            heading: "ICP-20",
            paragraph:
                `1:1 bridged ICP token on erc-20 standard which can be traded or 
                used in various defi projects as collateral, staked to earn LP 
                rewards or staked for st-ICP (Liquid version of icp-20) which 
                enables user to earn Neuron staking rewards.`
        },
        {
            placeholder: "/images/circle_big.png",
            path: '/3d_models/cube.glb',
            heading: "ICP-20",
            paragraph:
                `1:1 bridged ICP token on erc-20 standard which can be traded or 
                used in various defi projects as collateral, staked to earn LP 
                rewards or staked for st-ICP (Liquid version of icp-20) which 
                enables user to earn Neuron staking rewards.`
        },

        // { placeholder: "/images/circle_inside_ball.png", path: '/3d_models/circle_with_orbit.glb', text: "Participate in rich DeFi ecosystems" },
        // { placeholder: "/images/cube.png", path: '/3d_models/cube.glb', text: "Get insurance on your ICP holdings" },
        // { placeholder: "/images/triangle.png", path: '/3d_models/2x.glb', text: "Lend, Borrow and earn 2x Rewards" }
    ]



    useEffect(() => {
        init()
    }, [])


    const init = () => {
        for (let i = 0; i < IconData.length; i++) {
            const { scene, renderer } = createScene(.5, `.three_d_icon_${i}`)
            addGLFModel(scene, renderer, IconData[i].path, `.three_d_icon_${i}`)
        }
    }

    return (
        <>
            <div className="icons_main">
                <div className="icons-container">
                    {IconData.map((icon, i) => (
                        <div className={`icon_container`} key={i}>

                            <div className="content">
                                <h1>{icon.heading}</h1>
                                <p>{icon.paragraph}</p>
                            </div>

                            <canvas className={`three_d_icon_${i} icon`} />
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default ThreeDIcon
