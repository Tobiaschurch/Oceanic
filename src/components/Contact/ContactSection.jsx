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
import ContactForm from './ContactForm';
import { ContactData, socialLinks } from '../../data/ContactData';
import { FaLocationDot } from "react-icons/fa6";
import CtaButton from '../../ui/CtaButton';
import { Link } from 'react-router-dom';
import ScrollElement from '../ScrollToTop/ScrollElement';


function ContactSection() {

    const openInNewTab = (url) => {
        window.open(url, '_blank');
    };

  return (
    <Stack
     py="8rem"
     justify="start"
     align="start"
    >
        
        <ContainerLayout>

            <ScrollElement name="section-contact">
                <SimpleGrid
                    w="full"
                    columns={[1, 1, 2]}
                    gap="40px"
                >
                    <VStack
                    w="full"
                    justify="start"
                    align="start"
                    gap="30px"
                    >

                        <VStack
                            w="full"
                            justify="start"
                            align="start"
                            gap="10px"
                            mb="2rem"
                        >
                            <Text
                                fontSize={[28, 28, 32]}
                                fontWeight={700}
                                lineHeight="24.59px"
                                color="brand.200"
                                textTransform="uppercase"
                            >
                                Get In Touch
                            </Text>

                            <Heading
                                fontSize={[20, 20, 24]}
                                fontWeight={300}
                                fontStyle="italic"
                                lineHeight="24.59px"
                                color="brand.200"
                            >
                                For assistance or inquiries, we're here to help.
                            </Heading>

                        </VStack>

                        <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="40px"
                        >
                            {socialLinks.map((item, i) => (
                                <HStack
                                    key={i}
                                    w="full"
                                    justify="start"
                                    align="start"
                                    gap="20px"
                                    wrap={["wrap", "wrap", "nowrap"]}
                                >
                                    <Link
                                        href={item.path}
                                        _hover={{
                                            textDecoration: "none"
                                        }}
                                        role="group"
                                    >
                                        <Box
                                            w="40px"
                                            h="40px"
                                            bg="brand.200"
                                            py="10px"
                                            px="10px"
                                            rounded="10px"
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            flexDirection="column"
                                            _groupHover={{
                                                bg: "white",
                                            }}
                                        >
                                        <Icon
                                            as={item.icon}
                                            w={5}
                                            h={5}
                                            color="white"
                                            _groupHover={{
                                            color: "brand.200",
                                            }}
                                        />
                                        </Box>
                                    
                                    </Link>

                                    <VStack
                                    w="full"
                                    justify="start"
                                    align="start"
                                    gap="6px"
                                    >
                                        <Text
                                        fontSize={[18, 18, 20]}
                                        fontWeight={700}
                                        lineHeight="24.59px"
                                        color="brand.200"
                                        >
                                            {item.display}
                                        </Text>

                                        <Text
                                        fontSize={[16, 16, 18]}
                                        fontWeight={400}
                                        lineHeight="24.59px"
                                        color="brand.200"
                                        >
                                            {item.content}
                                        </Text>

                                    </VStack>

                                </HStack>
                            ))}
                            
                        </VStack>


                    </VStack>

                    <ContactForm/>

                </SimpleGrid>
            </ScrollElement>

            <VStack
             w="full"
             justify="center"
             align="center"
             pt="5rem"
             gap="60px"
            >
                <MiniHeading
                    title="Locate our Regional Offices"
                    content="Visit any of our offices at any of these locations"
                    isCenter={true}
                />

                <SimpleGrid
                 w="full"
                 columns={[1, 2, 3]}
                 gap="40px"
                >
                    {ContactData.map((item, i) => (
                        <VStack
                         key={i}
                         w="full"
                         justify="start"
                         align="start"
                         gap="20px"
                         minH="400px"
                         bg="white"
                         py="20px"
                         px="15px"
                         boxShadow="0 0 8px rgba(0, 0, 0, 0.7)"
                         rounded="20px"
                         data-aos="slide-up"
                         data-aos-duration="1000"
                        >
                            <VStack
                             w="full"
                             h="220px"
                             overflow="hidden"
                             rounded="20px"
                            >
                                <iframe src={item.map} width="100%" height="220" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>

                            </VStack>

                            <VStack
                             w="full"
                             justify="start"
                             align="start"
                            >
                                <Text
                                 fontSize={20}
                                 fontWeight={700}
                                 lineHeight="24px"
                                 color="brand.200"
                                >
                                    {item.name}
                                </Text>
                            </VStack>

                            <HStack
                             w="full"
                             justify="start"
                             align="start"
                             gap="10px"
                            >
                                <Icon
                                 as={FaLocationDot}
                                 w={6}
                                 h={6}
                                 color="brand.200"
                                />

                                <Heading
                                 fontSize={16}
                                 fontWeight={400}
                                 fontStyle="italic"
                                 color="brand.200"
                                >
                                    {item.address}
                                </Heading>

                            </HStack>

                            <CtaButton
                                btnText="Tour on Maps"
                                isLink={false}
                                handleClick={() => openInNewTab(item.map)}
                                bgColor="brand.100"
                                color="brand.200"
                            />

                        </VStack>
                    ))}

                </SimpleGrid>


            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default ContactSection
