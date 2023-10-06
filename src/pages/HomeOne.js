import AboutOne from "../Components/About/AboutOne";
import BlogOne from "../Components/Blog/BlogOne";
import BrandCarouselOne from "../Components/Brands/BrandCarouselOne";
import CtaOne from "../Components/Cta/CtaOne";
import FaqOne from "../Components/Faq/FaqOne";
import FeaturesOne from "../Components/Features/FeaturesOne";
import FooterOne from "../Components/Footer/FooterOne";
import HeaderOne from "../Components/Header/HeaderOne";
import HeroOne from "../Components/Hero/HeroOne";
import HeroSocials from "../Components/Hero/HeroSocials";
import PortfolioOne from "../Components/Portfolio/PortfolioOne";
import ServicesOne from "../Components/Services/ServicesOne";
import TeamOne from "../Components/Team/TeamOne";
import TestimonialOne from "../Components/Testimonial/TestimonialOne";
import WorkProcess from "../Components/Work/WorkProcess";
import imgBlock1 from '../assets/img/home1/poolOfCompany.jpg';

import aboutImg from '../assets/img/home1/companyFocus.jpg';
import { Link } from "react-router-dom";
import {Autoplay } from "swiper";

// import teamTwoData from "./teamTwoData";
import teamTwoData from "../Components/Team/teamTwoData";
import img1 from '../assets/img/team/1.png';
import bg1 from '../assets/img/services/Picture1.jpg';
import bg2 from '../assets/img/services/Picture2.jpg';
import bg3 from '../assets/img/services/Picture3.jpg';
import bg4 from '../assets/img/services/Picture4.jpg';
import bg5 from '../assets/img/services/Picture5.jpg';
import bg6 from '../assets/img/services/Picture6.jpg';
import bg7 from '../assets/img/services/Picture7.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import brand1 from '../assets/img/brand-logo/b1.png';

