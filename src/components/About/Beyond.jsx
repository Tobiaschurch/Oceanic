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

function Beyond() {
  return (
    <Stack
     py="8rem"
     w="full"
     justify="start"
     align="start"
     bgGradient="linear-gradient(102.11deg, #FFF6D8 27.97%, #BAB7E7 87.22%)"
    >
        <ContainerLayout>
            <SimpleGrid
                w="full"
                columns={[1, 1, 2]}
                gap="60px"
            >
                <VStack
                 w="full"
                 justify="start"
                 align="start"
                 gap="40px"
                >
                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        rounded="20px"
                        gap="15px"
                    >
                        <Text
                            fontSize={[28, 28, 32]}
                            fontWeight={600}
                            color="brand.200"
                            lineHeight="31.2px"
                        >
                            Beyond
                        </Text>

                        <Heading
                            fontSize={[28, 28, 32]}
                            fontWeight={300}
                            color="brand.200"
                            lineHeight="31.2px"
                        >
                            Remote patient <br/> monitoring
                            
                        </Heading>
                    </VStack>


                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        rounded="20px"
                        gap="10px"
                    >
                        <Text
                            fontSize={[16, 16, 18]}
                            fontWeight={500}
                            color="brand.200"
                            lineHeight="31.2px"
                        >
                            Oceanic Health Management delivers effective chronic disease management, better health outcomes, and financial ROI at scale.
                        </Text>
                    </VStack>

                    <VStack
                     w="full"
                     justify="start"
                     align="start"
                    >
                        <Link to={`/contact-us`}>
                            <Button
                                w="full"
                                rounded="full"
                                py="10px"
                                px="15px"
                                color="white"
                                bg="brand.200"
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
                                Connect with Oceanic Health Management
                            </Button>
                        </Link>

                    </VStack>

                </VStack>


                    <VStack
                     w="full"
                     justify="space-around"
                     align="start"
                     gap="20px"
                     position="relative"
                    >
                        <Image
                          src='https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Oceanic_health/ghkstii43jqcmzo8kkpg'
                          alt="about-image"
                          w="70%"
                          h="300px"
                          position="absolute"
                          top="0%"
                          right="0px"
                          bottom={0}
                          margin="auto"
                          objectFit="cover"
                          border="11px solid"
                          borderColor="brand.200"
                          rounded="32px"
                          data-aos="slide-left"
                          data-aos-duration="1000"
                        />

                        <Image
                          src='https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Oceanic_health/lu7zzhqcy7w5yspxpnsi'
                          alt="about-image"
                          w="70%"
                          h="300px"
                          objectFit="cover"
                          border="11px solid"
                          borderColor="brand.100"
                          rounded="32px"
                          position="absolute"
                          top="90%"
                          left="0px"
                          bottom={0}
                          margin="auto"
                          data-aos="slide-left"
                          data-aos-duration="2000"
                        />

                    </VStack>

            </SimpleGrid>
        </ContainerLayout>

    </Stack>
  )
}

export default Beyond
