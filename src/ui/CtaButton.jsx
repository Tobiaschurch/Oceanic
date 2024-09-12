import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function CtaButton({ btnText, isLink, url, handleClick, isDisabled, bgColor, color }) {
  return (
    <>
      {isLink ? (
        <VStack>
        <Link to={url}>
            <Button
                w="full"
                rounded="10px"
                py="20px"
                px="30px"
                color={color}
                bg={bgColor}
                _hover={{
                    bg: "brand.200",
                    color: "white"
                }}
                fontWeight={700}
                fontSize={16}
                lineHeight="20.91px"
                textAlign="center"
                cursor="pointer"
                size="lg"
                textTransform="uppercase"
            >
                {btnText}
            </Button>
    
        </Link>
    </VStack>
      ): (
        <VStack>
            <Button
                w="full"
                rounded="10px"
                py="20px"
                px="30px"
                color={color}
                bg={bgColor}
                _hover={{
                    bg: "brand.200",
                    color: "white"
                }}
                fontWeight={700}
                fontSize={16}
                lineHeight="20.91px"
                textAlign="center"
                cursor="pointer"
                size="lg"
                textTransform="uppercase"
                onClick={handleClick}
                disabled={isDisabled}
            >
                {btnText}
            </Button>
        </VStack>
      )}
    </>
  )
}

export default CtaButton
