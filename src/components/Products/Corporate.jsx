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


function Corporate() {
  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     py="6rem"
    >
        <ContainerLayout>
            <VStack
             w="full"
             justify="center"
             align="center"
             gap="40px"
            >
                <MiniHeading
                    title="Corporate Health Plans"
                    content="Corporate/Formal Sector staff which cuts across different business segments such as Financial Institutions, IT, Media, Outsourcing, Manufacturing, power, oil and gas"
                    isCenter={true}
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

export default Corporate
