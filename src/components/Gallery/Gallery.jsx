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
import ScrollElement from '../ScrollToTop/ScrollElement';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { GalleryData } from '../../data/GalleryData';


function Gallery() {
  return (
    <Stack
     py="6rem"
     w="full"
     justify="start"
     align="start"
    >
        <ContainerLayout>

            <MiniHeading
                title="See Health in Action"
                content="Browse our gallery to witness the dedication and care that define Oceanic Health."
                isCenter={true}
            />

            <ScrollElement name="section-gallery" >
                <VStack
                    w="full"
                    justify="start"
                    align="start"
                    py="4rem"
                >
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                        style={{ width: "100%" }}
                    >
                        <Masonry
                         gutter="20px"
                        >
                            {GalleryData.map((image, i) => (
                                <Image
                                 key={i}
                                 src={image}
                                 alt={`gallery-image-${i+1}`}
                                 w="100%"
                                 h="full"
                                 display="block"
                                 rounded="20px"
                                 shadow="0 0 8px rgba(0,0,0, 0.5)"
                                 data-aos="zoom-in"
                                 data-aos-duration="1500"
                                />
                            ))}

                        </Masonry>

                    </ResponsiveMasonry>

                    

                </VStack>

            </ScrollElement>

        </ContainerLayout>

    </Stack>
  )
}

export default Gallery
