import React from 'react'
import { 
    Box, 
    Button, 
    Flex, 
    Heading, 
    HStack, 
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
import theme from '../../theme';
import { TestimonialData } from '../../data/TestimonialData';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
  return (
    <Stack
     py="3rem"
     w="full"
     justify="start"
     align="start"
    >
        <ContainerLayout>
            <VStack
                w="full"
                justify="center"
                align="center"
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
                    People love our services
                </Text>

                <Text
                    fontSize={[28, 32, 40]}
                    fontWeight={500}
                    color="brand.200"
                    lineHeight="31.2px"
                >
                    <Heading as="span" fontStyle="italic" fontWeight={300}>Do More</Heading>, Oceanic Health
                    
                </Text>
            </VStack>

            <SimpleGrid
             w="full"
             columns={[1, 1, 3]}
             gap="40px"
             py="3rem"
            >
                {TestimonialData.map((item, i) => (
                    <VStack
                     w="full"
                     justify="start"
                     align="start"
                     gap="30px"
                    >
                        <VStack
                         w="full"
                         h="250px"
                         overflow="hidden"
                         justify="center"
                         align="center"
                        >
                            <Image
                             w="full"
                             h="full"
                             src={item.image}
                             alt={`${item.name.toLowerCase()}-image`}
                             objectFit="cover"
                            />
                        </VStack>

                        <HStack 
                            w="full"
                            justify="start"
                            align="start" 
                        >
                            {[...Array(5)].map((_, index) => (
                             <Icon key={index} as={FaStar} color="brand.100" w={6} h={6} />
                            ))}
                            <Icon as={FaStar} color="gray.300" w={6} h={6} />
                        </HStack>

                        <VStack
                         w="full"
                         justify="start"
                         align="start"
                         gap="20px"
                        >
                            <Text
                                fontSize={14}
                                fontWeight={500}
                                fontFamily={theme.fonts.sourceCode}
                                color="brand.200"
                                lineHeight="22.4px"
                                textTransform="uppercase"
                                letterSpacing="0.54px"
                            >
                               {item.name}
                            </Text>

                            <Heading
                             fontSize={18}
                             fontWeight={400}
                             color="brand.200"
                             lineHeight="24.59px"
                            >
                                {item.content}
                            </Heading>

                        </VStack>

                    </VStack>
                ))}

            </SimpleGrid>

                 <VStack
                     w="full"
                     justify="center"
                     align="center"
                     mt="3rem"
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
                                Oceanic Health Management News and Insights
                            </Button>
                        </Link>

                    </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default Testimonials
