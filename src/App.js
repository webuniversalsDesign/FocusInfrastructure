import React, {useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';  
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
import Creativity from './pages/Creativity';
import Safety from './pages/Safety';
import Quality from './pages/Quality';
import TAT from './pages/TAT';
import Integrity from './pages/Integrity';
import CustomerSatisfaction from './pages/CustomerSatisfaction';
import ProjectManager from './pages/ProjectManager';
import BusinessHead from './pages/BusinessHead';
function App() {
  
  const routePath = useLocation(); 
  const onTop = () => { 
    window.scrollTo(0, 0); 
  } 
  useEffect(() => { 
    onTop() 
  }, [routePath]);

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
        <Route path="/ProjectManager" element={<ProjectManager />} />
        <Route path="/BusinessHead" element={<BusinessHead/>} />

        <Route path="/Creativity" element={<Creativity/>}/>
        <Route path="/Safety" element={<Safety/>}/>
        <Route path="/Quality" element={<Quality/>}/>
        <Route path="/TAT" element={<TAT/>}/>
        <Route path="/Integrity" element={<Integrity/>}/>
        <Route path="/CustomerSatisfaction" element={<CustomerSatisfaction/>}/>
        

      </Routes>
    </>
    )
  }


export default App;
