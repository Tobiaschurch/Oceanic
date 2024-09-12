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

function HeroAbout() {
  return (
    <Hero
     bgImg={assets.heroBgAbout}
     height="810px"
    >
        <SimpleGrid
          w="full"
          columns={[1, 1, 2]}
          gap="40px"
          justifyContent="center"
          alignItems="center"
          py="10rem"
        >
            <VStack
             w="full"
             justify="start"
             align="start"
             gap="40px"
             data-aos="slide-right"
             data-aos-duration="1000"
             data-aos-delay="500"
            >
                <Text
                 fontSize={[32, 44, 44]}
                 fontWeight={800}
                 lineHeight="60px"
                 textTransform="uppercase"
                 color="white"
                >
                  Transforming Health, Transforming Lives
                </Text>

                <Text
                 fontSize={[18, 18, 20]}
                 fontWeight={500}
                 lineHeight="24.59px"
                 color="white"
                >
                   Discover our commitment to excellence in healthcare, innovation, and community well-being.
                </Text>


            </VStack>

            <VStack
             w="full"
             justify={["start", "start", "end"]}
             align={["start", "start", "end"]}
            >
                <Image
                 w={["full", "full", "70%"]}
                 h="full"
                 src={assets.heroImg2}
                 alt="hero-image"
                />

            </VStack>

        </SimpleGrid>
    </Hero>
  )
}

export default HeroAbout
