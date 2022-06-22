import React from "react";
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

const Slider = () => {
  return (
    <Container maxW={"1200px"} mb={100} pos={"relative"}>
      <Image
        src="/page/pointsBg.svg"
        position={"absolute"}
        top={"55%"}
        left={"-4%"}
      />
      <Flex
        direction={"column"}
        alignItems={"center"}
        gap={"25px"}
        py={"60px"}
        px={"118px"}
        borderRadius={24}
        bg={"linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)"}
        color={"#fff"}
        mb={"20px"}
        minH={"430px"}
        pos={"relative"}
        zIndex={60}
        overflow={"hidden"}
      >
        <Heading variant={"h2"}>What our customer are saying</Heading>
        <Box textStyle={"line"} bg={"#fff"} mb={"66px"} />
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={{ sm: "column", lg: "row" }}
        >
          <Flex alignItems={"center"}>
            <Image src="/avatar.png" h={133} mr={30} />
            <Flex direction={"column"} w={"100%"} gap={"5px"}>
              <Text fontWeight={"700"} fontSize={"22px"} color={"#fff"}>
                Edward Newgate
              </Text>
              <Text color={"#fff"} fontWeight={"400"}>
                Founder Circle
              </Text>
            </Flex>
          </Flex>
          <Text variant={"sliderText"} w={"50%"}>
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </Text>
        </Flex>
        <Image
          src="/page/lightPoints.svg"
          position={"absolute"}
          top={"-5%"}
          right={"-5%"}
        />
      </Flex>
      <Flex
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"9px"}
      >
        <Button variant={"arrow"}>
          <Arrow disabled />
        </Button>
        <Button variant={"point"} size={"point"} />{" "}
        <Button variant={"point"} size={"point"} />{" "}
        <Button variant={"point"} size={"point"} />
        <Button variant={"point"} size={"point"} />
        <Button variant={"arrow"} transform={"rotate(180deg)"}>
          <Arrow />
        </Button>
      </Flex>
    </Container>
  );
};

export default Slider;
