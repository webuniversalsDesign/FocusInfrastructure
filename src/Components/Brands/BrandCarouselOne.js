import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import brandCarouselOneData from "./BrandCarouselOneData";
import {Autoplay } from "swiper";

const BrandCarouselOne = () => {
    return (
        <div className="brand-carousel-wrapper dot-bg pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-12">
                        <div className="brand-carousel-active"  >
                            <Swiper
                                slidesPerView={5} 
                                spaceBetween={20} 
                                loop
                                autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}    
                                breakpoints={{
                                    "@0.00": {
                                      slidesPerView: 2,
                                      spaceBetween: 40,
                                      
                                    },
                                    "@0.75": {
                                      slidesPerView: 3,
                                      spaceBetween: 40,
                                      
                                    },
                                    "@1.00": {
                                      slidesPerView: 4,
                                      spaceBetween: 40,
                                      
                                    },
                                    "@1.50": {
                                      slidesPerView: 5,
                                      spaceBetween: 40,
                                    },
                                  }}

                                  modules={[Autoplay]} 
                            >
                                {
                                    brandCarouselOneData.map((data) =>(
                                        <SwiperSlide className="single-brand-logo" key={data.id}>
                                        <img src={data.brand} alt={data.name}/>
                                    </SwiperSlide>
                                    ))
                                }
                               
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandCarouselOne;