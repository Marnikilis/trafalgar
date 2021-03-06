import type { NextPage } from "next";
import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Arrow from "../public/page/arrowDown.svg";
import Slider from "../components/Slider/Slider";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";
import React from "react";
import Description from "../components/Description/Description";

const Home: NextPage = () => {
  return (
    <Flex direction={"column"} h={"100%"} minH={"100vh"} overflow={"hidden"}>
      <Flex direction={"column"} flex={"1 0 auto"}>
        <Header />
        <Image
          src="/page/pointsBg.svg"
          position={"absolute"}
          top={"130px"}
          left={"-4%"}
          display={{ base: "none", "3xl": "block" }}
        />
        <Container maxW={"container.xl"} px={"15px"}>
          <Flex
            gap={"110px"}
            alignItems={"center"}
            mb={{ base: "70px", xl: "100px", "2xl": "140px", "3xl": "220px" }}
            direction={{ base: "column-reverse", "2xl": "row" }}
          >
            <Flex direction={"column"} gap={"25px"}>
              <Heading variant={{ base: "h2", "2xl": "h1" }}>
                Virtual healthcare for you
              </Heading>
              <Text variant={"mainText"} mb={"20px"}>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </Text>
              <Button
                variant={"blue"}
                size={"xl"}
                alignSelf={{ base: "center", xl: "start" }}
              >
                Consult today
              </Button>
            </Flex>
            <Image src="/page/virtualhc.png" width={{ sm: "90%", xl: "55%" }} />
          </Flex>
        </Container>
        <Services />
        <Container maxW={"container.xl"} px={15} pos={"relative"}>
          <Description
            heading={"Leading healthcare providers"}
            text={
              "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it???s not just work. We take pride \n" +
              "in the solutions we deliver"
            }
            btnText={"Learn more"}
            rowRev={true}
            img={"/page/leading.png"}
          />
          <Image
            src="/page/pointsBg.svg"
            position={"absolute"}
            top={"70%"}
            right={"-10%"}
            display={{ base: "none", "3xl": "block" }}
          />
        </Container>
        <Container maxW={"container.xl"} px={15}>
          <Description
            heading={"Download our mobile apps"}
            icon={<Arrow />}
            text={
              "Our dedicated patient engagement app and \n" +
              "web portal allow you to access information instantaneously (no tedeous form, long calls, \n" +
              "or administrative hassle) and securely"
            }
            btnText={"Download"}
            img={"/page/download.png"}
          />
        </Container>
        <Slider />
        <Articles />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;
