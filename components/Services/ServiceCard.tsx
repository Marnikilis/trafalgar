import React from "react";
import { Flex, Container, Heading, Text, Image } from "@chakra-ui/react";

const ServiceCard = () => {
  return (
    <Container
      w={"350px"}
      boxShadow={"10px 40px 50px rgba(229, 233, 246, 0.4)"}
      borderRadius={"20px"}
      position={"relative"}
      zIndex={60}
      bg={"#fff"}
    >
      <Flex direction={"column"} alignItems={"start"} gap={"20px"} p={"40px"}>
        <Image src="/services/search.svg" h={"90px"} />
        <Heading variant={"h3"}>Search doctor</Heading>
        <Text variant={"caption"}>
          Choose your doctor from thousands of specialist, general, and trusted
          hospitals
        </Text>
      </Flex>
    </Container>
  );
};

export default ServiceCard;
