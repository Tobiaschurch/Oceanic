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

function HeroContact() {
  return (
    <Hero
     bgImg={assets.heroBgContact}
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
                  Contact Us
                </Text>

                <Heading
                 fontSize={[18, 18, 20]}
                 fontWeight={300}
                 fontStyle="italic"
                 lineHeight="31.2px"
                 color="white"
                 textAlign="center"
                >
                   We're here to help you with any questions or support you need. Reach out to us today!
                </Heading>

                <CtaButton
                    btnText="Send Us a Message"
                    isLink={false}
                    handleClick={handleScroll("section-contact")}
                    url="/contact-us"
                    bgColor="brand.100"
                    color="brand.200"
                />

            </VStack>


        </VStack>
    </Hero>
  )
}

export default HeroContact
