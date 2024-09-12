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

function HeroPlans() {
  return (
    <Hero
     bgImg={assets.heroBgPlans}
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
                  Plans Types
                </Text>

                <Heading
                 fontSize={[18, 18, 20]}
                 fontWeight={300}
                 fontStyle="italic"
                 lineHeight="31.2px"
                 color="white"
                 textAlign="center"
                >
                    Your Health, Our Ocean of Care - Dive Into Comprehensive Coverage with Oceanic Health
                </Heading>

                <CtaButton
                    btnText="View Plans"
                    isLink={false}
                    handleClick={handleScroll("section-product")}
                    bgColor="brand.100"
                    color="brand.200"
                />

            </VStack>


        </VStack>
    </Hero>
  )
}

export default HeroPlans
