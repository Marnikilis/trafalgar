import React from "react";
import { Flex, Container, Heading, Text, Image } from "@chakra-ui/react";

interface ServiceProps {
  photoSrc: string;
  heading: string;
  text: string;
}

const ServiceCard = ({ photoSrc, heading, text }: ServiceProps) => {
  return (
    <Container
      w={{ base: "90%", "2xl": "47%", "3xl": "350px" }}
      boxShadow={"5px 20px 30px rgba(229, 233, 246,1)"}
      borderRadius={"20px"}
      position={"relative"}
      zIndex={60}
      bg={"#fff"}
    >
      <Flex
        direction={"column"}
        alignItems={"start"}
        gap={"30px"}
        px={{ base: "20px", xl: "40px" }}
        py={{ base: "20px", xl: "45px" }}
      >
        <Image src={photoSrc} h={"90px"} />
        <Heading variant={"h3"}>{heading}</Heading>
        <Text variant={"caption"}>{text}</Text>
      </Flex>
    </Container>
  );
};

export default ServiceCard;
