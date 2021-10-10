


interface ColorBallsI {
    bgColor?:string,
    left?:string,
    top?:string,
    className?:string
    width?:string
    height?:string
}


const ColorBalls = ({ bgColor, left,  top,width,height, className }:ColorBallsI) => {
    return (
        <>
            <div
               className={`${className}`}
                style={{
                    backgroundColor: bgColor,
                    left: left, 
                    top: top,
                    width:width,
                    height:height 
                }}>

            </div>
        </>
    )
}

export default ColorBalls