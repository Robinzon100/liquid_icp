// import Hero from "components/pages/landing/hero/Hero.landin";
import Hero from "components/pages/landing/hero/Hero.landin";
import ThreeDIcon from "components/pages/landing/icons/SingleIcon";
import ColorDisplacement from "components/pages/ColorDisplacement/ColorDisplacement";

const imagesArray = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1632338528496-877ff975d1a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1632613752851-9170e34f2479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1632613752851-9170e34f2479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1632613752851-9170e34f2479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    }
    ,
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1632613752851-9170e34f2479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    }
    ,
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1632613752851-9170e34f2479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    }

]

const index = () => {
  return (
    <>
      <Hero />
      {/* <ColorDisplacement imagesArray={imagesArray}/> */}
      {/* <ThreeDIcon gltfModelPath='/3d_models/circle_with_orbit.glb' /> */}
    </>
  );
};

export default index;
