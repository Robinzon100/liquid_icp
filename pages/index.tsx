import Hero from "components/pages/landing/hero/Hero.landin"
import dynamic from "next/dynamic";
import { useEffect } from "react";


// COMPONENETS
const ThreeDIcon = dynamic(() => import('../components/pages/landing/icons/ThreeDIcon'), { ssr: false });
const ColorDisplacement = dynamic(() => import("components/pages/ColorDisplacement/ColorDisplacement"), { ssr: false });
import TwoDIcons from "components/pages/landing/2dIcons/TwoDIcons";


// OTHER IMPORTS
import ImagesArray from "components/pages/ColorDisplacement/json/ImagesArray.json"






const index = () => {



    useEffect(() => {
        window.addEventListener("load", () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            window.scrollTo(0, 0)
        })
    })


    return (
        <>
            <Hero />
            <TwoDIcons />
            <ThreeDIcon />
            <ColorDisplacement imagesArray={ImagesArray} />
        </>
    );
};

export default index;
