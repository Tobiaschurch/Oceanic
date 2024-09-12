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


function Connect() {
  return (
   <Stack
    w="full"
    justify="start"
    align="start"
    py="6rem"
    bg="white"
   >

    <ContainerLayout>
        <VStack
          w={["full", "full", "90%"]}
          mx={["initial", "initial", "auto"]}
          py="4rem"
          rounded="20px"
          bgGradient="linear-gradient(121deg, rgba(50,45,123,1) 7%, rgba(0,0,0,0.8827906162464986) 67%, rgba(95,87,193,1) 100%, rgba(0,0,0,0.7931547619047619) 100%)"
          boxShadow=" 0px 4px 6px -1px #0000001A"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >

        <VStack
            w="full"
            justify="start"
            align="start"
            px="40px"
            rounded="20px"
            gap="30px"
        >
        <Text
            fontSize={[28, 28, 32]}
            fontWeight={600}
            color="white"
            lineHeight="31.2px"
            textTransform="uppercase"
        >
           Connect With Us Today!
        </Text>

        <Heading
            fontSize={16}
            fontWeight={300}
            color="white"
            lineHeight="24.59px"
        >
            Connect with Oceanic Health Management to experience unparalleled support and expertise in healthcare solutions. Our dedicated team is here to assist you in navigating your path to optimal health and wellness.
        </Heading>

        <Link to={`/contact-us`}>
            <Button
                w="full"
                rounded="full"
                py="10px"
                px="15px"
                color="brand.200"
                bg="white"
                fontWeight={600}
                fontSize={16}
                lineHeight="20.91px"
                textAlign="center"
                cursor="pointer"
                size="lg"
                _hover={{
                    bg: "white",
                    color: "brand.200",
                    border: "1px solid",
                    borderColor: "brand.200"
                }}
            >
                Send Us a Message
            </Button>
        </Link>
        </VStack>
        </VStack>
    </ContainerLayout>

   </Stack>
  )
}

export default Connect
