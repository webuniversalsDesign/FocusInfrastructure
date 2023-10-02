import { Link } from "react-router-dom";
import FooterOneCopyrights from "./FooterOneCopyrights";
import { useState } from "react";
import FooterCta from "./FooterCta";

const FooterOne = () => {
    const [input, setInput] = useState('');
    return (
        <>
            <footer className="footer-1 footer-wrap">
                <div className="footer-widgets-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 pe-xl-0 col-sm-6 col-12">
                                <div className="single-footer-wid site_info_widget">
                                    <div className="wid-title">
                                        <h3>Get In Touch</h3>
                                    </div>
                                    <div className="contact-us">
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="fal fa-phone"></i>
                                            </div>
                                            <div className="contact-info">
                                                {/* <p>+673 853 605 985</p> */}
                                                <p>000 XXX XXX</p>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="contact-info">
                                                <p>focusInfrastructures@gmail.com</p>
                                                
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon" style={{width:"50px"}}>
                                                <i className="fal fa-map-marker-alt"></i>
                                            </div>
                                            <div className="contact-info">
                                                <p>#323, 3rd Floor, 12th 'B' Cross,
6th Main, West of chord Road 2nd Stage 
Mahalaxmipuram Bangalore
</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 offset-xl-1 col-xl-3 ps-xl-5 col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link to="/">About Company</Link></li>
                                        <li><Link to="/">Communication Services</Link></li>
                                        <li><Link to="/">Internet of Things</Link></li>
                                        <li><Link to="/">Product Development</Link></li>
                                        <li><Link to="/">Industrial Automation</Link></li>
                                        <li><Link to="/">Payment Getway</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-4 offset-xl-1 col-12">                        
                                <div className="single-footer-wid newsletter_widget">
                                    <div className="wid-title">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className="newsletter_box">
                                        <form action="#">
                                            <i className="fal fa-envelope"></i>
                                            <input value={input} onChange={(e) => setInput(e.target.value)} type="email" placeholder="Enter email address" required/>
                                            <button onClick={(e) => e.preventDefault()} className="submit-btn" type="submit">Subscribe Now <i className="fas fa-paper-plane"></i></button>
                                        </form>
                                        <p>Opening Hours : <b> Mon - Fri:  9:30 AM - 10 PM</b></p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>

                <FooterCta/>
                <FooterOneCopyrights/>
            </footer> 
        </>
    )
}

export default FooterOne;