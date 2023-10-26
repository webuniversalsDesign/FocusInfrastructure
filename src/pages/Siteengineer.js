import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/img/home1/siteEngineer.jpg';
import image2 from '../assets/img/gallery/5.jpg';
import image3 from '../assets/img/gallery/6.jpg';
import HeaderOne from '../Components/Header/HeaderOne';
import PageBanner from '../Components/PageBanner';
import bannerBg from '../assets/img/home1/breadcrumb.jpg';
import FooterOne from '../Components/Footer/FooterOne';

const Siteengineer = () => {
  return (
    <>

<HeaderOne />

<PageBanner title='SITE ENGINEER' bannerBg={bannerBg} currentPage='SITE ENGINEER' />

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
                                        <li><Link to="/Accountmanager">04. ACCOUNT MANAGER</Link></li>
                                        <li><Link to="/Procurement">05. PROCUREMENT</Link></li>
                                        <li><Link to="/Projectcoordinator">06. PROJECT CO-ORDINATOR</Link></li>
<li><Link to="/Safetyconsultant" >07. SAFETY CONSULTANT</Link></li>
 <li><Link to="/Siteengineer" className='activeTab'>08. SITE ENGINEER</Link></li>
                                        
                                        
                                       
                                    </ul>
                                </div>


                </div>
            </div>
            <div className="col-lg-9 col-md-8 ps-lg-5 col-12 order-1 order-md-2">
                <div className="service-details-content-wrapper pl-0 pl-md-4">
                    <img src={image1} alt="" />
                    <h2>   Building Dreams, Ensuring Quality</h2>
                    <p>Site Engineers are at the forefront of transforming architectural designs into tangible structures. Responsible for overseeing on-site construction operations, they collaborate with project teams, interpret engineering specifications, and ensure that construction activities align with design plans. Site Engineers play a critical role in managing day-to-day activities, implementing quality control measures, and addressing challenges that may arise during the construction process.</p>


                    <h2 className='pt-4'>Engineering Excellence in Every Structure</h2>
                    <p>Their contribution extends to maintaining safety standards, coordinating with subcontractors, and adhering to project timelines. By applying a blend of technical expertise and project management skills, Site Engineers are instrumental in ensuring that structures meet design specifications and are completed on schedule. Their proactive problem-solving approach and attention to detail contribute to the successful realization of construction projects, leaving a lasting impact on the organization's reputation for delivering quality work in the field.</p>
                </div>

            </div>
        </div>
    </div>
</section>
<FooterOne /> 
      
    </>
  )
}

export default Siteengineer
