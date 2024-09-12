import React from 'react';
import { 
    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th, 
    Td, 
    TableContainer, 
    Box, 
    Text, 
    VStack
} from '@chakra-ui/react';
import theme from '../../theme';

function PlanDetailTable({ data }) {
  return (
    <VStack
        w="full"
        mx={["initial", "initial", "auto"]}
        justify="center"
        alignItems="center"
   >
        <Box
         w="full"
         mx={["initial", "initial", "auto"]}
         my={8}
        >
        {data.map((category, categoryIndex) => (
            <Box key={categoryIndex} mb={8}>
            <Text 
                w="full"
                bgColor="brand.200"
                color="white"
                fontSize="2xl" 
                fontWeight="bold" 
                mb={8}
                p={5}
                rounded="10px"
            >
                {category.category}
            </Text>
            <TableContainer>
                <Table variant="striped" size="sm">
                <Thead>
                    <Tr>
                    <Th>
                        <Text
                         fontSize={18}
                         fontWeight={800}
                         color="brand.200"
                         lineHeight="24px"
                         fontFamily={theme.fonts.body}
                        >
                            Service
                        </Text>
                    </Th>

                    <Th>
                        <Text
                         fontSize={18}
                         fontWeight={800}
                         color="brand.200"
                         lineHeight="24px"
                         fontFamily={theme.fonts.body}
                        >
                          Coverage
                        </Text>
                    </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {category.details.map((detail, detailIndex) => (
                    <Tr key={detailIndex}>
                        <Td fontWeight={500} p={4}>{detail.service}</Td>
                        <Td fontWeight={500} p={4}>{detail.coverage}</Td>
                    </Tr>
                    ))}
                </Tbody>
                </Table>
            </TableContainer>
            </Box>
        ))}
        </Box>

   </VStack>
  );
}

export default PlanDetailTable;
