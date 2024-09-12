import React from "react";
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
  Avatar,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import ContainerLayout from "../../ui/layouts/ContainerLayout";

function AboutSection() {
  return (
    <Stack py={["2rem", "3rem", "4rem"]} w="full" justify="start" align="start">
      <ContainerLayout>
        <SimpleGrid w="full" columns={[1, 1, 2]} gap={["30px", "40px", "60px"]}>
          {/* Left Side Image */}
          <VStack w="full" justify="start" align="start">
            <VStack
              w="full"
              h={["300px", "400px", "600px"]}
              justify="center"
              align="center"
              overflow="hidden"
              data-aos="slide-right"
              data-aos-duration="1200"
            >
              <Image
                w="full"
                h="full"
                src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Oceanic_health/sl7sszfapcjujc3f7uhh"
                alt="oceanic-health-about-image"
                objectFit="cover"
              />
              <Box
                bg="brand.200"
                color="white"
                width={["full", "70%"]}
                px={8}
                py={8}
                mt={["-8px", "-70px", "-100px"]}
                ml={["0", "-70px", "-100px"]}
              >
                <Text fontWeight="bold" fontSize={["lg", "xl", "2xl"]}>
                  25 Years Of Experience in Insurance Services
                </Text>
                <Text fontSize={["sm", "md"]}>CEO & Founder</Text>
              </Box>
            </VStack>
          </VStack>

          {/* Right Side Content */}
          <VStack w="full" justify="start" align="start" gap="30px">
            <Heading
              fontSize={["28px", "32px", "38px"]}
              fontWeight={500}
              fontFamily="sans-serif"
              color="brand.200"
              lineHeight="1.2"
              textTransform="uppercase"
            >
              About Us
            </Heading>

            <VStack w="full" justify="start" align="start" gap="12px">
              <Text
                fontSize={["16px", "18px", "22px"]}
                fontWeight={500}
                color="brand.1000"
                lineHeight="1.6"
              >
                Oceanic Health Management Limited is a Healthcare insurance
                provider duly accredited by the NHIA offering optimum services
                in the healthcare industry.
              </Text>

              <Text
                fontSize={["16px", "18px", "22px"]}
                fontWeight={500}
                color="brand.1000"
                lineHeight="1.6"
              >
                Our friendly environment and smart use of strong and robust ICT
                platforms has enabled us to offer excellent HMO services to our
                clients who are spread across multiple industries.
              </Text>

              <Text
                fontSize={["16px", "18px", "22px"]}
                fontWeight={500}
                color="brand.1000"
                lineHeight="1.6"
              >
                We believe everyone should have the opportunity to access
                quality healthcare services whenever they desire, and this is
                what we deliver.
              </Text>

              {/* CEO Information */}
              <Flex align="center" pt="22px">
                <Avatar
                  size="md"
                  name="Marcellus A. Hilliard"
                  src="https://res.cloudinary.com/dv1u4kxvh/image/upload/f_auto,q_auto/v1/Oceanic/dn9vnguocvpuwolzvey4"
                />
                <Box ml="3">
                  <Text fontWeight="bold" fontSize={["md", "lg"]}>
                    Marcellus A. Hilliard
                  </Text>
                  <Text fontSize={["xs", "sm"]} color="gray.500">
                    CEO & Founder
                  </Text>
                </Box>
              </Flex>

              {/* Buttons */}
              <Flex align="center" pt={5}>
                <Button
                  colorScheme="blue"
                  bgGradient="linear(to-r, blue.400, blue.600)"
                  color="white"
                  px={["3", "4"]}
                  py={["3", "4"]}
                  border="2px solid"
                  borderColor="blue.600"
                  borderRadius="md"
                  _hover={{
                    bgGradient: "linear(to-r, blue.500, blue.700)",
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  _active={{
                    transform: "translateY(0)",
                    boxShadow: "md",
                  }}
                >
                  Learn more
                  <Icon as={FaArrowRight} ml="2" />
                </Button>
                <Button
                  ml={3}
                  colorScheme="white"
                  color="black"
                  px={["3", "4"]}
                  py={["3", "4"]}
                  border="2px solid"
                  borderColor="black"
                  borderRadius="md"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  _active={{
                    transform: "translateY(0)",
                    boxShadow: "md",
                  }}
                >
                  Our Services
                  <Icon as={FaArrowRight} ml="2" />
                </Button>
              </Flex>
            </VStack>
          </VStack>
        </SimpleGrid>
      </ContainerLayout>
    </Stack>
  );
}

export default AboutSection;
