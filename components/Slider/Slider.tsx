import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import Arrow from "../UI/Arrow";
import { useCarousel } from "../../hooks/useCarousel";

const items = [
  { bgColor: "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)" },
  { bgColor: "linear-gradient(208.18deg, #02c39a 9.05%, #00a896 76.74%)" },
  { bgColor: "linear-gradient(208.18deg, #ff4d6d 9.05%, #c9184a 76.74%)" },
  { bgColor: "linear-gradient(208.18deg, #f1c0e8 9.05%, #cfbaf0 76.74%)" },
];

const Slider = () => {
  const cardsRef = useRef(null);
  const carouselRef = useRef(null);

  const points = [1, 2, 3, 4];

  const {
    nextCardHandler,
    prevCardHandler,
    nextDisabled,
    prevDisabled,
    onPointHandler,
    slide,
  } = useCarousel({ items: items, ref: cardsRef, slider: carouselRef });

  return (
    <Container
      maxW={"container.xl"}
      mb={100}
      px={{ base: "15px", xl: "35px", "3xl": "50px" }}
      pos={"relative"}
    >
      <Flex
        direction={"column"}
        m={"0 auto"}
        ref={carouselRef}
        overflow={"hidden"}
        maxW={"1125px"}
      >
        <Image
          src="/page/pointsBg.svg"
          position={"absolute"}
          top={"55%"}
          left={0}
          display={{ base: "none", "3xl": "block" }}
        />
        <Flex ref={cardsRef} transition={"all 0.5s"} w={"100%"}>
          {items.map((item, i) => {
            return (
              <Flex
                key={i}
                direction={"column"}
                alignItems={"center"}
                gap={"25px"}
                py={{ base: "20px", xl: "60px" }}
                px={{ base: "20px", xl: "50px", "2xl": "70px", "3xl": "118px" }}
                borderRadius={24}
                bg={item.bgColor}
                color={"#fff"}
                flexBasis={"100%"}
                flexGrow={0}
                flexShrink={0}
                mb={"20px"}
                maxH={{ base: "100%", "2xl": "430px" }}
                pos={"relative"}
                zIndex={60}
                overflow={"hidden"}
              >
                <Heading
                  variant={{ base: "h3", xl: "h2" }}
                  textAlign={"center"}
                >
                  What our customer are saying
                </Heading>
                <Box
                  textStyle={"line"}
                  bg={"#fff"}
                  mb={{ base: "20px", "2xl": "66px" }}
                />
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  direction={{ base: "column", "2xl": "row" }}
                  gap={"40px"}
                >
                  <Flex
                    alignItems={"center"}
                    direction={{ base: "column", xl: "row" }}
                  >
                    <Image src="/avatar.png" h={133} mr={30} />
                    <Flex direction={"column"} gap={"5px"}>
                      <Text fontWeight={"700"} fontSize={"22px"} color={"#fff"}>
                        Edward Newgate
                      </Text>
                      <Text color={"#fff"} fontWeight={"400"}>
                        Founder Circle
                      </Text>
                    </Flex>
                  </Flex>
                  <Text
                    variant={"sliderText"}
                    w={{ base: "100%", "2xl": "50%" }}
                  >
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </Text>
                </Flex>
                <Image
                  src="/page/lightPoints.svg"
                  position={"absolute"}
                  top={"-5%"}
                  right={"-5%"}
                  display={{ base: "none", xl: "block" }}
                />
              </Flex>
            );
          })}
          <Image
            src="/page/lightPoints.svg"
            position={"absolute"}
            top={"-5%"}
            right={"-5%"}
            display={{ base: "none", xl: "block" }}
          />
        </Flex>
        <Flex
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"9px"}
        >
          <Button
            variant={"arrow"}
            onClick={prevCardHandler}
            disabled={prevDisabled}
          >
            <Arrow />
          </Button>
          {points.map((point, i) => {
            return (
              <Button
                key={i}
                onClick={() => onPointHandler(point)}
                variant={"point"}
                size={"point"}
                bg={point === slide ? "#5B9BF3" : "rgba(91, 155, 243, 0.3)"}
              />
            );
          })}
          <Button
            variant={"arrow"}
            transform={"rotate(180deg)"}
            onClick={nextCardHandler}
            disabled={nextDisabled}
          >
            <Arrow />
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Slider;
