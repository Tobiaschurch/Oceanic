import React from 'react';
import HeroHome from '../components/HeroSections/HeroHome';
import Plans from '../components/Plans/Plans';
import Partners from '../components/Partners/Partners';
import WhyUs from '../components/WhyUs/WhyUs';
import Connect from '../components/Connect/Connect';
import AboutSection from '../components/About/AboutSection';

function HomePage() {
  return (
    <>
        <HeroHome/>
        <AboutSection/>
        <Plans/>
        <Partners/>
        <WhyUs/>
        <Connect/>
    </>
  )
}

export default HomePage
