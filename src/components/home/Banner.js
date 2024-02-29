import React from 'react'
import Slider from 'react-slick';
import { bannerImgEight, bannerImgEleven, bannerImgFive, bannerImgFour, bannerImgNine, bannerImgOne, bannerImgSeven, bannerImgSix, bannerImgTen, bannerImgThree, bannerImgTwelve, bannerImgTwo } from '../../assets';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Banner = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="absolute top-1/4 right-6 transform -translate-y-1/4 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer z-10" onClick={onClick}>
                <IoIosArrowForward className="text-white text-2xl" />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="absolute top-1/4 left-6 transform -translate-y-1/4 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer z-10" onClick={onClick}>
                <IoIosArrowBack className="text-white text-2xl" />
            </div>
        );
    };
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={bannerImgEleven}></img>
                    </div>
                    <div>
                        <img src={bannerImgOne}></img>
                    </div>
                
                    <div>
                        <img src={bannerImgThree}></img>
                    </div>
                    <div>
                        <img src={bannerImgEight}></img>
                    </div>
                    <div>
                        <img src={bannerImgSeven}></img>
                    </div>
                    <div>
                        <img src={bannerImgFive}></img>
                    </div>
                    <div>
                        <img src={bannerImgSix}></img>
                    </div>
                    <div>
                        <img src={bannerImgFour}></img>
                    </div>
                    <div>
                        <img src={bannerImgNine}></img>
                    </div>
                    <div>
                        <img src={bannerImgTen}></img>
                    </div>
                    <div>
                        <img src={bannerImgTwo}></img>
                    </div>
                    <div>
                        <img src={bannerImgTwelve}></img>
                    </div>
                </Slider>
            </div>
        );
    
}

export default Banner
