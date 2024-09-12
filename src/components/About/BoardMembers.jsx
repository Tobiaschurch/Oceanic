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
    VStack 
} from '@chakra-ui/react';
import ContainerLayout from '../../ui/layouts/ContainerLayout';
import MiniHeading from '../../ui/MiniHeading';
import { MembersData } from '../../data/MembersData';
import MemberCard from './MemberCard';

function BoardMembers() {
  return (
    <Stack
     py="4rem"
     w="full"
     justify="start"
     align="start"
    >
        <ContainerLayout>
            <MiniHeading
                title="Board Members"
                content="Meet our team of experts dedicated to providing exceptional healthcare solutions."
                isCenter={true}
            />

            <VStack
             w="full"
             justify="start"
             align="start"
            >
                <SimpleGrid
                 w="full"
                 columns={[1, 2, 4]}
                 gap="40px"
                 py="4rem"
                >
                    {MembersData.map((item, i) => (
                        <MemberCard
                         key={i}
                         {...item}
                        />
                    ))}

                </SimpleGrid>

            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default BoardMembers
