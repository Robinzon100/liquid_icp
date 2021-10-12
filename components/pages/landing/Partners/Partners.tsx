




const Partners = () => {

    const partnersData = [
        {
            image: "/images/chain_link.png",
            url:"#"
        },
        {
            image: "/images/polygon.png",
            url:"#"
        },
        {
            image: "/images/dfinity.png",
            url:"#"
        },
        {
            image: "/images/aragon.png",
            url:"#"
        }
    ]



    return (
        <>
            <div className="partners">

                <div className="heading">
                    <h1 className="f-size-h1 f-weight-bo">
                        Partners
                    </h1>
                </div>


                <div className="partners_container">
                    {partnersData.map((el, i) => (
                        <div className="partner"
                            key={i}>

                            <a href={el.url}>

                                <div className="img"
                                    style={{ backgroundImage: `url(${el.image})` }}
                                />
                            </a>

                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}

export default Partners