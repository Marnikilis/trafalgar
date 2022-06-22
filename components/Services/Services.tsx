import React from "react";
import {
  Flex,
  Heading,
  Text,
  Container,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <Box position={"relative"} mb={"80px"}>
      <Image src="/page/servicesBg.svg" position={"absolute"} top={"-10%"} />
      <Image
        src="/page/pointsBg.svg"
        position={"absolute"}
        top={"52%"}
        right={"8%"}
      />
      <Container maxW={"1125px"} px={15} position={"relative"} zIndex={60}>
        <Flex direction={"column"} alignItems={"center"} gap={10}>
          <Heading textStyle={"h2"}>Our services</Heading>
          <Box textStyle={"line"} />
          <Box textStyle={"text"} mb={"80px"}>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Box>
          <Flex wrap={"wrap"} gap={"17px"}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </Flex>
          <Button size={"xl"}>Learn more</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Services;
