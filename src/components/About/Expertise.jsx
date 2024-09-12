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
import theme from '../../theme';
import { ExpertiseData } from '../../data/ExpertiseData';


function Expertise() {
  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     py="6rem"
     bgGradient="linear-gradient(180deg, #FAFAFB 0%, #FFF6D8 100%)"
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
                    rounded="20px"
                    gap="15px"
                >
                    <Text
                        fontSize={14}
                        fontWeight={500}
                        fontFamily={theme.fonts.sourceCode}
                        color="brand.200"
                        lineHeight="22.4px"
                        border="1px solid"
                        borderColor="brand.800"
                        textTransform="uppercase"
                        letterSpacing="0.63px"
                        p="6px"
                        bg="white"
                        rounded="full"
                    >
                       The Oceanic Health Management difference
                    </Text>

                    <Text
                        fontSize={[28, 32, 40]}
                        fontWeight={500}
                        color="brand.200"
                        lineHeight="31.2px"
                    >
                       Driven by <Heading as="span" fontStyle="italic" fontWeight={300}>clinical expertise</Heading>, enabled by technology
                        
                    </Text>
                </VStack>

                <VStack
                 w="full"
                 justify="center"
                 align="center"
                 data-aos="slide-left"
                 data-aos-duration="1000"
                >

                    <Image
                     src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Oceanic_health/ql7fcagjupiyqjl6jeyk"
                     alt="expertise-image"
                     w="full"
                     h="full"
                    />

                </VStack>

            </SimpleGrid>

            <SimpleGrid
                w="full"
                columns={[1, 1, 3]}
                gap="30px"
                my="2rem"
            >
                {ExpertiseData.map((item, i) => (
                    <VStack
                     key={i}
                     w="full"
                     justify="start"
                     align="start"
                     gap="20px"
                     bg="white"
                     p="20px"
                     minH="200px"
                     rounded="20px"
                    >
                        <Box
                         w="20px"
                         h="20px"
                         bgColor="brand.200"
                        />

                        <VStack
                            w="full"
                            justify="start"
                            align="start"
                            rounded="20px"
                            gap="10px"
                        >
                            <Text
                                fontSize={18}
                                fontWeight={600}
                                color="brand.200"
                                lineHeight="31.2px"
                            >
                                {item.title}
                            </Text>

                            <Text
                                fontSize={16}
                                fontWeight={400}
                                color="brand.200"
                                lineHeight="24.59px"
                            >
                             {item.content}
                                
                            </Text>
                        </VStack>

                    </VStack>
                ))}

            </SimpleGrid>
        </ContainerLayout>

    </Stack>
  )
}

export default Expertise
