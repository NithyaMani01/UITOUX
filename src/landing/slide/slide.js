import React from 'react';
import shopImage from "../../source-images/slide-1.jpeg"
import slideStyle from "./slide.module.css"
import Carousel from "react-material-ui-carousel";

const Slide = () => {

    const sliderContent = [
        {
            header: "When Buying Parts With Installation",
            subHeader: "Installation of parts in the services of our partners",
            offer: "30% OFF",
            content: <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={shopImage} width={"1250px"} alt="car" />
            </div>

        },
        {
            header: "When Buying Parts With Installation",
            subHeader: "Installation of parts in the services of our partners",
            offer: "30% OFF",
            content: <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={shopImage} width={"1250px"} alt="car" />
            </div>

        },
        {
            header: "When Buying Parts With Installation",
            subHeader: "Installation of parts in the services of our partners",
            offer: "30% OFF",
            content: <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={shopImage} width={"1250px"} alt="car" />
            </div>

        },

    ]

    return (
        <div>

            <Carousel
                activeIndicatorIconButtonProps={{
                    style: {
                        color: "#00C86F"
                    }
                }}
            >
                {sliderContent.map((item, index) => (
                    <div key={index} className={slideStyle.mainDiv} style={{ position: 'relative', width: '100%' }}>
                        <div className={slideStyle.floatingContent}>
                            {item.offer && <span className={slideStyle.offerSpan}>{item.offer}</span>}
                            <h2 className={slideStyle.heading}>{item.header}</h2>
                            {item.subHeader && <p className={slideStyle.subHeading}>{item.subHeader}</p>}
                            <button className={slideStyle.button}>Shop Now</button>
                        </div>

                        <div style={{ width: '100%' }}>
                            {item.content}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
export default Slide