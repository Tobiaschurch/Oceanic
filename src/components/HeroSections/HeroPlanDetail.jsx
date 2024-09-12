import React from 'react'
import Hero from '../../ui/layouts/Hero'
import assets from '../../assets'
import { 
    Heading,
    Image,
    SimpleGrid, 
    Text, 
    VStack, 

} from '@chakra-ui/react'
import CtaButton from '../../ui/CtaButton'
import { handleScroll } from '../../utils/helper'
import { useLocation } from 'react-router-dom'
import { ServicesData } from '../../data/ServicesData'


function HeroPlanDetail() {


  const location = useLocation();
  const pathname = location.pathname;
  const match = pathname.match(/plans\/([^/]+)/);
  
  const planDetailName = match ? decodeURIComponent(match[1]) : "";
  const planFilteredData = ServicesData.find(plan => plan.name === planDetailName);


  return (
    <Hero
      bgImg={planFilteredData?.image}
    >
        <VStack
          w={["full", "full", "50%"]}
          mx={["initial", "initial", "auto"]}
          justify="center"
          align="center"
          mt={["1.6rem", "2rem", "2.5rem"]}
        >
            <VStack
             py="10rem"
             w="full"
             justify="center"
             align="center"
             gap="40px"
             data-aos="zoom-in"
             data-aos-duration="1000"
             data-aos-delay="500"
            >
                <Text
                 fontSize={[40, 44, 44]}
                 fontWeight={800}
                 lineHeight="60px"
                 textTransform="uppercase"
                 color="white"
                 textAlign="center"
                >
                  {planDetailName}
                </Text>

                <Heading
                 fontSize={[18, 18, 20]}
                 fontWeight={300}
                 fontStyle="italic"
                 lineHeight="31.2px"
                 color="white"
                 textAlign="center"
                >
                   Explore the specifics of {planDetailName} in detail. Understand the benefits and services available to you
                </Heading>

                <CtaButton
                    btnText="View Plan"
                    isLink={false}
                    handleClick={handleScroll("section-plan-detail")}
                    bgColor="brand.100"
                    color="brand.200"
                />

            </VStack>


        </VStack>
    </Hero>
  )
}

export default HeroPlanDetail
