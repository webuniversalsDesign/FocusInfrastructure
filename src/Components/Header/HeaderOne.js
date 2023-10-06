import { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from '../../assets/img/logoFocus.png';
import MobileMenu from "./MobileMenu";
import OffsetMenu from "./OffsetMenu";

const HeaderOne = () => {
  const [search, setSearch] = useState(true);
  const [offset, setOffset] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleSearch = () => {
    setSearch(!search);
  }

  const handleOffset = (e) => {
    e.preventDefault();
    setOffset(!offset);
  }

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  return (
    <>
    <OffsetMenu offset={offset} handleOffset={handleOffset}  />
    <header className="header-wrap header-1">
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="logo">
                <Link to='/'>
                    <img src={mainLogo} alt="logo"/>
                </Link>
            </div>
            <div className="header-right-area d-flex">
                <div className="main-menu d-none d-xl-block">
                    <ul>
                        <li><Link to="/">Home </Link>
                            {/* <ul className="sub-menu">
                                <li><Link to="/">homepage 1</Link></li>
                                <li><Link to="/homeTwo">homepage 2</Link></li>
                                <li><Link to="/homeThree">homepage 3</Link></li>
                                <li><Link to="/homeFour">homepage 4</Link></li>
                            </ul> */}
                        </li>
                        <li><Link to="/">about us</Link></li>
                        <li><Link to="/">Services</Link></li>
                        {/* <li><a href="#">Pages <i className="fal fa-plus"></i></a>
                            <ul className="sub-menu">
                                <li><Link to="/Team">team</Link></li>
                                <li><Link to="/faq">faq</Link></li>
                                <li><Link to="/projects">projects</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                            </ul>
                        </li> */}
                        {/* <li><Link to="/">News</Link></li> */}
                        <li><Link to="/contact">Contact</Link></li>
                        {/* <li>
                            <a href="#" onClick={handleSearch} className="search-btn"><i className="fas fa-search"></i></a>
                            <div className={search ? 'search-box' : 'search-box show'}>
                                <form action="#">
                                    <input type="text" placeholder="Search"/>
                                    <button type="submit"><i className="fal fa-search"></i></button>
                                </form>
                            </div>
                        </li> */}
                    </ul>
                </div>
                <div className="header-right-elements d-flex align-items-center justify-content-between">
                    <Link to="/contact" className="theme-btn d-none d-sm-block">Get in touch</Link>
           
                    <div className="d-inline-block ms-4 d-xl-none">
                        <div className="mobile-nav-wrap">                    
                            <div id="hamburger" onClick={handleMobileMenu}>
                                <i className="fal fa-bars"></i>
                            </div>
                            <MobileMenu mobileMenu={mobileMenu} handleMobileMenu={handleMobileMenu} />
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    </>
  )
}

export default HeaderOne;