import Button from "components/lib/button/Button"
import Link from "next/link"
import { gsap } from "gsap"
import { useEffect } from "react";


const Navigation = () => {
    const tl = gsap.timeline();

    
    useEffect(() => {

        //HAMBURGER ANIMATION
        // tl.to(".hamburger .inner:nth-child(1)",{
        //     rotate:"45deg",
        //     top:10,
        //     scale:0.1,
        //     transformOrigin:"50% 50%",
        //     duration:.2,
        //     ease:"sine.in"
        // },"-=1").to(".hamburger .inner:nth-child(2)",{
        //     right:-70,
        //     duration:.7,
        // }).to(".hamburger .inner:nth-child(3)",{
        //     rotate:"-45deg",
        //     top:-10,
        //     duration:.7,
        //     ease:"sine.in"
        // },"-=1")
        
        
       // NAVIGATION ANIMATION 
        tl.to(".item", {
            duration: .3,
            // ease: "power2.out",
            y: "280px",
            opacity: 1
        }).to(".links", {
            duration:.3,
            y:0,
            opacity:1,
            stagger: {
                each: 0.05,
            }
        }).reverse()

    })



    const OnToggle = () => {
        tl.reversed(!tl.reversed())
    }

    return (
        <>
            <header className="navigation">
                <div className="navigation_container">

                    <div className="navigation_items">
                        <div className="logo" />

                        <ul className="item">
                            <li className="links">
                                <Link href="#" passHref>
                                    <h1 className="f-size-p2">Tokenomics</h1>
                                </Link>

                            </li>
                            <li className="links">
                                <Link href="#" passHref>
                                    <h1 className="f-size-p2">Road Map</h1>
                                </Link>

                            </li>
                            <li className="links">
                                <Link href="#">
                                    <h1 className="f-size-p2">Team</h1>
                                </Link>
                            </li>
                        </ul>



                        <Button
                         size={1.2}
                            className="btn btn_white navigation_btn">
                            <h4 className="f-size-p3 f-weight-r">
                                Enter App
                            </h4>


                            <h5 className="f-size-p8">(coming soon)</h5>


                        </Button>

                        <div className="hamburger"
                            onClick={() => OnToggle()}>
                            <div className="inner"></div>
                            <div className="inner"></div>
                            <div className="inner"></div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Navigation