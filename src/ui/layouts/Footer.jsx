import {
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Box,
  Icon,
  Input
} from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import ContainerLayout from "./ContainerLayout";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "../../data/NavbarData";
import { planLinks } from "../../data/FooterData";
import assets from "../../assets";

function Footer() {
  return (
    <Stack w="full" backgroundColor="brand.200">
      <ContainerLayout>
        <Flex
          w="full"
          justify="space-between"
          align="start"
          direction={["column", "column", "row"]}
          gap={["20px", "30px", "40px"]}
          py={["2rem", "3rem", "4rem"]}
        >
          {/* Logo and About Section */}
          <VStack w="full" justify="start" align="start">
            <Link to="/" title="oceanic-health-logo">
              <HStack w="full" justify="start" align="center" gap="14px">
                <Image
                  src={assets.logo}
                  alt="oceanic-health-logo"
                  background="white"
                  boxSize={["30px", "40px", "50px"]}
                />
                <Text
                  fontSize={["14px", "16px", "18px"]}
                  fontWeight={700}
                  color="white"
                  textTransform="uppercase"
                >
                  Oceanic Health
                </Text>
              </HStack>
            </Link>
            <Text fontWeight={600} fontSize={["20px", "22px", "25px"]} color="white" pt={3}>
              About
            </Text>
            <Text w={["100%", "85%", "70%"]} color="white" fontSize={["14px", "16px"]}>
              We provide exceptional healthcare insurance services as an NHIA-accredited provider,
              ensuring top-quality care in the healthcare industry.
            </Text>
            
            {/* Social Icons */}
            <Box as="footer" py={4}>
              <HStack spacing={4}>
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((IconComponent, i) => (
                  <Box
                    key={i}
                    as="a"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    borderRadius="full"
                    borderWidth="2px"
                    borderColor="white"
                    p={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ bg: "white", color: "brand.200", borderColor: "brand.200" }}
                  >
                    <Icon as={IconComponent} boxSize={5} color="white" _hover={{ color: "brand.200" }}/>
                  </Box>
                ))}
              </HStack>
            </Box>
          </VStack>

          {/* Links and Newsletter */}
          <VStack w="full" justify="start" align="start" gap={["30px", "40px"]}>
            <SimpleGrid columns={[2, 2, 4]} gap={["20px", "30px", "40px"]} w="full">
              
              {/* Useful Links */}
              <VStack w="full" justify="start" align="start" gap="20px">
                <Text
                  fontSize={["14px", "16px"]}
                  fontWeight={600}
                  color="white"
                >
                  Useful Links
                </Text>
                {NavbarData.map((item, i) => (
                  <NavLink key={i} to={item.path}>
                    <Text
                      fontSize={["14px", "16px"]}
                      fontWeight={500}
                      color="white"
                      _hover={{ color: "brand.100" }}
                    >
                      {item.display}
                    </Text>
                  </NavLink>
                ))}
              </VStack>

              {/* Plan Links */}
              <VStack w="full" justify="start" align="start" gap="20px">
                <Text
                  fontSize={["14px", "16px"]}
                  fontWeight={600}
                  color="white"
                >
                  Plan
                </Text>
                {planLinks.map((item, i) => (
                  <NavLink key={i} to={item.path}>
                    <Text
                      fontSize={["14px", "16px"]}
                      fontWeight={500}
                      color="white"
                      _hover={{ color: "brand.100" }}
                    >
                      {item.display}
                    </Text>
                  </NavLink>
                ))}
              </VStack>

              {/* Newsletter Section */}
              <VStack w="full" justify="start" align="start" gap="20px">
                <Text fontSize={["18px", "20px", "23px"]} fontWeight={600} color="white">
                  Newsletter
                </Text>
                <Input
                  type="email"
                  placeholder="Email Address"
                  size="lg"
                  bg="white"
                  borderColor="white"
                  color="black"
                  sx={{ minWidth: "200px", width: "100%", maxWidth: "600px" }}
                />
              </VStack>
            </SimpleGrid>
          </VStack>
        </Flex>

        {/* Footer Bottom */}
        <Flex
          w="full"
          justify="space-between"
          align="center"
          direction={["column", "column", "row"]}
          wrap={["wrap", "wrap", "nowrap"]}
          py="2rem"
          borderTop="1px solid"
          borderTopColor="brand.900"
          textAlign={["center", "center", "left"]}
        >
          <Text
            fontSize={["14px", "16px"]}
            fontWeight={500}
            color="white"
          >
            Powered by LUX SPEED TECHNOLOGY
          </Text>
          <Text
            fontSize={["14px", "16px"]}
            fontWeight={500}
            color="white"
          >
            &copy; {new Date().getFullYear()} OCEANIC HEALTH | All Rights Reserved
          </Text>
        </Flex>
      </ContainerLayout>
    </Stack>
  );
}

export default Footer;
