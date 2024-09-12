import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { 
    Box, 
    Stack, 
    Input,
    InputGroup,
    InputRightElement,
    FormControl,
    FormErrorMessage,
    Icon,
    Button,
    VStack,
    HStack,
    Text,
    Spinner
} from "@chakra-ui/react";
import ContainerLayout from '../../ui/layouts/ContainerLayout';
import { useLogin } from './useLogin';


function Signin() {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();
  const { isLoading, loginUser } = useLogin();

  const handleFormSubmit = ({ member_no }) => {
    loginUser({ member_no })
  };

  const inputs = [
    {
      type: "text",
      name: "member_no",
      placeholder: "Enter Member No.",
      validation: {
        required: 'Member No. is required',
        pattern: {
          value: /^[A-Z]{3}\d{3}\/[A-Z]{2}\d{6}\/[A-Z]{2}\/\d{1}$/,
          message: 'Invalid format. Expected format "OHM123/CS123456/ST/1"',
        },
      }
    },
  ];


  return (
    <Stack w="full" justify="start" align="start" py="6rem">
      <ContainerLayout>
        <VStack 
            w={["full", "full", "50%"]} 
            mx={["initial", "initial", "auto"]} 
            justify="start" 
            align="start" 
            gap="40px"
        >

        <VStack
         w="full"
         justify="start"
         align="start"
        >
            <Text
             fontSize={[24, 28, 32]}
             fontWeight={700}
             color="brand.200"
             lineHeight="24px"
            >
                Sign in 
            </Text>

            <Text
             fontSize={16}
             fontWeight={400}
             color="brand.200"
             lineHeight="24px"
            >
              Access your account to manage your profile, view plans, and stay connected 
            </Text>

        </VStack>
          <form 
            onSubmit={handleSubmit(handleFormSubmit)} 
            style={{ width: "100%" }} 
          >
            <VStack 
                w="full" 
                justify="start" 
                align="start" 
                gap="20px"
            >
              {inputs.map((input, i) => (
                <FormControl key={i} id={input.name} isInvalid={errors[input.name]}>
                  <InputGroup>
                    <Input
                      sx={{ 
                        bg: "white", 
                        border: "1px solid", 
                        borderColor: "brand.600" 
                      }}
                      placeholder={input.placeholder}
                      _placeholder={{ color: "brand.700" }}
                      size="lg"
                      fontFamily="fonts.body"
                      fontWeight={400}
                      fontSize={16}
                      color="black"
                      type={ input.type}
                      {...register(input.name, input.validation)}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors[input.name] && errors[input.name].message}
                  </FormErrorMessage>
                </FormControl>
              ))}

              <VStack 
                w="full" 
                justify="center" 
                align="center"
              >
                <Button
                  size="lg"
                  bgColor="brand.200"
                  color="white"
                  fontSize={16}
                  fontWeight={400}
                  lineHeight="24px"
                  textAlign="center"
                  w="full"
                  h="initial"
                  py="20px"
                  px="40px"
                  type="submit"
                  _hover={{
                    bgColor: "brand.200"
                  }}
                  isLoading={isLoading || isSubmitting}
                  disabled={isLoading || isSubmitting}
                >
                  { isLoading ? <Spinner/> : "Sign in" }
                </Button>
              </VStack>
            </VStack>
          </form>
        </VStack>
      </ContainerLayout>
    </Stack>
  );
}

export default Signin;
