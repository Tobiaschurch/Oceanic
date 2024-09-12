import React from 'react'
import { 
    Box, 
    Button, 
    Flex, 
    Heading, 
    Icon, 
    Image, 
    SimpleGrid, 
    Stack, 
    Text, 
    VStack 
} from '@chakra-ui/react';
import ContainerLayout from '../../ui/layouts/ContainerLayout';
import MiniHeading from '../../ui/MiniHeading';
import { Link } from 'react-router-dom';
import CtaButton from '../../ui/CtaButton';
import { handleScroll } from '../../utils/helper';


function Pricing() {
  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     py="6rem"
     bgImg="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Oceanic_health/uxabdyvuszodjhdvwvqx"
     bgSize="cover"
     bgPos="center"
     bgRepeat="no-repeat"
    >
        <ContainerLayout>
            <VStack
             w="full"
             justify="center"
             align="center"
             gap="40px"
            >
                <MiniHeading
                    title="Our Pricing"
                    content="We have seasoned professionals and 24 hours contact centre ready to attend to your needs"
                    isCenter={true}
                    color="white"
                />

                <CtaButton
                    btnText="View Plans"
                    isLink={false}
                    handleClick={handleScroll("section-product")}
                    bgColor="brand.100"
                    color="brand.200"
                />
            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default Pricing
