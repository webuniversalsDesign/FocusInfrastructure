import React from 'react'
import FooterTwo from '../Components/Footer/FooterTwo'
import HeaderOne from '../Components/Header/HeaderOne'
import bannerBg from '../assets/img/home1/breadcrumb.jpg';
import PageBanner from '../Components/PageBanner';
import AboutOne from '../Components/About/AboutOne';
import AboutBanner from '../Components/About/AboutBanner';
import Timeline from '../Components/Timeline';
import TeamThree from '../Components/Team/TeamThree';
import BrandCarouselThree from '../Components/Brands/BrandCarouselThree';
import Skill from '../Components/Skills/Skill';
import FooterOne from '../Components/Footer/FooterOne';


const AboutPage = () => {
  return (
    <>
        <HeaderOne/>
        <PageBanner title='About us' bannerBg={bannerBg} currentPage='About' />
        <AboutOne pt />
        {/* <AboutBanner/> */}
        <Timeline/>
        {/* <Skill/> */}
        {/* <TeamThree/> */}
        {/* <BrandCarouselThree/> */}
        <FooterOne/>
    </>
  )
}

export default AboutPage