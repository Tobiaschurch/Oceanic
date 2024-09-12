import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function MiniHeading({ title, content, isCenter, color }) {
  return (
    <VStack
    w={["full", "full", "60%"]}
    mx={["initial", "initial", "auto"]}
    justify={isCenter ? "center" : ["center", "center", "start"]}
    align={isCenter ? "center" : ["center", "center", "start"]}
    gap="20px"
   >
       <Text
        fontSize={[28, 32, 40]}
        fontWeight={700}
        color={color ? color : "brand.200"}
        lineHeight="31.2px"
        textAlign={isCenter ? "center" : "initial"}
        textTransform="uppercase"
       >
           {title}
       </Text>

       <Heading
        fontSize={[24, 24, 28]}
        fontWeight={300}
        color={color ? color : "brand.200"}
        lineHeight="31.2px"
        textAlign={isCenter ? "center" : "initial"}
        fontStyle="italic"
       >
          {content}
       </Heading>

   </VStack>
  )
}

export default MiniHeading
