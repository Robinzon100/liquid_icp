




const Charts = () => {
    return (
        <>
            <div className="chart">
                <div className="chart_container">
                    <div className="heading">
                        <h1 className="f-size-h1 f-weight-bo">
                            Use of Funds from IDO
                        </h1>
                    </div>


                    <div className="fund_distribution">
                        <div className="item" >
                            <div className="circle purple" />
                            <h1 className="f-size-p3">60% - IDO</h1>
                        </div>

                        <div className="item" >
                            <div className="circle blue" />
                            <h1 className="f-size-p3">25% - delvelopment &
                                <br />marketing reserves
                            </h1>
                        </div>
                        <div className="item" >
                            <div className="circle red" />
                            <h1 className="f-size-p3">15% - team & <br />
                                advisors
                            </h1>
                        </div>



                    </div>

                    <div className="chart_video">
                        <video
                            playsInline
                            autoPlay
                            loop
                            muted
                            src="/video/chart_funds.mp4" />
                    </div>
                </div>









                <div className="chart_container">
                    <div className="heading">
                        <h1 className="f-size-h1 f-weight-bo">
                            Token Distribution
                        </h1>
                    </div>


                    <div className="fund_distribution">
                        <div className="item" >
                            <div className="circle purple" />
                            <h1 className="f-size-p3">60% - IDO</h1>
                        </div>

                        <div className="item" >
                            <div className="circle blue" />
                            <h1 className="f-size-p3">25% - delvelopment &
                                <br />marketing reserves
                            </h1>
                        </div>
                        <div className="item" >
                            <div className="circle red" />
                            <h1 className="f-size-p3">15% - team & <br />
                                advisors
                            </h1>
                        </div>



                    </div>

                    <div className="chart_video">
                        <video
                            playsInline
                            autoPlay
                            loop
                            muted
                            src="/video/chart_dist.mp4" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Charts