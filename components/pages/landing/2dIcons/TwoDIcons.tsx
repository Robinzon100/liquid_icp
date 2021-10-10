



const TwoDIcons = () => {
    const TwoDIconData = [
        {
            twoDIcons: "/images/full_circle.png",
            heading: "Bridge from Dfinity to EVM compatible blockchains",
        },
        {
            twoDIcons: "/images/inner_empty_circle.png",
            heading: "Participate in rich DeFi ecosystems",
        },
        {
            twoDIcons: "/images/cube.png",
            heading: "Get insurance on your ICP holdings",
        },
        {
            twoDIcons: "/images/triangle.png",
            heading: "Lend, Borrow and earn 2x Rewards",
        }
    ]


    return (
        <>
            <div className="twoDIcons-container">
                <div className="twoDIcons-dark_container">
                    {TwoDIconData.map((icon, i) => (
                        <div className={`twoDIcon_container`} key={i}>

                            <div className="icon"
                                style={{ backgroundImage: `url(${icon.twoDIcons})` }}
                            />

                            <div className="twoDIcon_heading ">
                                <h1>{icon.heading}</h1>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default TwoDIcons