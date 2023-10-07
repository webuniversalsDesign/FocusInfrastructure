import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/home1/breadcrumb.jpg';
import PageBanner from '../Components/PageBanner';
import AboutOne from '../Components/About/AboutOne';
import AboutBanner from '../Components/About/AboutBanner';
import Timeline from '../Components/Timeline';
import TeamThree from '../Components/Team/TeamThree';
import BrandCarouselThree from '../Components/Brands/BrandCarouselThree';
import Skill from '../Components/Skills/Skill';
import FooterOne from '../Components/Footer/FooterOne';

import imgBlock1 from '../assets/img/home1/cartivityHome.jpg';

const AboutPage = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='About us' bannerBg={bannerBg} currentPage='About' />
        <AboutOne pt />
        {/* <AboutBanner/> */}
        <Timeline/>
        {/* <Skill/> */}
        {/* <TeamThree/> */}
        {/* <BrandCarouselThree/> */}

        <div className="container">
                <div className="row align-items-center pb-5 mb-5">
                   
                    <div className="col-xl-6 col-lg-7 col-md-10 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                {/* <span>About Company</span> */}
                                {/* <h2>Excellence in every project</h2> */}
                            </div>
                            <p className='text-justify'>Our Interior Design services are a testament to our proficiency, with talented professionals crafting precise and tailored designs that align seamlessly with client needs. We immerse ourselves in modern and effective facilities, ensuring that every space we design reflects both aesthetic brilliance and functional efficiency.</p>

<p className='text-justify'>In the realm of Civil Construction, Focus stands out for its commitment to delivering top-notch results. Our highly experienced project superintendents lead the charge, prioritizing safety and quality above all. This commitment is not just a promise; it's a fundamental aspect of our organizational ethos. We take pride in executing projects for prestigious clients, consistently meeting and exceeding their expectations.
</p>

<p className='text-justify'>The backbone of our success lies in our qualified professionals who bring a wealth of industry knowledge and job-specific training to every project. These dedicated individuals ensure the delivery of work that not only meets but often surpasses the highest standards. We cater to tier 1 clients, executing projects with precision, reliability, and a commitment to excellence.</p>

<p className='text-justify'>At Focus, client satisfaction and requirements are paramount. We go beyond offering services; we provide an experience crafted with precision and passion. Our comprehensive range of services is designed to cater to the diverse needs of our clients, ensuring that every project receives the attention to detail and expertise it deserves.</p>
                     
                     
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
        <FooterOne/>
    </>
  )
}

export default AboutPage