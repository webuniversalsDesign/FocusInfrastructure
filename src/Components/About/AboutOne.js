import videoBg from '../../assets/img/video_bg_1.jpg';
import imgBlock1 from '../../assets/img/home1/cartivityHome.jpg';
import tabImg1 from '../../assets/img/home1/tab-img.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';


const AboutOne = ({pt}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="EZ9DrY43wtw"
            onClose={() => setOpen(false)}
        />
        <section className={pt ? 'about-section section-padding' : 'about-section section-padding pt-0'}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5 col-12">
                        <div className="img-block-pop-video">
                            <img src={imgBlock1} alt="busico"/>
                           
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-10 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <span>About Company</span>
                                <h2>Excellence in every project</h2>
                            </div>
                            <p className='text-justify'>Focus Established in the year 2007, it's been 15 years our expertise across infrastructure domains is evident through the 
successful execution of various projects covering the below.</p>
<p className='text-justify'>Focus assisted with modern and effective facilities, we are immersed in providing Interior design services is rendered by 
our talented professionals to give accurate design as per client need. With the support of talented professionals, we are 
involved in providing highly effective Civil Construction works to our prestigious clients. The provided services are 
rendered in different fields with the best client satisfaction and requirements.
Our project superintendents are highly experienced, highly qualified professionals who put safety and quality as their top 
priority.
</p>

<p className='text-justify'>These services are offered by qualified persons who are well trained in their jobs and industry for offering the best quality
of work. Executed by experienced employees for tier 1 clients In addition to this, we have a complete range for the clients
that cater on various requirements.</p>
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
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutOne;