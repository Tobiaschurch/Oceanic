import React from 'react'
import { 
    Box, 
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { PartnersData } from '../../data/PartnersData';


function Partners() {
  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     bgColor="brand.500"
     py="2rem"
    >
        <ContainerLayout>
            <MiniHeading
             title="Our Partners"
             content="Our valued partners help us pave the way for a healthier, more vibrant future for all."
             isCenter={true}
            />

        <Flex
            as={Swiper}
            mt="4rem"
            w="full"
            justify="center"
            align="center"
            pagination={false}
            spaceBetween={14}
            slidesPerView={4}
            loop={false}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
            }}
            modules={[ Autoplay]}
        >
            {PartnersData.map((item, i) => (
                <SwiperSlide
                key={i}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    direction: "column,"
                }}
                >
                    <Image
                    src={item.image}
                    alt={`partner-image-${i+1}`}
                    w="70%"
                    h="auto"
                    />

                </SwiperSlide>
            ))}
        </Flex>


        </ContainerLayout>

    </Stack>
  )
}

export default Partners
