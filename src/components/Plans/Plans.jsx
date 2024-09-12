import React from 'react'
import { 
    Box, 
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
import { PlansData } from '../../data/PlansData';
import PlansCard from './PlansCard';
import MiniHeading from '../../ui/MiniHeading';


function Plans() {
  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     gap="40px"
     py="6rem"
    >
        <ContainerLayout>

            <MiniHeading
             title="Our Services - What We Deliver"
             content="No matter your occupation, income, location, or family size we have a suitable benefit plan that will cater to your needs."
             isCenter={true}
            />

            <SimpleGrid
             w={["full", "full", "80%"]}
             mx={["initial", "initial", "auto"]}
             columns={[1, 1, 2]}
            //  columns={[1, 2, 3]}
             gap="20px"
             py="4rem"
            >
                {PlansData.map((item, i) => (
                    <PlansCard
                     key={i}
                     {...item}
                    />
                ))}

            </SimpleGrid>
        </ContainerLayout>

    </Stack>
  )
}

export default Plans
