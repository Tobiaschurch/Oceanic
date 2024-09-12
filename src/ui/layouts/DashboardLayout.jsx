import { Box, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      {isDesktop ? (
        <Flex gap={0} w="full">
          <Sidebar />
          <VStack 
            align='flex-start' 
            w='full' 
            gap="0" 
            bg="white"
            h="100vh"
            overflowY="auto"
         >
            <DashboardNavbar />
            <Box w='full' mx="auto" py="30px" px={{ base: "16px ", md: "10", lg: "16" }}>
              <Outlet />
            </Box>
          </VStack>
        </Flex>
      ) : (
        <>
          <Box>
            <DashboardNavbar />
            <Box px="16px" py="24px">
              <Outlet />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default DashboardLayout;
