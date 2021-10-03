// import Hero from "components/pages/landing/hero/Hero.landin";
import ThreeDIcon from "components/pages/landing/icons/SingleIcon";



const index = () => {
  return (
    <>
      {/* <Hero /> */}
      <ThreeDIcon gltfModelPath='/3d_models/circle_with_orbit.glb' />
      <ThreeDIcon gltfModelPath='/3d_models/hex.glb' />
    </>
  );
};

export default index;
