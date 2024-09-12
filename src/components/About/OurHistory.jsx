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


function OurHistory() {
  return (
    <Stack
     py="4rem"
     w="full"
     justify="start"
     align="start"
    >
        <ContainerLayout>
            <MiniHeading
                title="Our History"
                content="Empowering you to achieve your best health through personalized care and expert guidance"
                isCenter={true}
            />

            <VStack
             w={["full", "full", "80%"]}
             mx={["initial", "initial", "auto"]}
             justify="start"
             align="start"
             gap="20px"
             mt="4rem"
            >
                <Text
                 fontSize={[20, 20, 24]}
                 fontWeight={500}
                 color="brand.200"
                 lineHeight="31.2px"
                 textAlign={["initial", "initial", "center"]}
                >
                    Oceanic Health Management Limited was established and licensed by the NHIS in 2007 for the provision of managed health care to the Nigerian public with a share capital of N400,000,000 (Four Hundred Million Naira) fully paid. 
 
                </Text>


                <Text
                 fontSize={[20, 20, 24]}
                 fontWeight={500}
                 color="brand.200"
                 lineHeight="31.2px"
                 textAlign={["initial", "initial", "center"]}
                >
                    As a partner, Oceanic Health is recognized as a front liner in providing managed healthcare services. It has always been our mantra to exhibit a deep sense of responsibility in the course of delivering our services. Therefore, we are strategically positioned to provide quality healthcare services to all segments of the society. 
 
                </Text>
            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default OurHistory
