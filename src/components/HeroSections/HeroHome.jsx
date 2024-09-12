import React from "react";
import Hero from "../../ui/layouts/Hero";
import assets from "../../assets";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import CtaButton from "../../ui/CtaButton";

function HeroHome() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000, // 2000 milliseconds = 2 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Hero bgImg='https://res.cloudinary.com/dv1u4kxvh/image/upload/f_auto,q_auto/v1/Oceanic/mu7jktpwddacgszpwrq2' height={["400px", "600px", "745px"]}>
          <SimpleGrid
            w="full"
            columns={[1, 1, 2]}
            gap={["10px", "20px", "40px"]}
            justifyContent="center"
            alignItems="center"
            py={["4rem", "5rem", "6rem"]}
          >
            <VStack
              w="full"
              justify="start"
              align="start"
              gap="40px"
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <Text
                fontSize={[30, 44, 50]}
                fontWeight={800}
                lineHeight={["40px", "50px", "60px"]}
                textTransform="uppercase"
                color="white"
                // maxW="100%"
                textAlign={["center", "left", "left"]}
              >
                Your Premium Healthcare Expert
              </Text>

              <Text
                fontSize={[16, 18, 20]}
                fontWeight={500}
                lineHeight="24.59px"
                color="white"
              >
                Discover excellence in healthcare at Oceanic Health – where your
                well-being is our priority.
              </Text>

              <CtaButton
                btnText="Explore Our Plans"
                isLink={true}
                url="/plans"
                bgColor="brand.100"
                color="brand.200"
                size={["sm", "md", "lg"]}
                px={["10px", "20px", "30px"]}
              />
            </VStack>

            <VStack
              w="full"
              justify={["start", "start", "end"]}
              align={["start", "start", "end"]}
            >
            </VStack>
          </SimpleGrid>
        </Hero>
      </SwiperSlide>
      <SwiperSlide>
        <Hero bgImg='https://res.cloudinary.com/dv1u4kxvh/image/upload/f_auto,q_auto/v1/Oceanic/j9w0zdjdyptjiqlvnzob' height={["400px", "600px", "745px"]}>
          <SimpleGrid
            w="full"
            columns={[1, 1, 2]}
            gap={["10px", "20px", "40px"]}
            justifyContent="center"
            alignItems="center"
            py={["4rem", "5rem", "6rem"]}
          >
            <VStack
              w="full"
              justify="start"
              align="start"
              gap="40px"
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <Text
                fontSize={[30, 40, 50]}
                fontWeight={800}
                lineHeight={["40px", "50px", "60px"]}
                textTransform="uppercase"
                color="white"
                maxW="100%"
                textAlign={["center", "left", "left"]}
              >
                Your Premium Healthcare Expert
              </Text>

              <Text
                fontSize={[16, 18, 20]}
                fontWeight={500}
                lineHeight="24.59px"
                color="white"
                maxW="100%"
                textAlign={["center", "left", "left"]}
              >
                Discover excellence in healthcare at Oceanic Health – where your
                well-being is our priority.
              </Text>

              <CtaButton
                 btnText="Explore Our Plans"
                isLink={true}
                url="/plans"
                bgColor="brand.100"
                color="brand.200"
                size={["sm", "md", "lg"]}
                px={["10px", "20px", "30px"]}
              />
            </VStack>

            <VStack
              w="full"
              justify={["start", "start", "end"]}
              align={["start", "start", "end"]}
            >
            </VStack>
          </SimpleGrid>
        </Hero>
      </SwiperSlide>
      <SwiperSlide>
        <Hero bgImg='https://res.cloudinary.com/dv1u4kxvh/image/upload/f_auto,q_auto/v1/Oceanic/wq1za1qnhufrtmpg5w72' height={["400px", "600px", "745px"]}>
          <SimpleGrid
            w="full"
            columns={[1, 1, 2]}
            gap={["10px", "20px", "40px"]}
            justifyContent="center"
            alignItems="center"
            py={["4rem", "5rem", "6rem"]}
          >
            <VStack
              w="full"
              justify="start"
              align="start"
              gap="40px"
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <Text
                fontSize={[30, 40, 50]}
                fontWeight={800}
                lineHeight={["40px", "50px", "60px"]}
                textTransform="uppercase"
                color="white"
                maxW="100%"
                textAlign={["center", "left", "left"]}
              >
                Your Premium Healthcare Expert
              </Text>

              <Text
                fontSize={[16, 18, 20]}
                fontWeight={500}
                lineHeight="24.59px"
                color="white"
                maxW="100%"
                textAlign={["center", "left", "left"]}
              >
                Discover excellence in healthcare at Oceanic Health – where your
                well-being is our priority.
              </Text>

              <CtaButton
                 btnText="Explore Our Plans"
                isLink={true}
                url="/plans"
                bgColor="brand.100"
                color="brand.200"
                size={["sm", "md", "lg"]}
                px={["10px", "20px", "30px"]}
              />
            </VStack>

            <VStack
              w="full"
              justify={["start", "start", "end"]}
              align={["start", "start", "end"]}
            >
            </VStack>
          </SimpleGrid>
        </Hero>
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default HeroHome;
