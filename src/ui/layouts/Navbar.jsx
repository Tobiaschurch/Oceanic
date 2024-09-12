// import React, { useEffect, useState } from 'react';
// import { 
//     Box, 
//     Flex, 
//     HStack, 
//     Image, 
//     Text, 
//     VStack,
//     Drawer,
//     DrawerBody,
//     DrawerContent,
//     DrawerOverlay,
//     DrawerCloseButton, 
//     useBreakpointValue,
//     useDisclosure, 
// } from "@chakra-ui/react";
// import { NavLink, Link, useLocation } from 'react-router-dom';
// import { NavbarData } from '../../data/NavbarData';
// import { IoMenu } from "react-icons/io5";
// import CtaButton from '../CtaButton';
// import ContainerLayout from './ContainerLayout';
// import assets from '../../assets';

// function Navbar() {
//     const location = useLocation();
//     const id = location.pathname.split("/")[1];
//     const isDesktop = useBreakpointValue({ base: false, lg: true });
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     return (
//         <>
//             {isDesktop ? (

//                 <Box position="fixed" top="0" w="full" zIndex={9999}>
//                     <ContainerLayout>
//                         <Flex
//                             w="full"
//                             justify="space-between"
//                             align="center"
//                             gap="20px"
//                             bg="white"
//                             rounded="10px"
//                             boxShadow=" 0px 4px 6px -1px #0000001A"
//                             p="20px"
//                         >
//                             <Link 
//                                 to="/" 
//                                 title="oceanic-health-logo"
//                             >

//                             <HStack
//                             w="full"
//                             justify="start"
//                             align="center"
//                             gap="14px"
//                             >
//                                 <Image
//                                     src={assets.logo}
//                                     alt="oceanic-health-logo"
//                                 />

//                                 <Text
//                                 fontFamily={16}
//                                 fontWeight={700}
//                                 color="brand.200"
//                                 textTransform="uppercase"
//                                 >
//                                 Oceanic Health
//                                 </Text>
//                             </HStack>
//                             </Link>

//                             <HStack gap="30px" justify="center" align="center">
//                                 {NavbarData.map((item) => (
//                                     <NavLink key={item.id} to={item.path}>
//                                         <Text
//                                             fontSize={18}
//                                             fontWeight={600}
//                                             color={id === item.path.slice(1) ? "brand.100" : "brand.200"}
//                                             _hover={{ color: "brand.100" }}
//                                         >
//                                             {item.display}
//                                         </Text>
//                                     </NavLink>
//                                 ))}
//                             </HStack>

//                             <HStack gap="20px" justify="center" align="center">
//                                 {/* <CtaButton
//                                     btnText="Sign Up"
//                                     isLink={true}
//                                     url="/sign-up"
//                                     bgColor="brand.100"
//                                     color="brand.200"
//                                 /> */}

                                
//                                 <CtaButton
//                                     btnText="Sign In"
//                                     isLink={true}
//                                     url="/sign-in"
//                                     bgColor="brand.200"
//                                     color="white"
//                                 />

//                             </HStack>


                            
//                         </Flex>
//                     </ContainerLayout>
//                 </Box>
//             ) : (
//                 <Box position="fixed" top="0" w="full" zIndex={9999}>
//                     <ContainerLayout>
//                         <Flex
//                             w="full"
//                             justify="space-between"
//                             align="center"
//                             gap="20px"
//                             bg="white"
//                             rounded="10px"
//                             boxShadow=" 0px 4px 6px -1px #0000001A"
//                             p="20px"
//                         >
//                             <Link 
//                                 to="/" 
//                                 title="oceanic-health-logo"
//                             >

//                             <HStack
//                             w="full"
//                             justify="start"
//                             align="center"
//                             gap="14px"
//                             >
//                                 <Image
//                                     src={assets.logo}
//                                     alt="oceanic-health-logo"
//                                 />

//                                 <Text
//                                 fontFamily={16}
//                                 fontWeight={700}
//                                 color="brand.200"
//                                 textTransform="uppercase"
//                                 >
//                                 Oceanic Health
//                                 </Text>
//                             </HStack>
//                             </Link>

//                             <VStack>
//                                 <Box
//                                     w="36px"
//                                     h="36px"
//                                     p="4px"
//                                     rounded="8px"
//                                     display="flex"
//                                     justifyContent="center"
//                                     alignItems="center"
//                                     flexDirection="column"
//                                     bg="brand.200"
//                                     cursor="pointer"
//                                 >
//                                     <IoMenu size={36} color="white" onClick={onOpen} />
//                                 </Box>
//                             </VStack>
//                         </Flex>

//                         <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
//                             <DrawerOverlay />
//                             <DrawerContent>
//                                 <DrawerCloseButton />
//                                 <DrawerBody>
//                                     <VStack mt="40px" w="full" gap="25px" justify="start" align="start">
//                                     {NavbarData.map((item) => (
//                                         <NavLink key={item.id} to={item.path}>
//                                             <Text
//                                                 fontSize={18}
//                                                 fontWeight={600}
//                                                 color={id === item.path.slice(1) ? "brand.100" : "brand.200"}
//                                                 _hover={{ color: "brand.100" }}
//                                             >
//                                                 {item.display}
//                                             </Text>
//                                         </NavLink>
//                                     ))}
//                                         <VStack 
//                                             gap="20px" 
//                                             justify="center" 
//                                             align="center"
//                                         >
//                                             {/* <CtaButton
//                                                 btnText="Sign Up"
//                                                 isLink={true}
//                                                 url="/sign-up"
//                                                 bgColor="brand.100"
//                                                 color="brand.200"
//                                             /> */}

                                            
//                                             <CtaButton
//                                                 btnText="Sign In"
//                                                 isLink={true}
//                                                 url="/sign-in"
//                                                 bgColor="brand.200"
//                                                 color="white"
//                                             />

//                                         </VStack>
//                                     </VStack>
//                                 </DrawerBody>
//                             </DrawerContent>
//                         </Drawer>

//                     </ContainerLayout>
//                 </Box>
//             )}
//         </>
//     )
// }

// export default Navbar;

import React from 'react';
import { 
    Box, 
    Flex, 
    HStack, 
    Image, 
    Text, 
    VStack,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton, 
    useBreakpointValue,
    useDisclosure, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from "@chakra-ui/react";
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NavbarData } from '../../data/NavbarData';
import { IoMenu } from "react-icons/io5";
import { ChevronDownIcon } from '@chakra-ui/icons';  // Icon for dropdown
import CtaButton from '../CtaButton';
import ContainerLayout from './ContainerLayout';
import assets from '../../assets';

function Navbar() {
    const location = useLocation();
    const id = location.pathname.split("/")[1];
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {isDesktop ? (
                <Box position="fixed" top="0" w="full" zIndex={9999}>
                    <ContainerLayout>
                        <Flex
                            w="full"
                            justify="space-between"
                            align="center"
                            gap="20px"
                            bg="white"
                            rounded="10px"
                            boxShadow="0px 4px 6px -1px #0000001A"
                            p="20px"
                        >
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
                                    />

                                    <Text
                                        fontSize={16}
                                        fontWeight={700}
                                        color="brand.200"
                                        textTransform="uppercase"
                                    >
                                        Oceanic Health
                                    </Text>
                                </HStack>
                            </Link>

                            <HStack gap="30px" justify="center" align="center">
                                {NavbarData.map((item) => (
                                    item.subMenu ? (
                                        <Menu key={item.id}>
                                            <MenuButton 
                                                as={Button} 
                                                rightIcon={<ChevronDownIcon />}
                                                background="transparent"
                                                _hover={{ color: "brand.100" }}
                                                _expanded={{ color: "brand.100" }}
                                            >
                                                {item.display}
                                            </MenuButton>
                                            <MenuList>
                                                {item.subMenu.map((subItem, idx) => (
                                                    <MenuItem 
                                                        key={idx} 
                                                        as={Link} 
                                                        to={subItem.path}
                                                    >
                                                        {subItem.display}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </Menu>
                                    ) : (
                                        <NavLink key={item.id} to={item.path}>
                                            <Text
                                                fontSize={18}
                                                fontWeight={600}
                                                color={id === item.path.slice(1) ? "brand.100" : "brand.200"}
                                                _hover={{ color: "brand.100" }}
                                            >
                                                {item.display}
                                            </Text>
                                        </NavLink>
                                    )
                                ))}
                            </HStack>

                            <HStack gap="20px" justify="center" align="center">
                                <CtaButton
                                    btnText="Sign In"
                                    isLink={true}
                                    url="/sign-in"
                                    bgColor="brand.200"
                                    color="white"
                                />
                            </HStack>
                        </Flex>
                    </ContainerLayout>
                </Box>
            ) : (
                <Box position="fixed" top="0" w="full" zIndex={9999}>
                    <ContainerLayout>
                        <Flex
                            w="full"
                            justify="space-between"
                            align="center"
                            gap="20px"
                            bg="white"
                            rounded="10px"
                            boxShadow=" 0px 4px 6px -1px #0000001A"
                            p="20px"
                        >
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
                                    />

                                    <Text
                                        fontSize={16}
                                        fontWeight={700}
                                        color="brand.200"
                                        textTransform="uppercase"
                                    >
                                        Oceanic Health
                                    </Text>
                                </HStack>
                            </Link>

                            <VStack>
                                <Box
                                    w="36px"
                                    h="36px"
                                    p="4px"
                                    rounded="8px"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    flexDirection="column"
                                    bg="brand.200"
                                    cursor="pointer"
                                >
                                    <IoMenu size={36} color="white" onClick={onOpen} />
                                </Box>
                            </VStack>
                        </Flex>

                        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerBody>
                                    <VStack mt="40px" w="full" gap="25px" justify="start"                                         align="start">
                                        {NavbarData.map((item) => (
                                            <React.Fragment key={item.id}>
                                                {item.subMenu ? (
                                                    <Menu>
                                                        <MenuButton 
                                                            as={Button} 
                                                            rightIcon={<ChevronDownIcon />}
                                                            background="transparent"
                                                            _hover={{ color: "brand.100" }}
                                                            _expanded={{ color: "brand.100" }}
                                                        >
                                                            {item.display}
                                                        </MenuButton>
                                                        <MenuList>
                                                            {item.subMenu.map((subItem, idx) => (
                                                                <MenuItem 
                                                                    key={idx} 
                                                                    as={Link} 
                                                                    to={subItem.path}
                                                                >
                                                                    {subItem.display}
                                                                </MenuItem>
                                                            ))}
                                                        </MenuList>
                                                    </Menu>
                                                ) : (
                                                    <NavLink to={item.path}>
                                                        <Text
                                                            fontSize={18}
                                                            fontWeight={600}
                                                            color={id === item.path.slice(1) ? "brand.100" : "brand.200"}
                                                            _hover={{ color: "brand.100" }}
                                                        >
                                                            {item.display}
                                                        </Text>
                                                    </NavLink>
                                                )}
                                            </React.Fragment>
                                        ))}

                                        <VStack gap="20px" justify="center" align="center">
                                            <CtaButton
                                                btnText="Sign In"
                                                isLink={true}
                                                url="/sign-in"
                                                bgColor="brand.200"
                                                color="white"
                                            />
                                        </VStack>
                                    </VStack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </ContainerLayout>
                </Box>
            )}
        </>
    );
}

export default Navbar;

