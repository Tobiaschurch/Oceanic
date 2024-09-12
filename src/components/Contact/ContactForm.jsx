import { 
    Stack, 
    Container, 
    SimpleGrid, 
    Grid, 
    GridItem, 
    Flex, 
    Box, 
    Heading, 
    Text, 
    Button, 
    Icon, 
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    FormControl,
    FormLabel, 
    Textarea,
    VStack,
    HStack
  } from "@chakra-ui/react";
import React, { useState } from 'react'
import CtaButton from "../../ui/CtaButton";

function ContactForm() {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: '',
      });
    
      const [isLoading, setIsLoading] = useState(false);
    
      const [errors, setErrors] = useState({});
    
      const validationRules = {
        fullname: [{ required: true }],
        email: [{ required: true, email: true, message: 'Invalid email address' }],
        message: [{ required: true }],
      };
    
      const inputs = [
        {
          name: 'fullname',
          label: 'Fullname',
          type: 'text',
          value: formData.fullname,
          error: errors.fullname,
          handleChange: (e) =>
            setFormData({ ...formData, fullname: e.target.value }),
          placeholder: 'Enter your name',
          isPassword: false,
          style: 2,
        },
  
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          value: formData.email,
          error: errors.email,
          handleChange: (e) =>
            setFormData({ ...formData, email: e.target.value }),
          placeholder: 'Enter your email',
          isPassword: false,
        },
  
        {
          name: 'message',
          label: 'Message',
          type: 'text',
          value: formData.message,
          error: errors.message,
          handleChange: (e) =>
            setFormData({ ...formData, message: e.target.value }),
          placeholder: 'Enter your message',
          isPassword: false,
        },
  
      ];
    
  return (
    <VStack
     w="full"
     justify="start"
     align="start"
     bgColor="brand.500"
     p="20px"
     rounded="10px"
     gap="20px"
    >
        {/* ==== Form ====  */}
        <SimpleGrid
            w="full"
            columns={[1, 1, 2]}
            gap="20px"
        >
        {inputs.slice(0, 2).map((input, i) => (
            <FormControl key={i}>
                <FormLabel 
                    fontFamily={"fonts.outfit"} 
                    fontWeight={500} 
                    fontSize={"1rem"} 
                    color={"black"}
                >
                    {input.label}
                </FormLabel> 

                <InputGroup 
                    display={"flex"} 
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <Input
                        sx={{ bg: "white", border: "none" }}
                        placeholder={input.placeholder}
                        _placeholder={{ color: "brand.700" }}
                        size="lg"
                        fontFamily={"fonts.body"}
                        fontWeight={"400"}
                        fontSize={"1rem"}
                        color={"black"}
                        value={input.value} 
                        onChange={input.handleChange}
                        type={ input.type}
                    />

                </InputGroup>
            </FormControl>
        ))}

        {inputs.slice(-1).map((input, i) => {
            return (
                <FormControl key={i} gridColumn={["span 1", "span 1", "span 2"]}>
                <FormLabel 
                    fontFamily={"fonts.outfit"} 
                    fontWeight={500} 
                    fontSize={"1rem"} 
                    color={"black"}
                >
                    {input.label}
                </FormLabel> 
                <Textarea
                    rows={10}
                    cols={20}
                    name={input.name}
                    placeholder={input.placeholder}
                    fontWeight={400}
                    fontSize={16}
                    _placeholder={{ color: "brand.700" }}
                    value={input.value}
                    sx={{ bg: "white", border: "none" }} 
                    // onChange={input.handleChange}
                />
            </FormControl>
            )
        })}

        </SimpleGrid>

        <CtaButton
            btnText="Send Message"
            isLink={false}
            bgColor="brand.100"
            color="brand.200"
        />

    </VStack>
  )
}

export default ContactForm
