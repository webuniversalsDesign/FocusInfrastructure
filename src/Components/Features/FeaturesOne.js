import coreBg from '../../assets/img/home1/ourStriength.jpg';
import img1 from '../../assets/img/home1/ourSolution.jpg';


const FeaturesOne = () => {
    return (
        <>
               <section className="core-features-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 pe-lg-0 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                {/* <span>03. Core Features</span> */}
                                <h2>Our Strength</h2>
                            </div>
                        </div>
                        <div className="single-icon-circle-item">
                            <div className="icon">
                            <i className="flaticon-secure-shield"></i>
                            </div>
                            <div className="contents">
                                {/* <h3>Innovation</h3> */}
                                <p> At the helm of our organization, Construction of Structured Building, PRE Engineering Building,
Interior modification Renovation works, Floor Setup, Electrical works, creating infrastructure as
per client requirement.
</p>
                            </div>
                        </div>
                        <div className="single-icon-circle-item">
                            <div className="icon">
                                <i className="flaticon-secure-shield"></i>
                            </div>
                            <div className="contents">
                                {/* <h3>Project Handover</h3> */}
                                <p>The given task is achieved by our well qualified Engineers with high professional Ethics, as
per the requirement and standards.
</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-6 col-xl-5 col-12">
                        <div className="project-details-card bg-gray mt-5 mt-lg-0 ms-lg-4 me-lg-4">
                            <div className="project-title">
                                <h3>Harvest Home</h3>
                                <p>We commit ourselves to complete all projects within the timeline.</p>
                            </div>
                            <div className="project-date">
                                <h6>Execution &#38; Handover Date</h6>
                                <p>Jan 18 2010 - Jun 23 2015</p>
                            </div>
                            <div className="project-client">
                                <h6>Client Name</h6>
                                <p>Maxuel D Silva</p>
                            </div>
                            <div className="project-estimate d-flex justify-content-between align-items-center">
                                <div className="single-data">
                                    <h6>POF</h6>
                                    <p>Elemental</p>
                                    <div className="total-ton">
                                        <h3>24.658</h3>
                                        <span>Mon</span>
                                    </div>
                                </div>
                                <div className="single-data">
                                    <h6>HUI</h6>
                                    <p>Special</p>
                                    <div className="total-ton">
                                        <h3>224.658</h3>
                                        <span>Years</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="core-bg d-none d-xl-block bg-cover" style={{backgroundImage: `url(${coreBg})`}}></div>
        </section>

        <section className="why-choice-us section-padding">
        <div className="why-choice-bg bg-cover d-none d-xl-block" style={{backgroundImage: `url(${img1})`}}></div>
        <div className="container">
            <div className="row">
                <div className="offset-xl-6 offset-lg-4 col-lg-8 col-xl-6 col-12">
                    <div className="block-contents">
                        <div className="section-title">
                            {/* <span>Why Choose Us</span> */}
                            <h2>OUR SOLUTION</h2>
                        </div>
                    </div>
                    <div className="single-icon-circle-item">
                        <div className="icon">
                        <i className="flaticon-secure-shield"></i>
                        </div>
                        <div className="contents">
                            {/* <h3>Advanced Technology</h3> */}
                            <p>We offer a Multiple Solutions to Clients who are focused on innovative Design and functionality in order to keep Clients satisfied and happy.</p>
                        </div>
                    </div>
                    <div className="single-icon-circle-item">
                        <div className="icon">
                            <i className="flaticon-secure-shield"></i>
                        </div>
                        <div className="contents">
                            {/* <h3>trustworthy</h3> */}
                            <p>Projects delivery with very short TAT by understanding the Clients needs with full measure of safety, Ǫuality work as per requirement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
     
    )
}

export default FeaturesOne;