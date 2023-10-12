import workProcessData from "./workProcessData";
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { BsBuildings } from 'react-icons/bs';
import { PiHandshakeBold } from 'react-icons/pi';
import { RiStarSmileLine } from 'react-icons/ri';
import { TbSettingsCog } from 'react-icons/tb';
import { Link } from "react-router-dom";



const WorkProcess = () => {
    return (
        <section className="workp-process-section section-padding mtm-30">
        <div className="container">
            <div className="row">
               
                        <div className="col-md-6 col-lg-4 border-right col-xl-4 col-12 p-item" >
                           <Link to="/Creativity">
<div className="single-work-process-item">
                                <div className="icon d-flex justify-content-center">
                                    <VscGitPullRequestCreate className="item-icon"/>
                                </div>
                                <div className="contents">
                                    {/* <span>{data.subTitle}</span> */}
                                    <h5 className="text-center">CREATIVITY </h5>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                           </Link> 
                        </div>

                        <div className="col-md-6 col-lg-4 border-right col-xl-4 col-12 p-item" >
                        <Link to="/Safety">
                            <div className="single-work-process-item">
                                <div className="icon d-flex justify-content-center">
                                    <MdOutlineHealthAndSafety className="item-icon"/>
                                </div>
                                <div className="contents">
                                    {/* <span>{data.subTitle}</span> */}
                                    <h5 className="text-center">Safety</h5> 
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                            
                        </div>

                        <div className="col-md-6 col-lg-4  col-xl-4 col-12 p-item" >
                        <Link to="/Quality">
                            <div className="single-work-process-item">
                                <div className="icon d-flex justify-content-center">
                                    <BsBuildings className="item-icon"/>
                                </div>
                                <div className="contents">
                                    {/* <span>{data.subTitle}</span> */}
                                    <h5 className="text-center">Ǫuality</h5>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                            
                        </div>

                        <div className="col-md-6 col-lg-4 border-right col-xl-4 col-12 p-item" >
                        <Link to="/TAT">
                             <div className="single-work-process-item">
                                <div className="icon d-flex justify-content-center">
                                    <TbSettingsCog className="item-icon"/>
                                </div>
                                <div className="contents">
                                    {/* <span>{data.subTitle}</span> */}
                                    <h5 className="text-center">TAT</h5>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                           
                        </div>

                        <div className="col-md-6 col-lg-4 border-right col-xl-4 col-12 p-item" >
                        <Link to="/Integrity">
                            <div className="single-work-process-item">
                                <div className="icon d-flex justify-content-center">
                                    <PiHandshakeBold className="item-icon"/>
                                </div>
                                <div className="contents">
                                    {/* <span>{data.subTitle}</span> */}
                                    <h5 className="text-center">Integrity</h5>
                                    {/* <p>{data.desc}</p> */}
                                </div>
                            </div>
                        </Link>
                            
                        </div>

                        <div className="col-md-6 col-lg-4 border-right col-xl-4 col-12 p-item" >
                        <Link to="/CustomerSatisfaction">
                            <div className="single-work-process-item">
                                <div className="icon d-flex justify-content-center">
                                    <RiStarSmileLine className="item-icon"/>
                                </div>
                                <div className="contents">
                                    {/* <span>{data.subTitle}</span> */}
                                    <h5 className="text-center">Customer Satisfaction</h5>
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

export default WorkProcess;