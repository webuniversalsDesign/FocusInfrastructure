import React from 'react';

import { Link } from 'react-router-dom';
import image1 from '../assets/img/gallery/1.jpg';
import image2 from '../assets/img/gallery/5.jpg';
import image3 from '../assets/img/gallery/6.jpg';
import HeaderOne from '../Components/Header/HeaderOne';
import PageBanner from '../Components/PageBanner';
import bannerBg from '../assets/img/page-banner.jpg';
import FooterOne from '../Components/Footer/FooterOne';

const Procurement = () => {
  return (
    <>
       <HeaderOne />

<PageBanner title='PROCUREMENT' bannerBg={bannerBg} currentPage='PROCUREMENT' />

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
                    <h2>  Sourcing Excellence</h2>
                    <p>As the Procurement Officer, this role is centered on the strategic management of the procurement process, influencing the organization's financial health and operational efficiency. Procurement Officers are instrumental in identifying reliable suppliers, negotiating contracts, and ensuring cost-effectiveness without compromising on quality. Beyond these transactional responsibilities, they actively contribute to optimizing procurement processes, implementing industry best practices, and cultivating robust relationships with suppliers. The role demands a keen understanding of market dynamics, ethical sourcing practices, and a commitment to aligning procurement activities with organizational objectives.</p>


                    <h2 className='pt-4'>Navigating Markets, Negotiating, Ensuring Quality Deliverables</h2>
                    <p>Procurement Officers serve as critical stewards of risk management, as their decisions directly impact the organization's bottom line. By skillfully balancing cost considerations with quality requirements, they play a pivotal role in driving operational excellence and sustained financial viability. The position requires a combination of analytical acumen, negotiation skills, and ethical business practices to navigate the intricate landscape of supply chain management. As frontline contributors to the organization's success, Procurement Officers ensure a seamless flow of resources that aligns with the strategic goals of the company.</p>
                </div>

            </div>
        </div>
    </div>
</section>
<FooterOne /> 

    </>
  )
}

export default Procurement
