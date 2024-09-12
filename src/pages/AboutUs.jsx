import React from 'react'
import HeroAbout from '../components/HeroSections/HeroAbout'
import BoardMembers from '../components/About/BoardMembers'
import Beyond from '../components/About/Beyond'
import WhoWeAre from '../components/About/WhoWeAre'
import Expertise from '../components/About/Expertise'
import Quality from '../components/About/Quality'
import Testimonials from '../components/About/Testimonials'
import Faqs from '../components/About/Faqs'
import OurHistory from '../components/About/OurHistory'

function AboutUsPage() {
  return (
    <>
     <HeroAbout/>
     <OurHistory/>
     {/* <BoardMembers/> */}
     <Beyond/>
     <WhoWeAre/>
     <Expertise/>
     <Quality/>
     <Testimonials/>
     <Faqs/>
    </>
  )
}

export default AboutUsPage
