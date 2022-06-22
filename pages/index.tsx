import type { NextPage } from "next";
import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Arrow from "../public/page/arrowDown.svg";
import Slider from "../components/Slider/Slider";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";
import React from "react";

const Home: NextPage = () => {
  return (
    <Flex direction={"column"} h={"100%"} minH={"100vh"} overflow={"hidden"}>
      <Flex direction={"column"} flex={"1 0 auto"}>
        <Header />
        <Image
          src="/page/pointsBg.svg"
          position={"absolute"}
          top={"150px"}
          left={"-4%"}
        />
        <Container maxW={"container.xl"} px={15}>
          <Flex gap={"110px"} alignItems={"center"} mb={"190px"}>
            <Flex direction={"column"} gap={"25px"}>
              <Heading variant={"h1"}>Virtual healthcare for you</Heading>
              <Text variant={"mainText"} mb={"20px"}>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </Text>
              <Button variant={"blue"} size={"xl"}>
                Consult today
              </Button>
            </Flex>
            <Image
              src="/page/virtualhc.png"
              objectFit="contain"
              boxSize={"50%"}
            />
          </Flex>
        </Container>
        <Services />
        <Container maxW={"container.xl"} px={15} pos={"relative"}>
          <Flex gap={"100px"} alignItems={"center"} mb={"190px"}>
            <Image
              src="/page/leading.png"
              objectFit="contain"
              boxSize={"50%"}
            />
            <Flex direction={"column"} gap={"25px"}>
              <Heading variant={"h2"}>Virtual healthcare for you</Heading>
              <Box textStyle={"line"} />
              <Text mb={"20px"}>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </Text>
              <Button size={"xl"}>Learn more</Button>
            </Flex>
          </Flex>
          <Image
            src="/page/pointsBg.svg"
            position={"absolute"}
            top={"70%"}
            right={"-10%"}
          />
        </Container>
        <Container maxW={"container.xl"} px={15} mb={100}>
          <Flex gap={"100px"} alignItems={"center"}>
            <Flex direction={"column"} gap={"25px"}>
              <Heading variant={"h2"}>Virtual healthcare for you</Heading>
              <Box textStyle={"line"} />
              <Text mb={"20px"}>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </Text>
              <Button size={"xl"} rightIcon={<Arrow />}>
                Download
              </Button>
            </Flex>
            <Image
              src="/page/download.png"
              objectFit="contain"
              boxSize={"50%"}
            />
          </Flex>
        </Container>
        <Slider />
        <Articles />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;
