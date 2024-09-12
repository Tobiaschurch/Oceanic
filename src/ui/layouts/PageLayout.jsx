import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

function PageLayout() {


  return (
    <>
     <ScrollToTop />
     <Outlet />
     <Footer/>
    </>
  )
}

export default PageLayout
