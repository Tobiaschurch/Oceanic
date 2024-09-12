import React from 'react'
import { 
    Box, 
    Button, 
    Divider, 
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
import { QualityData } from '../../data/QualityData';
import { Link } from 'react-router-dom';

function Quality() {
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
                    w="full"
                    justify="center"
                    align="center"
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
                       Four conditions, one objective
                    </Text>

                    <MiniHeading
                        title="A better quality of life"
                        content="everyday."
                        isCenter={true}
                    />
                </VStack>

                <VStack
                 w={["full", "full", "60%"]}
                 mx={["initial", "initial", "auto"]}
                 justify="center"
                 align="center"
                 py="4rem"
                >
                    <SimpleGrid
                     w="full"
                     columns={[1, 1, 2]}
                     gap="60px"
                    >
                        {QualityData.map((item, i) => (
                            <VStack
                             w="full"
                             justify="start"
                             align="start"
                             gap="30px"
                             overflow="hidden"
                             roundedTop="20px"
                            >
                                <VStack
                                 w="full"
                                 h="200px"
                                 justify="center"
                                 align="center"
                                 overflow="hidden"
                                >
                                    <Image
                                     src={item.image}
                                     alt={`${item.title.toLowerCase()}-image`}
                                     w="full"
                                     h="full"
                                     objectFit="cover"
                                    />

                                </VStack>

                                <VStack
                                    w="full"
                                    justify="start"
                                    align="start"
                                    rounded="20px"
                                    gap="10px"
                                >
                                    {item.isDeveloped && (
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
                                        In Development
                                        </Text>
                                    )}
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

                               {item.comment.length > 0 && 
                                (
                                    <Divider 
                                        borderColor="brand.200"
                                    />)}

                                <VStack
                                    w="full"
                                    justify="start"
                                    align="start"
                                    rounded="20px"
                                    gap="10px"
                                >

                                    <Text
                                        fontSize={14}
                                        fontWeight={500}
                                        fontFamily={theme.fonts.sourceCode}
                                        color="brand.200"
                                        lineHeight="22.4px"
                                        letterSpacing="0.54px"
                                    >
                                    {item.comment}
                                        
                                    </Text>
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
                                Oceanic Health Management for patients
                            </Button>
                        </Link>

                    </VStack>

                </VStack>

                
        </ContainerLayout>

    </Stack>
  )
}

export default Quality
