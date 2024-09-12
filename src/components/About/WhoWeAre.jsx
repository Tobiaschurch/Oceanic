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
import { WeAreData } from '../../data/WeAreData';

function WhoWeAre() {
  return (
   <Stack
    py="6rem"
    w="full"
    justify="start"
    align="start"

   >
        <ContainerLayout>
            <MiniHeading
                title="Who We Are"
                content="Discover the key reasons that set us apart in delivering exceptional healthcare."
                isCenter={true}
            />

            <SimpleGrid
             w={["full", "full", "70%"]}
             mx={["initial", "initial", "auto"]}
             columns={[1, 1, 2]}
             gap="40px"
             mt={["2rem", "2rem", "4rem"]}
            >
                {WeAreData.map((item, i) => (
                    <VStack
                     key={i}
                     justify="center"
                     align="center"
                     bg="brand.200"
                     minH="400px"
                     rounded="20px"
                     overflow="hidden"
                     gap="40px"
                     p="20px"
                     boxShadow="0 0 8px rgba(50, 45, 123, 0.98)"
                     data-aos="fade-up-right"
                     data-aos-duration="1000"
                    >
                        <VStack
                         w="60px"
                         h="60px"
                         justify="center"
                         align="center"
                         p="10px"
                         rounded="4px"
                         bg="white"
                        >
                            <Icon
                             as={item.icon}
                             w={8}
                             h={8}
                             color="brand.200"
                            />
                        </VStack>

                        <VStack
                            w="full"
                            justify="center"
                            align="center"
                            gap="15px"
                        >
                            <Text
                                fontSize={[22, 22, 24]}
                                fontWeight={600}
                                color="white"
                                lineHeight="31.2px"
                                textAlign="center"
                            >
                                {item.title}
                            </Text>

                            <Heading
                                fontSize={18}
                                fontWeight={400}
                                fontStyle="italic"
                                color="white"
                                lineHeight="31.2px"
                                textAlign="center"
                            >
                                {item.content}
                            </Heading>
                        </VStack>

                    </VStack>
                ))}

            </SimpleGrid>
        </ContainerLayout>

   </Stack>
  )
}

export default WhoWeAre
