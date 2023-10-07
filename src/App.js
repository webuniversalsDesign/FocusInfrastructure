import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';  
import ScrollTopBtn from './Components/ScrollTopBtn';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import TeamPage from './pages/TeamPage';
import FaqPage from './pages/FaqPage';
import PricingPage from './pages/PricingPage';
import ServiceDetails from './pages/ServiceDetails';
import HomeThree from './pages/HomeThree';
import HomeFour from './pages/HomeFour';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

import ManagingDirector from './pages/ManagingDirector';
import Accountmanager from './pages/Accountmanager';
import Procurement from './pages/Procurement';
import Projectcoordinator from './pages/Projectcoordinator';
import Safetyconsultant from './pages/Safetyconsultant';
import Siteengineer from './pages/Siteengineer';
function App() {

    return (
    <>
      <ScrollTopBtn/>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/homeTwo" element={<HomeTwo />} />
        <Route path="/homeThree" element={<HomeThree />} />
        <Route path="/homeFour" element={<HomeFour />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/newsDetails" element={<NewsDetails />} />
        <Route path="/servicesDetails" element={<ServiceDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<ProjectPage />} />

        <Route path="/ManagingDirector" element={<ManagingDirector />} />
        <Route path="/Accountmanager" element={<Accountmanager />} />
        <Route path="/Procurement" element={<Procurement />} />
        <Route path="/Projectcoordinator" element={<Projectcoordinator />} />
        <Route path="/Safetyconsultant" element={<Safetyconsultant />} />
        <Route path="/Siteengineer" element={<Siteengineer />} />
        
        

      </Routes>
    </>
    )
  }


export default App;
