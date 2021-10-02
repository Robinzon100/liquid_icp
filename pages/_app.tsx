import type { AppProps } from "next/app";

import "../styles/main.scss";
// import HeadAndMeta from "components/global/headAndMeta/HeadAndMeta";


function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>

    {/* <HeadAndMeta
        title="Oxeni"
        description="cutting edge technology to create true technical beauty of the future"
        favIconImagePath="/svg/small_icon.svg"
        baseUrl="https://oxeni.dev/meta_images/og_image.png"
        ogTitle="🔵 Oxeni"
        ogDescription="cutting edge technology to create true technical beauty of the future"
        ogImagePath="/meta_images/og_image.png"
      /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
