import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/img/home1/saftyconsultation.jpg';
import image2 from '../assets/img/gallery/5.jpg';
import image3 from '../assets/img/gallery/6.jpg';
import HeaderOne from '../Components/Header/HeaderOne';
import PageBanner from '../Components/PageBanner';
import bannerBg from '../assets/img/home1/breadcrumb.jpg';
import FooterOne from '../Components/Footer/FooterOne';

const Safetyconsultant = () => {
  return (
    <>
       <HeaderOne />

<PageBanner title='Safety Consultant' bannerBg={bannerBg} currentPage='Safety Consultant' />

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
                            <li><Link to="/Safetyconsultant" className='activeTab'>05. SAFETY CONSULTANT</Link></li>
                            <li><Link to="/Siteengineer">06. SITE ENGINEER</Link></li>
                            <li><Link to="/BusinessHead" >07. BUSINESS HEAD</Link></li>
                            <li><Link to="/ProjectManager" >08. PROJECT MANAGER</Link></li>
                        </ul>
                    </div>


                </div>
            </div>
            <div className="col-lg-9 col-md-8 ps-lg-5 col-12 order-1 order-md-2">
                <div className="service-details-content-wrapper pl-0 pl-md-4">
                    <img src={image1} alt="" />
                    <h2>Guardians of Safety</h2>
                    <p>Safety Consultants are instrumental in creating a secure and compliant working environment. Charged with safeguarding the well-being of employees, they conduct comprehensive risk assessments, develop and implement robust safety protocols, and oversee training programs. Safety Consultants collaborate with various departments to ensure workplace practices adhere to industry regulations and standards. Their expertise in identifying potential hazards and implementing preventative measures contributes to the prevention of accidents and injuries, fostering both employee welfare and organizational continuity.</p>


                    <h2 className='pt-4'>Creating Secure Workspaces for Sustained Success</h2>
                    <p>Moreover, Safety Consultants serve as champions of a safety-conscious culture, regularly updating safety measures to align with evolving standards. Their role extends beyond regulatory compliance to actively promote a workplace environment where safety is a priority. By leveraging their experience and knowledge, Safety Consultants contribute to the organization's reputation as a responsible and employee-centric entity committed to ensuring the well-being of its workforce.</p>
                </div>

            </div>
        </div>
    </div>
</section>
<FooterOne /> 
      
    </>
  )
}

export default Safetyconsultant
