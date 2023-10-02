import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../assets/img/home1/banner1.jpg';
import slide2 from '../../assets/img/home1/banner2.jpg';
import slide3 from '../../assets/img/home1/banner3.jpg';

import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper";


const HeroOne = () => {

    return (
        <section className="hero-wrapper hero-1">
        <Swiper navigation={true} modules={[Navigation, Autoplay]} 
         autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        
        loop>
            <SwiperSlide className=" bg-cover img-resp" style={{backgroundImage: `url(${slide1})`}}>
            <div className="overlay-black-trnsprt"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ps-md-5 pe-md-5 col-xxl-12 col-lg-12 col-md-8 col-sm-12">
                            <div className="hero-contents pe-lg-3">
                                <h1 className="fs-lg wow fadeInLeft animated" data-wow-duration="1.3s">Focus Infrastructures</h1>
                                <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">We are delighted to announce that we have changed the name of our company to
Focus Infrastructures.</p>
                                <a href="" className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</a>
                                <a href="" className="plus-text-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                    <div className="link-text">
                                        <span>Explore</span> More about Us
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-cover img-resp" style={{backgroundImage: `url(${slide2})`}}>
            <div className="overlay-black-trnsprt"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ps-md-5 pe-md-5 col-xxl-12 col-lg-12 col-md-8 col-sm-12">
                            <div className="hero-contents pe-lg-3">
                                <h1 className="fs-lg wow fadeInLeft animated" data-wow-duration="1.3s">we build Your Dream</h1>
                                <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">The change stated above occurred in accordance to our customers and partners.</p>
                                <a href="" className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</a>
                                <a href="" className="plus-text-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                    <div className="link-text">
                                        <span>Explore</span> More about Us
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className=" bg-cover img-resp" style={{backgroundImage: `url(${slide3})`}}>
            <div className="overlay-black-trnsprt"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ps-md-5 pe-md-5 col-xxl-12 col-lg-12 col-md-8 col-sm-12">
                            <div className="hero-contents pe-lg-3">
                                <h1 className="fs-lg wow fadeInLeft animated" data-wow-duration="1.3s">we build Your Dream</h1>
                                <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">By rebranding ourselves and becoming one complete closure solutions company.</p>
                                <a href="" className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</a>
                                <a href="" className="plus-text-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                    <div className="link-text">
                                        <span>Explore</span> More about Us
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
    )
}

export default HeroOne;