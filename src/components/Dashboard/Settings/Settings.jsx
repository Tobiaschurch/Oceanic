import React from 'react';
import { 
    Box, 
    Flex, 
    HStack, 
    Image, 
    Text, 
    VStack,
    Stack, 
    Icon,
    Heading,
    Avatar,
    AvatarBadge, 
} from "@chakra-ui/react";
import {  useNavigate } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import { IoIosArrowForward } from "react-icons/io";
import { useQueryClient } from '@tanstack/react-query';


function Settings() {

  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(["user"]);

  console.log("userData", userData);

  const navigate = useNavigate();

  const accountInfos = [
    {
        title: "Name",
        content: `${userData?.firstname} ${userData?.surname}`,
    },


    {
        title: "Email",
        content: `${userData?.email}`,
    },
  ]
  

  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     gap="60px"
    >
        
        <HStack
         w="full"
         justify="start"
         align="center"
         gap="10px" 
         role="group"
         cursor="pointer"
         onClick={() => navigate(-1)}
        >
            <Icon 
                as={GoArrowLeft} 
                color="black"
                w={6}
                h={6}
                _groupHover={{
                    color: "brand.200"
                }}
            />

            <Text
             fontSize={16}
             fontWeight={500}
             lineHeight="24px"
             color="black"
             _groupHover={{
                color: "brand.200"
             }}
            >
                Go Back
            </Text>

        </HStack>


        <VStack
         w={["full", "full", "60%"]}
         mx={["initial", "initial", "auto"]}
         justify="center"
         align="center"
         gap="20px"
        >
          <VStack
              w="full"
              justify="start"
              align="start"
              gap="10px"
          >
              <Text
                  fontSize={[24, 28, 32]}
                  fontWeight={700}
                  lineHeight="48px"
                  color="black"
              >
                  Account Info
              </Text>

          </VStack>


            <VStack
             w="full"
             justify="start"
             align="start"
             gap="30px"
            >
                    {accountInfos.map((info, i) => (
                        <HStack
                            key={i}
                            w="full"
                            justify="end"
                            align="end"
                            borderBottomColor="brand.600"
                            borderBottomWidth="1px"
                            py="20px"
                        >
                            <VStack
                                w="full"
                                justify="start"
                                align="start"
                                gap="2px"
                            >
                                <Text
                                  fontSize={16}
                                  fontWeight={700}
                                  lineHeight="24px"
                                  color="brand.200"
                                >
                                    {info.title}
                                </Text>

                                <Text
                                  fontSize={16}
                                  fontWeight={400}
                                  lineHeight="24px"
                                  color="alt.400"
                                >
                                    {info.content}
                                </Text>

                            </VStack>

                            <VStack
                                justify="end"
                                align="end"
                            >
                                <Icon 
                                    as={IoIosArrowForward} 
                                    color="brand.300"
                                    w={6}
                                    h={6}
                                />
                            </VStack>

                        </HStack>
                ))}
            </VStack>


        </VStack>

    </Stack>
  )
}

export default Settings
