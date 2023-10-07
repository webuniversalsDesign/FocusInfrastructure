import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/img/gallery/1.jpg';
import image2 from '../assets/img/gallery/5.jpg';
import image3 from '../assets/img/gallery/6.jpg';
import HeaderOne from '../Components/Header/HeaderOne';
import PageBanner from '../Components/PageBanner';
import bannerBg from '../assets/img/page-banner.jpg';
import FooterOne from '../Components/Footer/FooterOne';


const ManagingDirector = () => {
    return (
        <>
            <HeaderOne />

            <PageBanner title='MANAGING DIRECTOR' bannerBg={bannerBg} currentPage='Managing Director' />

            <section className="service-details-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mt-5 mt-md-0 col-12 order-2 order-md-1">
                            <div className="service-details-sidebar" style={{ position: "sticky", top: "10px" }}>
                                <div className="single-service-sidebar">
                                    <div className="sidebar-title">
                                        <h3>HIERARCHY CHART</h3>
                                    </div>
                                    <ul>
                                        <li><Link to="/ManagingDirector">01. MANAGING DIRECTOR</Link></li>
                                        <li><Link to="/Accountmanager">02. ACCOUNT MANAGER</Link></li>
                                        <li><Link to="/Procurement">03. PROCUREMENT</Link></li>
                                        <li><Link to="/Projectcoordinator">04. PROJECT CO-ORDINATOR</Link></li>
                                        <li><Link to="/Safetyconsultant">05. SAFETY CONSULTANT</Link></li>
                                        <li><Link to="/Siteengineer">06. SITE ENGINEER</Link></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 ps-lg-5 col-12 order-1 order-md-2">
                            <div className="service-details-content-wrapper pl-0 pl-md-4">
                                <img src={image1} alt="" />
                                <h2>Visionary Leadership</h2>
                                <p>The role of the Managing Director is both visionary and strategic, representing the pinnacle of leadership within the organization. With an extensive background in executive management, the Managing Director holds the responsibility of shaping the overall direction and success of the company. This involves setting a clear corporate strategy, defining long-term goals, and fostering a culture of innovation and excellence. The Managing Director is not only a key decision-maker but also a bridge between high-level strategy and day-to-day operations, ensuring that the organization adapts to market dynamics while staying true to its core values. Engaging with stakeholders, inspiring executive teams, and championing a collaborative and dynamic work environment are hallmarks of this leadership role.</p>


                                <h2 className='pt-4'>Shaping Success for 15 Years and Beyond</h2>
                                <p>In addition to visionary leadership, Managing Directors play a crucial role in overseeing the operational efficiency of the company. They are charged with ensuring financial health, formulating and executing strategic initiatives, and maintaining a strong organizational culture. The ability to navigate complexities, anticipate industry trends, and inspire a diverse workforce positions the Managing Director as a pivotal force in steering the organization towards sustained success.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <FooterOne />

        </>
    )
}

export default ManagingDirector
