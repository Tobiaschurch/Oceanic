import React from 'react';
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

function MemberCard({ name, occupation, content, image }) {
  return (
    <VStack
     w="full"
     justify="start"
     align="start"
     minH="260px"
     boxShadow="0 4px 0 8px rgba(50, 45, 123, 0.8)"
     rounded="10px"
     py="15px"
     px="10px"
     cursor="pointer"
     transition="all 0.3s ease-in-out"
     _hover={{
        transform: "scale(1.05)"
     }}
    >
        <VStack
         w="full"
         justify="center"
         align="center"
         minH="170px"
         overflow="hidden"
         rounded="10px"
        >
            <Image
             src={image}
             alt={`${name.toLowerCase()}-image`}
             w="full"
             h="full"
             objectFit="cover"
            />
        </VStack>

        <Link to={`/board-member/${name}`}>
            <VStack
                w="full"
                justify="start"
                align="start"
                gap="4px"
                role="group"
            >
                <Text
                    fontSize={18}
                    fontWeight={600}
                    color="brand.200"
                    lineHeight="24.59px"
                    _groupHover={{
                        color: "brand.100"
                    }}
                >
                    {name}
                </Text>

                <Text
                    fontSize={16}
                    fontWeight={400}
                    color="black"
                    lineHeight="19.12px"
                >
                {occupation}
                </Text>
            </VStack>
        </Link>

    </VStack>
  )
}

export default MemberCard
