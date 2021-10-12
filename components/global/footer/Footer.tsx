const Footer = () => {

    const socialsData = [
        {
            image: "/images/telegram.png",
            url: "https://www.youtube.com/watch?v=lIQrUZLyATo&list=PLinuJh6RfGPMLw5fB4nXZoUYz9oebv9Bo&index=178&ab_channel=El2546"
        },
        {
            image: "/images/discord.png",
            url: "https://careerkarma.com/blog/bold-text-html/"
        },
        {
            image: "/images/twitter.png",
            url: "https://twitter.com/LiquidICP"
        }

    ]


    return (
        <>
            <div className="footer">
                <div className="footer_container">
                    <div className="contact_us">
                        <h1 className="f-size-h8 f-weight-l">Contact us <br />
                            <a href="mailto:contact@icp-20.com" target="#">
                                <strong className="f-weight-bl">
                                    contact@icp-20.com
                                </strong>
                            </a>
                        </h1>

                    </div>
                    <div className="socials">
                        {socialsData.map((el, i) => (
                            <a href={el.url} target="_blank" key={i}>
                                <div className="social"
                                    style={{ backgroundImage: `url(${el.image})` }}
                                >

                                </div>
                            </a>

                        ))}
                    </div>



                    <div className="documentation">
                        <h1 className="f-size-h8 f-weight-l">Documentation <br />
                            <a href="#" target="_blank">
                                <strong className="f-weight-bl">
                                    GitBook
                                </strong>
                            </a>
                        </h1>
                    </div>
                </div>

                <div className="rights">

                    <h1 className="f-size-p3 f-weight-l">
                        2021 © icp-20.com All rights reserved
                    </h1>
                </div>

            </div>
        </>
    )
}

export default Footer