const HomeOne = (pt) => {
  
    return (
        <>
        <HeaderOne/>
        <HeroSocials/>
        <HeroOne/>
        <WorkProcess/>
        <AboutOne/>
        <ServicesOne/>
        <CtaOne/>
        <FeaturesOne/>
        <BrandCarouselOne/>

        <section className={pt ? 'about-section section-padding' : 'about-section section-padding pt-0'}>
            <div className="container">
                <div className="row ">
                <div className="col-xl-6 col-lg-7 col-md-10 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                {/* <span>About Company</span> */}
                                <h2>Our Pool of Company</h2>
                            </div>
                    <p className="text-justify">Further, as part of this exciting company, We would like to inform you that Laksh Heights
is one of the Sister Concern Company.</p>

<p className='text-justify'>We ensure that environment friendly and high safety standards are a common feature in all our 
projects. We remain committed to deliver world-class projects and our work consists top class 
finishes.
</p>

<p className='text-justify'>Workmanship and quality with transparency in all spheres of business, our empowered team of 
highly committed and skilled resources using best in class consultants and state-of-the-art 
technology.</p>

<p className="text-justify">we have aggregated and developed large tracts of Nature homes, Independent villas, and 
apartments for ready for move-in, our residential projects come with the best finishes, highest 
specifications, luxurious landscapes and best in line amenities.</p>
                        </div>
                        {/* <div className="tab-content-block">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-technology-tab" data-bs-toggle="pill" data-bs-target="#pills-technology" type="button" role="tab" aria-controls="pills-technology" aria-selected="true">Technology</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-materials-tab" data-bs-toggle="pill" data-bs-target="#pills-materials" type="button" role="tab" aria-controls="pills-materials" aria-selected="false">Materials</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-approved-tab" data-bs-toggle="pill" data-bs-target="#pills-approved" type="button" role="tab" aria-controls="pills-approved" aria-selected="false">Approved</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-technology" role="tabpanel" aria-labelledby="pills-technology-tab">
                                    <div className="tab-inner-contents">
                                        <div className="img-box">
                                            <img src={tabImg1} alt=""/>
                                        </div>
                                        <div className="checked-features-list">
                                            <ul>
                                                <li>Intentional development authority</li>
                                                <li>Stylistic formula method</li>
                                                <li>Royal ability to listen design</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-materials" role="tabpanel" aria-labelledby="pills-materials-tab">
                                    <div className="tab-inner-contents">
                                        <div className="img-box">
                                            <img src={tabImg1} alt=""/>
                                        </div>
                                        <div className="checked-features-list">
                                            <ul>
                                                <li>Stylistic formula method</li>
                                                <li>Intentional development authority</li>
                                                <li>Royal ability to listen design</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-approved" role="tabpanel" aria-labelledby="pills-approved-tab">
                                    <div className="tab-inner-contents">
                                        <div className="img-box">
                                            <img src="assets/img/home1/tab-img.jpg" alt=""/>
                                        </div>
                                        <div className="checked-features-list">
                                            <ul>
                                                <li>Intentional development authority</li>
                                                <li>Stylistic formula method</li>
                                                <li>Royal ability to listen design</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>                          
                        </div> */}
                        {/* <Link to="/about" className="plus-text-btn mt-lg-5 mt-4">
                            <div className="icon">
                                <i className="fas fa-plus"></i>
                            </div>
                            <div className="link-text">
                                <span>Explore</span> More about Us
                            </div>
                        </Link> */}
                    </div>
                    
                    <div className="col-xl-6 col-lg-5 col-12">
                        <div className="img-block-pop-video">
                            <img src={imgBlock1} alt="busico"/>
                           
                        </div>
                    </div>
               
                </div>
            </div>
        </section>

        <section className="about-section ">
        <div className="container">
            <div className="row ">
                <div className="col-xl-6 col-12 pe-xl-0">
                    <div className="about-cover-bg bg-cover me-xl-5" style={{backgroundImage: `url(${aboutImg})`}}>
                        {/* <div className="our-experience-years">
                            <div className="year-outline">
                                <h2>30</h2>
                            </div>
                            <p>Years <span>Experience</span></p>
                        </div> */}
                    </div>
                </div>
                <div className="col-xl-6 mt-5 mt-lg-0 col-12">
                    <div className="block-contents">
                        <div className="section-title">
                            {/* <span>About Company</span> */}
                            <h2>Focus</h2>
       
                        </div>
                        {/* <blockquote>Construction actually recommends for content specifically the people for the house keywords is popular.</blockquote> */}
                    </div>

                    <p>As Focus has wider lens to work with different Segment and environment which may have difference hazards to manage with people, equipment and products. </p>
                    
                    <br/>
                    <p>Focus is always expects an individual to take responsibility of he/she and surroundings by following the protocol provided by company and clients.</p>
                    <br/>
<p>As in we make sure to keep working environment in safer zone by educating the labours and in house in terms of Safety,risk hazards, Risk assessment, Do & Don'ts, providing respective PPE, and implement the guidelines as per the work execution and clients.</p>
                    <Link to="/" className="theme-btn mt-35">read more</Link>
                </div>
            </div>
        </div>
        {/* <h2 className="section-rotate-title d-none d-xxl-block">ABOUT</h2> */}
    </section>

    <div className="brand-carousel-wrapper dot-bg section-padding">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-3">
                    <h4>Few of Our Recent project Execution with Client satisfaction
</h4>
                </div>
                    <div className=" col-lg-9">
                        <div className="brand-carousel-active"  >
                            <Swiper
                                slidesPerView={5} 
                                spaceBetween={20} 
                                loop   
                                autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}             
                                breakpoints={{
                                    "@0.00": {
                                      slidesPerView: 1,
                                      spaceBetween: 10,
                                      
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
                                      slidesPerView: 2,
                                      spaceBetween: 40,
                                    },
                                  }}

                                  modules={[Autoplay]} 
                            >
                           
                               
                                        <SwiperSlide className="single-brand-logo">
                                        <div className="single-service-box2 style-1" style={{backgroundImage: `url(${bg1})`}}>
                                <div className="service-bg bg-cover" ></div>
                                <div className="icon">
                            
                                </div>
                                <div className="contents">
                                    {/* <h4><Link to="/servicesDetails">MANAGI</Link></h4> */}
                                    <p className='text-justify' style={{color:"white"}}>As we are successfully come out with 
Client satisfaction of painting activity in 
Shell (Bellandur) from last 4 years, by 
implementation of safety measures and 
Execution standards of area 12,00,000 
Sqft, with the man power of 60-70 
Skilled Technicians with qualified 
Engineers.</p>
                                </div>
                            </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="single-brand-logo">
                                        <div className="single-service-box2 style-1" style={{backgroundImage: `url(${bg2})`}}>
                                <div className="service-bg bg-cover" ></div>
                                <div className="icon">
                            
                                </div>
                                <div className="contents">
                                    {/* <h4><Link to="/servicesDetails">MANAGING  DIRECTOR</Link></h4> */}
                                    <p className="text-justify" style={{color:"white"}}>We have Worked on 6 New ODC Setup with a
huge floor modification setup of around 25,000
Sqft Area with all standards in place to match
the existing Setup.</p>
                                </div>
                            </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="single-brand-logo">
                                        <div className="single-service-box2 style-1" style={{backgroundImage: `url(${bg3})`}}>
                                <div className="service-bg bg-cover" ></div>
                                <div className="icon">
                            
                                </div>
                                <div className="contents">
                                    {/* <h4><Link to="/servicesDetails">MANAGING  DIRECTOR</Link></h4> */}
                                    <p className="text-justify" style={{color:"white"}}>We have Wide range of hands on FAFA System, 
HVAC, Fire systems, by supplying and installation 
of Newly organized setup and have successfully
delivered the out up technically as per client
requirement.</p>
                                </div>
                            </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="single-brand-logo">
                                        <div className="single-service-box2 style-1" style={{backgroundImage: `url(${bg4})`}}>
                                <div className="service-bg bg-cover" ></div>
                                <div className="icon">
                            
                                </div>
                                <div className="contents">
                                    {/* <h4><Link to="/services Details">MANAGING  DIRECTOR</Link></h4> */}
                                    <p className="text-justify" style={{color:"white"}}>We have Greater Exposure Working with 
Shell - STCB on various Projects like 
Racetrack, water proofing, IH2, WTP, 
Hydrant leakage, AV Remediation, Soft 
Water Work,</p>
                                </div>
                            </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="single-brand-logo">
                                        <div className="single-service-box2 style-1" style={{backgroundImage: `url(${bg5})`}}>
                                <div className="service-bg bg-cover" ></div>
                                <div className="icon">
                            
                                </div>
                                <div className="contents">
                                    {/* <h4><Link to="/servicesDetails">MANAGING  DIRECTOR</Link></h4> */}
                                    <p className="text-justify" style={{color:"white"}}>Specialized in development of RPWD
Rest Rooms and wheelchair Ramps for 
RPWD by implementing all standards 
in place as per Harmonized Guidelines.</p>
                                </div>
                            </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="single-brand-logo">
                                        <div className="single-service-box2 style-1" style={{backgroundImage: `url(${bg6})`}}>
                                <div className="service-bg bg-cover" ></div>
                                <div className="icon">
                            
                                </div>
                                <div className="contents">
                                    {/* <h4><Link to="/servicesDetails">MANAGING  DIRECTOR</Link></h4> */}
                                    <p className="text-justify" style={{color:"white"}}>We are into all kind of flooring 
works, Displayed few of the 
pics during execution on site.</p>
                                </div>
                            </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="single-brand-logo">
                                        <div className="single-service-box2 style-1" style={{backgroundImage: `url(${bg7})`}}>
                                <div className="service-bg bg-cover" ></div>
                                <div className="icon">
                            
                                </div>
                                <div className="contents">
                                    {/* <h4><Link to="/servicesDetails">MANAGING  DIRECTOR</Link></h4> */}
                                    <p className="text-justify" style={{color:"white"}}>We are builders & have our own construction company in Bangalore, we have 
executed several projects villas, independent bungalows & apartments in west 
Bangalore..</p>
                                </div>
                            </div>
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <FooterOne/>
        </>
    )
}

export default HomeOne;