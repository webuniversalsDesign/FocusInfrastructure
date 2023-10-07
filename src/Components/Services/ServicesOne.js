import { Link } from "react-router-dom";
import servicesOneData from "./servicesOneData";
import bg1 from '../../assets/img/brand-logo/Chart.jpg';
import { TbAdjustmentsCog } from "react-icons/tb";
import { BsShieldFillCheck, BsPersonFillGear } from "react-icons/bs";
// import { FaGraduationCap } from "react-icons/fa";
import { LuPackageSearch } from "react-icons/lu";
import { MdEngineering, MdSwitchAccount } from "react-icons/md";


const ServicesOne = () => {
    return (
        <section className="our-service-wrapper mt-5 pt-5 pb-5 bg-gray">
        <div className="container">

        <div className="block-contents">
                        <div className="section-title">
                            {/* <span>02. Featured Service</span> */}
                            <h2>Company Hierarchy Chart</h2>
                            <br/>
                        </div>
                        {/* <p>Our promise as a contractor is to build strong community value into every projects</p> */}
                    </div>
            <div className="row mtm-30">
                {/* <div className="col-md-6 col-12 col-lg-4 mt-30">
                    <div className="block-contents">
                        <div className="section-title">
                         <span>02. Featured Service</span> 
                            <h2>Company Hierarchy Chart</h2>
                        </div>
                        <p>Our promise as a contractor is to build strong community value into every projects</p> 
                    </div>
                </div>  */}
  
                  

                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                        <Link to="/ManagingDirector">
                        <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <TbAdjustmentsCog />
                                </div>
                                <div className="contents resp-content">
                                    <h4><Link to="/ManagingDirector">MANAGING  DIRECTOR</Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                        

                        </div>

                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                        <Link to="/Accountmanager">
                             <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <MdSwitchAccount/>
                                </div>
                                <div className="contents resp-content">
                                    <h4><Link to="/Accountmanager">ACCOUNT  MANAGER</Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                           
                        </div>

                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                        <Link to="/Procurement">
                             <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <LuPackageSearch/>
                                </div>
                                <div className="contents resp-content">
                                    <h4><Link to="/Procurement">PROCUREMENT </Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                           
                        </div>
                        
                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                        <Link to="/Projectcoordinator">
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <BsPersonFillGear/>
                                </div>
                                <div className="contents resp-content">
                                    <h4><Link to="/Projectcoordinator">PROJECT CO-ORDINATOR</Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                            
                        </div>
               
                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                        <Link to="/Safetyconsultant">
                             <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <BsShieldFillCheck/>
                                </div>
                                <div className="contents resp-content">
                                    <h4><Link to="/Safetyconsultant">SAFETY  CONSULTANT</Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                           
                        </div>

                        

                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                        <Link to="/Siteengineer">
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <MdEngineering/>
                                </div>
                                <div className="contents resp-content">
                                    <h4><Link to="/Siteengineer">SITE ENGINEER</Link></h4>
                                    {/* <h4><Link to="/servicesDetails">SITE ENGINEER</Link></h4> */}
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                            
                        </div>

                   
                 
                 
            </div>
        </div>
    </section>
    )
}

export default ServicesOne;