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
      w={{ sm: "100%", md: "350px" }}
      boxShadow={"10px 40px 50px rgba(229, 233, 246, 0.4)"}
      borderRadius={"20px"}
      position={"relative"}
      zIndex={60}
      bg={"#fff"}
    >
      <Flex direction={"column"} alignItems={"start"} gap={"20px"} p={"40px"}>
        <Image src={photoSrc} h={"90px"} />
        <Heading variant={"h3"}>{heading}</Heading>
        <Text variant={"caption"}>{text}</Text>
      </Flex>
    </Container>
  );
};

export default ServiceCard;
