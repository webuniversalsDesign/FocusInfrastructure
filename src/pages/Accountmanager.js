import React from 'react';

import { Link } from 'react-router-dom';
import image1 from '../assets/img/home1/Account-manager.jpg';
import image2 from '../assets/img/gallery/5.jpg';
import image3 from '../assets/img/gallery/6.jpg';
import HeaderOne from '../Components/Header/HeaderOne';
import PageBanner from '../Components/PageBanner';
import bannerBg from '../assets/img/home1/breadcrumb.jpg';
import FooterOne from '../Components/Footer/FooterOne';

const Accountmanager = () => {
  return (
    <>
     <HeaderOne />

<PageBanner title='Account Manager' bannerBg={bannerBg} currentPage='Account Manager' />

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
                                        <li ><Link to="/ManagingDirector" >01. MANAGING DIRECTOR</Link></li>
                                        <li><Link to="/BusinessHead" >02. BUSINESS HEAD</Link></li>
                            <li><Link to="/ProjectManager" >03. PROJECT MANAGER</Link></li>
                                        <li><Link to="/Accountmanager" className='activeTab'>04. ACCOUNT MANAGER</Link></li>
                                        <li><Link to="/Procurement">05. PROCUREMENT</Link></li>
                                        <li><Link to="/Projectcoordinator">06. PROJECT CO-ORDINATOR</Link></li>
<li><Link to="/Safetyconsultant">07. SAFETY CONSULTANT</Link></li>
 <li><Link to="/Siteengineer">08. SITE ENGINEER</Link></li>
                                        
                                        
                                       
                                    </ul>
                                </div>


                </div>
            </div>
            <div className="col-lg-9 col-md-8 ps-lg-5 col-12 order-1 order-md-2">
                <div className="service-details-content-wrapper pl-0 pl-md-4">
                    <img src={image1} alt="" />
                    <h2>Client Partnerships, Beyond Transactions</h2>
                    <p>Account Managers play a pivotal role in bridging the organization with its clients, serving as the primary point of contact and advocate for client needs. Beyond managing accounts, they deeply understand client objectives, ensuring that expectations are not only met but exceeded. Account Managers collaborate seamlessly with internal teams to deliver solutions aligned with client goals, contributing to client satisfaction and fostering long-term, mutually beneficial relationships</p>


                    <h2 className='pt-4'>Exceeding Expectations, Ensuring Long-Term Success.</h2>
                    <p>With a focus on strategic partnership development, Account Managers identify opportunities for account growth and proactively address client concerns. Their role extends beyond transactional interactions, encompassing a holistic understanding of client businesses and market dynamics. Armed with strong interpersonal skills and business acumen, Account Managers are integral to maintaining client relationships and driving business success through client retention and growth.</p>
                </div>

            </div>
        </div>
    </div>
</section>
<FooterOne /> 
    </>
  )
}

export default Accountmanager
