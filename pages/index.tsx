import Hero from "components/pages/landing/hero/Hero.landin"

import dynamic from "next/dynamic";
const ThreeDIcon = dynamic(() => import('../components/pages/landing/icons/ThreeDIcon'), { ssr: false });
const ColorDisplacement = dynamic(() => import("components/pages/ColorDisplacement/ColorDisplacement"), { ssr: false });
import TwoDIcons from "components/pages/landing/2dIcons/TwoDIcons";




const imagesArray = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1632338528496-877ff975d1a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
        title:"Bridge from Dfinity to EVM compatible blockchains"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1632338528496-877ff975d1a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
        title:"Participate in rich DeFi ecosystems"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1632338528496-877ff975d1a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
        title:"Get insurance on your ICP holdings"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1632338528496-877ff975d1a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
        title:"Lend, Borrow and earn 2x Rewards"
    }

]






const index = () => {
    return (
        <>
            <Hero />
            <TwoDIcons/>
            <ThreeDIcon />
            <ColorDisplacement imagesArray={imagesArray} />
        </>
    );
};

export default index;
