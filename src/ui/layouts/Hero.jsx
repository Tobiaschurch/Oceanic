import React from 'react';
import { 
    VStack,
    Stack, 
} from "@chakra-ui/react";
import ContainerLayout from './ContainerLayout';
import Navbar from "./Navbar";

function Hero({ bgImg, height, children }) {
  const isHeight = height ? height : "700px"
  return (
    <Stack
     py="1rem"
     justify="start"
     align="start"
     direction="column"
     position="relative"
     bgImage={bgImg}
     bgSize="cover"
     bgRepeat="no-repeat"
     bgPos="center"
     h={["full", "full", isHeight ]}
     minH={["full", "full", isHeight ]}
     _before={{
        content: '" "',
        position: "absolute",
        inset: 0,
        bgColor: "rgba(50, 45, 123, 0.4)",
        zIndex: 1
     }}
    >
        <VStack
         w="full"
         justify="start"
         align="start"
         zIndex={2}
         gap="10px"
        >
            <Navbar/>
            <ContainerLayout>
                {children}
            </ContainerLayout>

        </VStack>

    </Stack>
  )
}

export default Hero
