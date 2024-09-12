import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Image,
    Box,
    HStack,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
  } from "@chakra-ui/react";
  import { Link, NavLink, useLocation } from "react-router-dom";
import { SidebarData } from "../../data/SidebarData";
import assets from "../../assets";

  
  // eslint-disable-next-line react/prop-types
  export default function MobileNav({ isOpen, onClose }) {

  
    const location = useLocation();
    const match = location.pathname.match(/\/dashboard\/([^/]+)/);
    const id = match ? match[1] : null;

    
    return (
      <>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="brand.200">
            <DrawerCloseButton color="white"/>
            <DrawerHeader>
                <Link 
                    to="/" 
                    title="oceanic-health-logo"
                >

                    <HStack
                        w="full"
                        justify="start"
                        align="center"
                        gap="14px"
                    >
                        <Image
                            src={assets.logo}
                            alt="oceanic-health-logo"
                            bg="white"
                        />

                        <Text
                            fontFamily={16}
                            fontWeight={700}
                            color="white"
                            textTransform="uppercase"
                        >
                            Oceanic Health
                        </Text>
                    </HStack>
                </Link>
            </DrawerHeader>
  
            <DrawerBody mt="24px">
              <VStack mx="auto" py="12px" align="left" w="full" gap="10px">
                {SidebarData.map((item, i) => (
                  item.children ? (
                    <Accordion allowToggle key={i} w="full">
                      <AccordionItem border="none">
                        <AccordionButton
                          _expanded={{ bg: "white", color: "brand.200" }}
                          px="16px"
                          py="14px"
                          rounded="2xl"
                          color="white"
                        >
                          <HStack gap="14px" w="full" justify="space-between">
                            <HStack gap="14px" color="white">
                              {item.icon}
                              <Text>{item.title}</Text>
                            </HStack>
                            <AccordionIcon />
                          </HStack>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          {item.children.map((child, j) => (
                            <NavLink to={child.link} key={j} onClick={onClose}>
                              <Box
                                px="16px"
                                py="10px"
                                ml="32px"
                                rounded="2xl"
                                display="flex"
                                alignItems="center"
                                gap="10px"
                                _hover={{ bg: "alt.100", color: "black" }}
                                bg={location.pathname === child.link ? "alt.100" : ""}
                                color={location.pathname === child.link ? "black" : ""}
                              >
                                {child.icon}
                                <Text>{child.title}</Text>
                              </Box>
                            </NavLink>
                          ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <NavLink to={item.link} key={i}>
                      <Box
                        px="16px"
                        py="14px"
                        rounded="2xl"
                        w="full"
                        fontWeight={500}
                        _hover={{ bg: "white", color: "brand.200" }}
                        bg={id === item.id ? "white" : ""}
                        color={id === item.id ? "brand.200" : "white"}
                        onClick={onClose}
                      >
                        <HStack gap="14px">
                          {item.icon}
                          <Text>{item.title}</Text>
                        </HStack>
                      </Box>
                    </NavLink>
                  )
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  