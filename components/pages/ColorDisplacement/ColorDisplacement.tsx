//@ts-ignore
import { Curtains, Plane, RenderTarget, ShaderPass } from 'curtainsjs';
import { useEffect } from 'react';
import { vertex } from "./shaders/vertex";
import { fragment, rgbFs, blurFs } from "./shaders/fragment";




const ColorDisplacement = ({ imagesArray }) => {


    useEffect(() => {
        init()
    }, [])

    const init = () => {
        let scrollEffect = 0;

        const curtains = new Curtains({
            container: "canvas",
            antialias: false,
            pixelRatio: Math.min(1.5, window.devicePixelRatio)
        })

        curtains.onRender(() => {
            scrollEffect = curtains.lerp(scrollEffect, 0, 0.08);
        }).onScroll(() => {
            const delta = curtains.getScrollDeltas();

            delta.y = -delta.y;

            // threshold
            if (delta.y > 40) {
                delta.y = 40;
            }
            else if (delta.y < -40) {
                delta.y = -40;
            }

            if (Math.abs(delta.y) > Math.abs(scrollEffect)) {
                scrollEffect = curtains.lerp(scrollEffect, delta.y, 0.8);
            }

        }).onError(() => {
            document.body.classList.add("no-curtains");
        }).onContextLost(() => {
            curtains.restoreContext();
        });


        const planeElements = document.getElementsByClassName("plane");
        const rgbTarget = new RenderTarget(curtains);




        for (let i = 0; i < planeElements.length; i++) {
            const plane = new Plane(curtains, planeElements[i], {
                vertexShader: vertex(),
                fragmentShader: fragment(),
                texturesOptions: {
                    minFilter: curtains.gl.LINEAR_MIPMAP_NEAREST
                }
            });

            (plane as Plane)._setDocumentSizes();
            (plane as Plane)._applyWorldPositions();



            plane.setRenderTarget(rgbTarget);
        }



        const rgbPass = new ShaderPass(curtains, {
            fragmentShader: rgbFs(),
            renderTarget: rgbTarget,
            uniforms: {
                scrollEffect: {
                    name: "uScrollEffect",
                    type: "1f",
                    value: 0,
                },
            },
        });

        rgbPass.onRender(() => {
            rgbPass.uniforms.scrollEffect.value = scrollEffect;
        });





        let curtainsBBox = curtains.getBoundingRect();

        const blurPass = new ShaderPass(curtains, {
            fragmentShader: blurFs(),
            uniforms: {
                scrollEffect: {
                    name: "uScrollEffect",
                    type: "1f",
                    value: 0,
                },
                resolution: {
                    name: "uResolution",
                    type: "2f",
                    value: [curtainsBBox.width, curtainsBBox.height],
                },
            },
        });

        blurPass.onRender(() => {
            // update the uniform
            blurPass.uniforms.scrollEffect.value = scrollEffect;
        }).onAfterResize(() => {
            curtainsBBox = curtains.getBoundingRect();
            blurPass.uniforms.resolution.value = [curtainsBBox.width, curtainsBBox.height];
        });
    }







    return (
        <>
            <div id="page-wrap">
                <div id="canvas"></div>

                <div id="content">

                    <div id="planes">
                        {imagesArray.map(el => (
                            <div key={el.id} className="plane-wrapper">
                                <div className="plane-inner">
                                    <div className="plane">
                                        <img src={el.image} crossOrigin="" data-sampler="planeTexture" alt="pic" />
                                    </div>
                                    <h1 className="displacement_title">{el.title}</h1>
                                </div>
                            </div>
                        ))}


                    </div>


                </div>
            </div>

        </>
    )
}

export default ColorDisplacement;