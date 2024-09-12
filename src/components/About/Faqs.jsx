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
    VStack,
    Accordion, 
    AccordionButton, 
    AccordionItem, 
    AccordionPanel,
    HStack, 
} from '@chakra-ui/react';
import ContainerLayout from '../../ui/layouts/ContainerLayout';
import MiniHeading from '../../ui/MiniHeading';
import { FaqsData } from '../../data/FaqsData';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';


function Faqs() {
  return (
    <Stack
     py="6rem"
     w="full"
     justify="start"
     align="start"
    >
        <ContainerLayout>
            <MiniHeading
                title="FAQs"
                content="Explore our FAQs for quick and clear information about Oceanic Health's services and more."
                isCenter={true}
            />

            <VStack
             w="full"
             justify="start"
             align="start"
             mt="2rem"
            >
                <SimpleGrid
                    columns={1}
                    gap="20px"
                    w={["full", "full", "60%"]}
                    mx={["initial", "initial", "auto"]}
                    py="2rem"
                >
             {FaqsData.map((list, i) => (
                    <Accordion 
                        allowMultiple 
                        key={i}
                        _hover={{
                            bg: "transparent"
                        }}
                    >
                        <AccordionItem 
                            bg="white" 
                            rounded="20px" 
                            border="none"
                            p="10px"
                            shadow="0px 17px 17px 0px #0000001F"
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"   
                        >
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    <HStack
                                     w="full"
                                     justify="space-between"
                                     align="center"
                                    >
                                        <Text
                                            fontSize={[16, 16, 20]}
                                            fontWeight={400}
                                            lineHeight="28px"
                                            color="brand.200"
                                            textAlign="left"
                                        >
                                            {list.title}
                                        </Text>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' color="brand.200"/>
                                            ) : (
                                            <AddIcon fontSize='12px' color="brand.200"/>
                                        )}

                                    </HStack>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    <Text
                                        fontSize={16}
                                        fontWeight={400}
                                        lineHeight="28px"
                                        color="brand.200"
                                    >
                                        {list.content}
                                    </Text>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                    </Accordion>
            ))}


            </SimpleGrid>
                

            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default Faqs
