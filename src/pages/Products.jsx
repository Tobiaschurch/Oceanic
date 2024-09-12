import React from 'react'
import HeroPlans from '../components/HeroSections/HeroPlans'
import Corporate from '../components/Products/Corporate'
import Pricing from '../components/Products/Pricing'
import PricingPlans from '../components/Products/PricingPlans'

function ProductsPage() {
  return (
    <>
     <HeroPlans/>
     {/* <Corporate/>
     <Pricing/> */}
     <PricingPlans/>
    </>
  )
}

export default ProductsPage
