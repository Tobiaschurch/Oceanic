import React from 'react'
import { 
    Box, 
    Button, 
    Divider, 
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
import { Link } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import ScrollElement from '../ScrollToTop/ScrollElement';
import { NewPricingData } from '../../data/NewPricingData';

function PricingPlans() {
  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     py="6rem"
    >
            <ContainerLayout>
                <VStack
                    w={["full", "full", "70%"]}
                    mx={["initial", "initial", "auto"]}
                    justify="center"
                    align="center"
                    gap="40px"
                >
                <ScrollElement name="section-product">
                    <SimpleGrid
                        w="full"
                        columns={[1, 1, 2]}
                        gap="60px"
                    >
                        {NewPricingData.map((item, i) => (
                            <VStack
                                key={i}
                                justify="start"
                                align="start"
                                gap="30px"
                                overflow="hidden"
                                rounded="20px"
                                boxShadow="0 0 8px rgba(0,0,0,0.6)"
                                py="40px"
                                px="30px"
                                minH="550px"
                                bgColor={(i === 1 || i === 2) ? "brand.200" : "white"}
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <VStack
                                w="full"
                                justify="start"
                                align="start"
                                gap="20px"
                                >
                                    <Text
                                    fontSize={[20, 20, 24]}
                                    fontWeight={600}
                                    lineHeight="24.59px"
                                    color={(i === 1 || i === 2) ? "white" : "brand.200"}
                                    >
                                    {item.name}
                                    </Text>


                                </VStack>


                                <Divider
                                borderColor={(i === 1 || i === 2) ? "white" : "brand.200"}
                                />

                                <VStack
                                w="full"
                                justify="start"
                                align="start"
                                gap="20px"
                                >
                                    {item.packageBenefits.map((benefit) => (
                                        <HStack
                                        w="full"
                                        justify="start"
                                        align="center"
                                        gap="10px"
                                        >
                                            <Icon
                                            as={FaCircleCheck}
                                            w={6}
                                            h={6}
                                            color="#80ff80"
                                            />

                                            <Text
                                                fontSize={14}
                                                fontWeight={400}
                                                lineHeight="24.59px"
                                                color={(i === 1 || i === 2) ? "white" : "brand.200"}
                                            >
                                            {benefit}
                                            </Text>

                                        </HStack>
                                    ))}

                                </VStack>

                                <VStack
                                w="full"
                                justify="center"
                                align="center"
                                pt="20px"
                                >
                                    <Link 
                                        to={`/plans/${item.id}`}
                                        target="_blank"
                                    >
                                        <Button
                                            w="full"
                                            rounded="10px"
                                            py="20px"
                                            px="30px"
                                            color={(i === 1 || i === 2) ? "brand.200" : "white"}
                                            bg={(i === 1 || i === 2) ? "white" : "brand.200"}
                                            _hover={{
                                                shadow: "0 0 8px rgba(0,0,0,0.6)"
                                            }}
                                            fontWeight={700}
                                            fontSize={16}
                                            lineHeight="20.91px"
                                            textAlign="center"
                                            cursor="pointer"
                                            size="lg"
                                        >
                                            Learn More
                                        </Button>
                                
                                    </Link>
                                </VStack>


                            </VStack>
                        ))}

                    </SimpleGrid>
                </ScrollElement>
                </VStack>
            </ContainerLayout>

    </Stack>
  )
}

export default PricingPlans
