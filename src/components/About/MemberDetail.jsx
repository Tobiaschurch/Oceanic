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
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, 

} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { MembersData } from '../../data/MembersData';
import ContainerLayout from '../../ui/layouts/ContainerLayout';


function MemberDetail() {

    const location = useLocation();
    const pathname = location.pathname;
    const match = pathname.match(/member\/([^/]+)/);
  
    const memberDetailName = match ? match[1].replace(/%20/g, " ") : "";

    const memberFilteredData = MembersData.find(team => team.name === memberDetailName);

  return (
    <Stack 
        w="full"
        justify="start"
        align="start"
        py="6rem"
    >
        <ContainerLayout>
            <SimpleGrid
              w="full"
              columns={[1, 1, 2]}
              gap="60px"
              justify="start"
              align="start"
            >
                <VStack
                  w="full"
                  justify="start"
                  align="start"
                  gap="50px"
                >
                <VStack 
                    w="full"
                    justify="start"
                    align="start"
                >
                    <Heading
                        fontSize={[32, 36, 40]}
                        fontWeight={700}
                        lineHeight={["45px", "47px", "49.6px"]}
                        color="brand.200"
                    >
                       {memberDetailName}
                    </Heading>
                </VStack>

                <VStack 
                    w="full"
                    justify="start"
                    align="start"
                    gap="30px"
                >
                    <Heading
                        fontSize={[24, 28, 32]}
                        fontWeight={700}
                        lineHeight="31.2px"
                        color="brand.200"
                    >
                        Brief Profile 

                    </Heading>

                    <Text
                        fontSize={16}
                        fontWeight={400}
                        lineHeight="28px"
                        color="black"
                    >
                       {memberFilteredData.content}
                    </Text> 

                </VStack>


                <VStack 
                    w="full"
                    justify="start"
                    align="start"
                    gap="40px"
                > 

                    <Text
                        fontSize={16}
                        fontWeight={400}
                        lineHeight="28px"
                        color="black"
                    >
                        {memberFilteredData.content}
                    </Text> 


                </VStack>


                </VStack>

                <VStack
                 w="full"
                 justify="start"
                 align="start"
                 gap="80px"
                >
                    <Box
                        w="full"
                        h="600px"
                        rounded="20px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        overflow="hidden"
                        data-aos="slide-left"
                        data-aos-duration="2000"
                    >
                        <Image
                          src={memberFilteredData.image}
                          w="full"
                          h="full"
                          objectFit="cover"
                        />
                    </Box>
                    </VStack>


            </SimpleGrid>
        </ContainerLayout>
    </Stack>
  )
}

export default MemberDetail
