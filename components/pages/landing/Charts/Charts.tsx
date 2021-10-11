

interface ChartsI {
    heading?:string,
    shares?:[],
    videoPath?:string
}


const Charts = ({heading,shares,videoPath}:ChartsI) => {
    return (
        <>
            <div className="chart">
                <div className="chart_container">
                    <div className="heading">
                        <h1 className="f-size-h1">
                            {heading}
                        </h1>
                    </div>


                    <div className="fund_distribution">
                            {shares?.map((el:any,i) => (
                            <div className="item" key={i}>
                                <div className="circle purple" style={{backgroundColor:`${el.color}`}}/>
                                <h1 className="f-size-p2">{el.paragraph}</h1>
                            </div>
                            ))}
                            

                    </div>

                    <div className="chart_video">
                        <video 
                         playsInline
                         autoPlay   
                         loop
                         muted
                        src={videoPath}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Charts