import { Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import ContainerLayout from '../../ui/layouts/ContainerLayout'
import MiniHeading from '../../ui/MiniHeading'
import { useLocation } from 'react-router-dom';
import { ServicesData } from '../../data/ServicesData';
import PlanDetailTable from './PlanDetailTable';
import ScrollElement from '../ScrollToTop/ScrollElement';


function PricingPlanDetail() {

    const location = useLocation();
    const pathname = location.pathname;
    const match = pathname.match(/plans\/([^/]+)/);
    
    const planDetailName = match ? decodeURIComponent(match[1]) : "";
    console.log(planDetailName);
    
    const planFilteredData = ServicesData.find(plan => plan.name === planDetailName);



  return (
    <Stack
        w="full"
        justify="start"
        align="start"
        gap="40px"
        py="6rem"
   >
       <ContainerLayout>

        <ScrollElement name="section-plan-detail">

           <VStack
                w="full"
                justify="start"
                align="start"
           >

            <PlanDetailTable data={planFilteredData?.data}/>

           </VStack>
        </ScrollElement>

        </ContainerLayout>
    </Stack>    
  )
}

export default PricingPlanDetail
