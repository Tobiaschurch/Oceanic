import React from 'react'
import Hero from '../../ui/layouts/Hero'
import assets from '../../assets'
import { 
    Heading,
    Text, 
    VStack, 

} from '@chakra-ui/react'
import CtaButton from '../../ui/CtaButton'

function HeroMemberDetail() {
  return (
    <Hero
     bgImg={assets.heroBgProducts}
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
                 fontSize={[48, 52, 44]}
                 fontWeight={800}
                 lineHeight="60px"
                 textTransform="uppercase"
                 color="white"
                 textAlign="center"
                >
                  Meet Our Visionary Leader
                </Text>

                <Heading
                 fontSize={[18, 18, 20]}
                 fontWeight={300}
                 fontStyle="italic"
                 lineHeight="31.2px"
                 color="white"
                 textAlign="center"
                >
                   Get to know the dedicated board members driving innovation and excellence at Oceanic Health.
                </Heading>


            </VStack>


        </VStack>
    </Hero>
  )
}

export default HeroMemberDetail
