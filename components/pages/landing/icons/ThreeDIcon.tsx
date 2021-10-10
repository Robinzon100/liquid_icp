import { FC, useEffect } from 'react';
import { addGLFModel } from './utils/mesh.controller';
import { createScene } from './utils/scene.contoller';



import ColorBalls from 'components/lib/ColorBalls/ColorBalls';

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
                <ColorBalls
                    bgColor="var(--red)"
                    className="main_ball"
                    left="-7%"
                    top="18%"
                    width="16rem"
                    height="18rem"
                />
                
                 <ColorBalls
                    bgColor="var(--blue)"
                    className="main_ball"
                    left="-5%"
                    top="5%"
                    width="12rem"
                    height="12rem"
                />

                <ColorBalls
                    bgColor="var(--blue)"
                    className="main_ball"
                    left="95%"
                    top="18%"
                    width="15rem"
                    height="15rem"
                />
                <ColorBalls
                    bgColor="var(--red)"
                    className="main_ball"
                    left="95%"
                    top="5%"
                    width="16rem"
                    height="18rem"
                />



                <ColorBalls
                    bgColor="var(--white)"
                    className="main_ball"
                    left="-7%"
                    top="40%"
                    width="16rem"
                    height="16rem"
                />
                
                 <ColorBalls
                    bgColor="var(--blue)"
                    className="main_ball"
                    left="-5%"
                    top="55%"
                    width="18rem"
                    height="18rem"
                />

                <ColorBalls
                    bgColor="var(--blue)"
                    className="main_ball"
                    left="95%"
                    top="40%"
                    width="15rem"
                    height="15rem"
                />
                <ColorBalls
                    bgColor="var(--red)"
                    className="main_ball"
                    left="95%"
                    top="55%"
                    width="16rem"
                    height="18rem"
                />





                <ColorBalls
                    bgColor="var(--red)"
                    className="main_ball"
                    left="-7%"
                    top="73%"
                    width="16rem"
                    height="18rem"
                />
                
                 <ColorBalls
                    bgColor="var(--blue)"
                    className="main_ball"
                    left="-5%"
                    top="89%"
                    width="12rem"
                    height="12rem"
                />

                <ColorBalls
                    bgColor="var(--blue)"
                    className="main_ball"
                    left="95%"
                    top="89%"
                    width="15rem"
                    height="15rem"
                />
                <ColorBalls
                    bgColor="var(--white)"
                    className="main_ball"
                    left="95%"
                    top="75%"
                    width="16rem"
                    height="18rem"
                />






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
