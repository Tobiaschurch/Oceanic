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
import { Link } from 'react-router-dom';


function PlansCard({ image, title, content, category }) {
  return (
    <VStack
     role="group"
     data-aos="zoom-in-up"
     data-aos-duration="1000"
     w="full"
     cursor="pointer"
    >
        <VStack
          minH="433px"
          justify="space-between"
          w="full"
          align="start"
          overflow="hidden"
          rounded="10px"
          bgImg={image}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          position="relative"
          gap="50px"
          p="20px"
          transition="all 0.5s ease-in-out"
          _before= {{
            content: '" "',
            position: "absolute",
            inset: 0,
            bgColor: "rgba(50, 45, 123, 0.6)",
            zIndex: 1 
        }}
        >
            <VStack
             w="full"
             justify="start"
             align="start"
             zIndex={2}
            >
                <Text
                 fontSize={16}
                 fontWeight={500}
                 color="white"
                 textTransform="uppercase"
                >
                    {category}
                </Text>

            </VStack>

            <VStack
             w="full"
             justify="start"
             align="start"
             gap="10px"
             zIndex={2}
            >
                <Text
                 fontSize={18}
                 fontWeight={500}
                 color="white"
                 textTransform="uppercase"
                >
                    {title}
                </Text>

                <Heading
                  fontSize={16}
                  fontWeight={500}
                  color="brand.100"
                  display="none"
                  _groupHover={{
                    display: "initial"
                 }}
                >
                  Explore the specifics of {title} in detail. Understand the benefits and services available to you
                </Heading>

                <VStack>
                 <Link
                    target="_blank" 
                    to={`/plans/${title}`}
                >
                    <Button
                        w="full"
                        rounded="10px"
                        py="10px"
                        px="15px"
                        color="brand.200"
                        bg="brand.100"
                        _hover={{
                            bg: "brand.200",
                            color: "white"
                        }}
                        fontWeight={700}
                        fontSize={16}
                        lineHeight="20.91px"
                        textAlign="center"
                        cursor="pointer"
                        size="md"
                        textTransform="uppercase"
                    >
                        Learn More
                    </Button>
            
                </Link>
            </VStack>

            </VStack>

            

        </VStack>

    </VStack>
  )
}

export default PlansCard
