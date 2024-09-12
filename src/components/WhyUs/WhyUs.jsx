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


function WhyUs() {
  return (
    <Stack
        py="1rem"
        justify="start"
        align="start"
        direction="column"
        position="relative"
        bgImage="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Oceanic_health/pomrjhrrdmounu5jv5ru"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        minH={["full", "full", "700px"]}
        _before={{
            content: '" "',
            position: "absolute",
            inset: 0,
            bgColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1
        }}
    >
        <VStack
         w="full"
         justify="start"
         align="start"
         position="relative"
         zIndex={2}
        >
            <ContainerLayout>
                <SimpleGrid
                    w="full"
                    columns={[1, 1, 2]}
                    gap="40px"
                    justifyContent={["center", "center", "end"]}
                    alignItems={["center", "center", "end"]}
                    mt={["3rem", "3rem", "20rem"]}
                >
                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        bg="white"
                        py="2rem"
                        px="40px"
                        rounded="20px"
                        gap="20px"
                    >
                    <Text
                        fontSize={[28, 28, 32]}
                        fontWeight={600}
                        color="brand.200"
                        lineHeight="31.2px"
                        textTransform="uppercase"
                    >
                        Why Oceanic Health?
                    </Text>

                    <Heading
                        fontSize={16}
                        fontWeight={400}
                        color="brand.200"
                        lineHeight="24.59px"
                    >
                        We’re a team of top clinical leaders, technologists, and health care entrepreneurs from Nigeria Clinic.
                    </Heading>

                    <Link to={`/contact-us`}>
                        <Button
                            w="full"
                            rounded="full"
                            py="10px"
                            px="15px"
                            color="white"
                            bg="brand.200"
                            fontWeight={500}
                            fontSize={16}
                            lineHeight="20.91px"
                            textAlign="center"
                            cursor="pointer"
                            size="md"
                            _hover={{
                                bgColor: "brand.200"
                            }}
                        >
                            Join the team
                        </Button>
                
                    </Link>
                    </VStack>

                    <VStack w="full"/>
                </SimpleGrid>
            </ContainerLayout>
        </VStack>

    </Stack>
  )
}

export default WhyUs
