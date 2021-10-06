// import Hero from "components/pages/landing/hero/Hero.landin";
// import Hero from "components/pages/landing/hero/Hero.landin";
// import ThreeDIcon from "components/pages/landing/icons/ThreeDIcon";
import dynamic from "next/dynamic";
const ThreeDIcon = dynamic(() => import('../components/pages/landing/icons/ThreeDIcon'), { ssr: false });



const index = () => {
  return (
    <>
      {/* <Hero /> */}
      <ThreeDIcon />
    </>
  );
};

export default index;
