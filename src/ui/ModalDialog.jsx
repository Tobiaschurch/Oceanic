import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    VStack,
    Heading, 
    Text,
    Button,
    Spinner,
  } from '@chakra-ui/react';

  import React from 'react'
  
  function ModalDialog({ 
    
    isDialog, 
    closeDialog, 
    handleConfirm, 
    dialogTitle, 
    dialogBody, 
    isLoading, 
    isDisabled,
    confirmText,
    cancelText,
}) {
    const cancelRef = React.useRef()
  
    return (
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          isOpen={isDialog}
          isCentered
          bgColor="white"
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader color="brand.300">
                {dialogTitle}
            </AlertDialogHeader>

            <AlertDialogCloseButton onClick={closeDialog}/>

            <AlertDialogBody color="alt.400">
              {dialogBody}
            </AlertDialogBody>

            <AlertDialogFooter
             gap="24px"
             flexDirection="column"
            >
            
            <Button 
                bg="brand.200"
                w="full"
                variant="solid"
                color="white"
                rounded="4px"
                h="initial"
                py="15px"
                px="20px"
                _hover={{
                    bgColor: "brand.200",
                    textDecoration: "none"
                }}
                disabled={isDisabled || isLoading} 
                onClick={handleConfirm}
              >
                { isLoading ? <Spinner/> : confirmText }
              </Button>

              <Button 
                ref={cancelRef}
                bg="white"
                w="full"
                variant="solid"
                color="alt.400"
                rounded="4px"
                border="1px solid"
                borderColor="alt.200"
                h="initial"
                py="15px"
                px="20px"
                _hover={{
                    bgColor: "black",
                    color: "white",
                    textDecoration: "none"
                }}
                disabled={isDisabled || isLoading} 
                onClick={closeDialog}
              >
                { cancelText }
              </Button>


            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    )
  }

  export default ModalDialog