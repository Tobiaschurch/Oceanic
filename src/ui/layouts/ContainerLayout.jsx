import { VStack } from "@chakra-ui/react";


const ContainerLayout = ({ children }) => {

  return (
    <VStack
     w={["full", "full", "90%"]}
     py={["1rem", "1rem", "2rem"]}
     px={["15px", "15px", "initial"]}
     mx={["initial", "initial", "auto"]}
     justify="center"
     align="center"
    >
      {children}
    </VStack>
  );
};

export default ContainerLayout;
