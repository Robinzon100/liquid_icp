import { CSSProperties, FC, MouseEventHandler } from 'react';


interface props {
    size: number,
    textColor?: string;
    className?: string,
    id?: string,
    disabled?: boolean,
    ctaMode?: boolean,
    style?: CSSProperties
    onClick?: MouseEventHandler,
    onHover?: MouseEventHandler
    bgColor?:string
    border?:string
    boxShadow?:string
}



const Button: FC<props> = ({
    size = 1,
    textColor = 'var(--black)',
    className,
    id,
    disabled = false,
    ctaMode = false,
    children,
    style,
    bgColor,
    border,
    boxShadow,
    // onClick,
    onHover }) => {



    return (
        <>
            <button
                className={`button ${className}`}
                id={`${id}`}
                // onClick={(e) => !disabled && onClick(e)}
                onMouseOver={onHover}
                style={style}>
                <div className={`button_container ${ctaMode && 'cta_mode' } ${className}`}>
                    {children}
                </div>
            </button>


            <style jsx>{`

                a{
                    color: var(--black)
                }
            
                .button{
                   color: ${textColor}; 
                    background: transparent;
                    border: none;
                    padding: 0;
                    user-select: none;
                    display: inline-block;
                    transition: all .3s ease;
                }
                


                .button_container{
                    pointer-events: ${disabled && 'none'};
                    cursor: ${disabled ? 'not-allowed' : 'pointer'};
                    /* padding: calc(${size} * .38vw) calc(${size} * 1.1vw); */
                    border: 1px solid #ffffff00;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    justify-content: center;
                    background:${bgColor};
                    border: ${border};
                    box-sizing: border-box;
                    box-shadow: ${boxShadow};
                    /* backdrop-filter: blur(28px); */
                    transition: all .2s ease;
                    user-select: none;
                }



                /* .button:focus { outline: none; }
                .button:hover .button_container{
                    backdrop-filter: blur(14px);
                    filter: saturation(20px);
                    transform: translateY(-3%);
                    box-shadow: 0px 45px 50px -10px rgba(0, 0, 0, .28), inset 0px 0px 14px #FFFFFF !important;
                } */

                /* .button:active .button_container{
                    transform: translateY(0%) !important;
                    box-shadow: 0px 18px 25px -10px rgba(0, 0, 0, .35), inset 0px 0px 14px #FFFFFF !important;
                } */



                .button a{
                    color: var(--black);
                }



                @media screen and (max-width: 1000px) {
                    .button_container {
                        border-radius: calc(${size} * .28vw);
                        padding: calc(${size} * .8vw) calc(${size} * 2vw);
                    }
                }
                
            
            `}</style>
        </>
    )
}


export default Button
