import { Link } from "react-router-dom";
import servicesOneData from "./servicesOneData";
import bg1 from '../../assets/img/brand-logo/Chart.jpg';
import { TbAdjustmentsCog } from "react-icons/tb";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { MdEngineering, MdSwitchAccount } from "react-icons/md";


const ServicesOne = () => {
    return (
        <section className="our-service-wrapper section-padding bg-gray">
        <div className="container">
            <div className="row mtm-30">
                <div className="col-md-6 col-12 col-lg-4 mt-30">
                    <div className="block-contents">
                        <div className="section-title">
                            {/* <span>02. Featured Service</span> */}
                            <h2>Company Hierarchy Chart</h2>
                        </div>
                        {/* <p>Our promise as a contractor is to build strong community value into every projects</p> */}
                    </div>
                </div>
  
                  

                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <TbAdjustmentsCog/>
                                </div>
                                <div className="contents">
                                    <h4><Link to="/servicesDetails">MANAGING  DIRECTOR</Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <FaGraduationCap/>
                                </div>
                                <div className="contents">
                                    <h4><Link to="/servicesDetails">BUSINESS  HEAD</Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <BsShieldFillCheck/>
                                </div>
                                <div className="contents">
                                    <h4><Link to="/servicesDetails">SAFETY  CONSULTANT</Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <MdSwitchAccount/>
                                </div>
                                <div className="contents">
                                    <h4><Link to="/servicesDetails">ACCOUNT  MANAGER</Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 col-lg-4 mt-30" >
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${bg1})`}}></div>
                                <div className="icon">
                                 <MdEngineering/>
                                </div>
                                <div className="contents">
                                    <h4><Link to="/servicesDetails">SITE ENGINEER</Link></h4>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </div>

                   
                 
                 
            </div>
        </div>
    </section>
    )
}

export default ServicesOne;