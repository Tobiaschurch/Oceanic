import React from 'react'
import ContainerLayout from '../ui/layouts/ContainerLayout'
import { Box, Heading, Image, Stack, VStack } from '@chakra-ui/react'
import CtaButton from '../ui/CtaButton'
import Navbar from '../ui/layouts/Navbar'

function NotFound() {
  return (
    <Stack
      minH="100vh"
      justify="center"
      align="center"
    >


        <Navbar/>
        <ContainerLayout>
            <VStack w="full" gap="30px">

                <Box
                   w="50%"
                   minH="200px"
                   display="flex"
                   justifyContent="center"
                   alignItems="center"
                   flexDirection="column"
                >
                    <Image
                      src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Rocksmith/yfxmdxpyiotsjilgube1"
                      alt="not-found-image"
                      w="full"
                      h="full"
                      objectFit="cover"
                    />

                </Box>

                <Heading
                    fontSize={[20, 24, 30]}
                    fontWeight={700}
                    lineHeight={["28px", "30px", "37.2px"]}
                    color="brand.700"
                    textAlign="center"
                >
                    Page Not Found!
                </Heading>

                <CtaButton
                    btnText="Go to Home"
                    isLink={true}
                    url="/"
                />
            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default NotFound
