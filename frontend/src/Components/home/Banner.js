import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "../home/banner.css";

const data = [
    "https://www.viralspices.com/wp-content/uploads/2018/05/viralspices-productbanner-01.jpg",
    "https://thumbs.dreamstime.com/z/variety-aromatic-herbs-spices-displayed-wooden-surface-representing-flavorful-essence-indian-cuisine-high-quality-326623967.jpg?w=992",
    "https://assets.zeezest.com/blogs/PROD_Kutch-karigar-Banner_1635261824492_thumb_1200.jpeg?w=1200&q=75&fm=webp",
    "https://www.gujarattourism.com/content/dam/gujrattourism/images/july/Terracotta-banner-1.jpg"
]

// console.log(data);

const Banner = () => {
    return (
        <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 100,
                        marginTop: -22,
                        height: "44px",
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default Banner;
