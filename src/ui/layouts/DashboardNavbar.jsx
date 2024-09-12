import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    Icon,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Text,
    VStack,
    useBreakpointValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import { MdLogout } from "react-icons/md";
  import { RxHamburgerMenu } from "react-icons/rx";
  import MobileNav from "./MobileNav";
  import { useEffect, useState } from "react";
  import { IoIosArrowDown } from "react-icons/io";
import { useLogout } from "../../components/Auth/useLogout";
import ModalDialog from "../ModalDialog";
import { useQueryClient } from "@tanstack/react-query";
import { getInitials } from "../../utils/helper";

  
  function DashboardNavbar() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData(["user"]);


    // To handle Logout
    const [openDialog, setOpenDialog] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { isLoading, logoutUser } = useLogout();

    const handleLogout = () => {
      setIsSubmitting(true);
      logoutUser()
    }

    const handleCloseDialog = () => {
      setOpenDialog(false);
      setIsSubmitting(false);

    }

    const fullName = `${userData?.firstname} ${userData?.surname}`;


    return (
      <>
        <HStack
          maxW="1340px"
          bg="white"
          justify="space-between"
          align="center"
          px={{ base: "16px ", md: "10", lg: "16" }}
          py="24px"
          w="full"
          m="0"
          position="sticky"
          top="0"
          borderBottom="10px solid"
          borderBottomColor="brand.200"
          zIndex={10}
          gap="40px"
        >
          <VStack
           w="full"
           justify="start"
           align="start"
           gap="10px"
          >
            <Text
             fontSize={[24, 24, 28]}
             fontWeight={700}
             color="black"
             lineHeight="24.59px"
            >
                Hi, {userData?.firstname || "User"}
            </Text>
            <Text
             fontSize={[14, 14, 16]}
             fontWeight={400}
             color="brand.400"
             lineHeight="24.59px"
            >
                Manage your data, track plans, and stay connected.
            </Text>
          </VStack>
          {isDesktop ? (
            <>
                <Flex align="center" gap="15px" w="fit-content">
                  <Popover trigger="hover" placement="bottom-end">
                    <PopoverTrigger>
                      <Flex cursor="pointer" align="center" gap="4px">
                        <Avatar
                          size="md"
                          bgColor="brand.200"
                          rounded="full"
                          name={getInitials(fullName)}
                        />

                        <Icon 
                          as={IoIosArrowDown} 
                          color="black"
                          w={6}
                          h={6}
                        />
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent
                      border="none"
                      rounded="sm"
                      overflow="hidden"
                      boxShadow="lg"
                      w="204px"
                    >
                      <VStack bg="white" gap="0">
                        <Flex
                          cursor="pointer"
                          color="red.500"
                          align="center"
                          w="full"
                          p="15px"
                          rounded="12px"
                          _hover={{
                            bg: "brand.200",
                            rounded: "none",
                            color: "white",
                          }}
                          gap="12px"
                          onClick={() => setOpenDialog(true)}
                        >
                          <MdLogout size={24}/>
                          Log out
                        </Flex>
                      </VStack>
                    </PopoverContent>
                  </Popover>
                </Flex>
            </>
          ) : (
            <>
                <Flex gap="16px" align="center">
                  <Popover trigger="hover" placement="bottom-end">
                    <PopoverTrigger>
                      <Flex cursor="pointer" align="center" gap="4px">
                        <Avatar
                          size="md"
                          rounded="8px"
                          name="profile-name"
                          src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/G20/ziapbcvfkh4eckphbb8m"
                        />

                        <Icon 
                          as={IoIosArrowDown} 
                          color="black"
                          w={6}
                          h={6}
                        />
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent
                      border="none"
                      rounded="sm"
                      overflow="hidden"
                      boxShadow="lg"
                      w="204px"
                    >
                      <VStack bg="white" gap="0">
                        {/* <Box w="full">
                          <Link to="/dashboard/profile">
                            <Flex
                              cursor="pointer"
                              align="center"
                              w="full"
                              p="15px"
                              rounded="12px"
                              _hover={{
                                bg: "brand.200",
                                color: "white",
                                rounded: "none",
                              }}
                              gap="12px"
                            >
                              <PiUserCircleFill size={24}/>
                              Manage Account
                            </Flex>
                          </Link>
                        </Box>
                        <Box w="full">
                          <Link to="/settings">
                            <Flex
                              cursor="pointer"
                              align="center"
                              w="full"
                              p="15px"
                              rounded="12px"
                              _hover={{
                                bg: "brand.200",
                                color: "white",
                                rounded: "none",
                              }}
                              gap="12px"
                            >
                              <BiSupport size={24}/>
                              Help & Support
                            </Flex>
                          </Link>
                        </Box> */}
                        <Flex
                          cursor="pointer"
                          color="red.500"
                          align="center"
                          w="full"
                          p="15px"
                          rounded="12px"
                          _hover={{
                            bg: "brand.200",
                            rounded: "none",
                            color: "white",
                          }}
                          gap="12px"
                          onClick={() => setOpenDialog(true)}
                        >
                          <MdLogout size={24}/>
                          Log out
                        </Flex>
                      </VStack>
                    </PopoverContent>
                  </Popover>
                  <VStack 
                    w="40px"
                    h="40px"
                    bg="brand.200"
                    rounded="6px"
                    justify="center"
                    align="center"
                    cursor="pointer"
                    onClick={onOpen}
                  >
                    <RxHamburgerMenu size={25} color="white" />
                  </VStack>
                </Flex>
            </>
          )}
  
          {isOpen && <MobileNav isOpen={isOpen} onClose={onClose} />}
        </HStack>

          {/* === Logout Dialog */}
          <ModalDialog
            isDialog={openDialog}
            closeDialog={handleCloseDialog}
            dialogTitle="Logout"
            dialogBody="Are you want to logout ?"
            isDisabled={isSubmitting}
            isLoading={isLoading}
            cancelText="No"
            confirmText="Yes"
            handleConfirm={handleLogout}
          />

      </>
    );
  }
  
  export default DashboardNavbar;
  