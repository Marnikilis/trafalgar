import React from "react";
import {
  Flex,
  Heading,
  Container,
  Image,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      photoSrc: "/services/search.svg",
      heading: "Search doctor",
      text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      photoSrc: "/services/onlinepharmacy.svg",
      heading: "Online pharmacy",
      text: "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      photoSrc: "/services/consultation.svg",
      heading: "Consultation",
      text: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      photoSrc: "/services/details.svg",
      heading: "Details info",
      text: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      photoSrc: "/services/emergency.svg",
      heading: "Emergency care",
      text:
        "You can get 24/7 urgent care for yourself or your children and your\n" +
        "lovely family",
    },
    {
      photoSrc: "/services/tracking.svg",
      heading: "Tracking",
      text: "Track and save your medical history and health data ",
    },
  ];

  return (
    <Box
      position={"relative"}
      mb={{ base: "80px", xl: "100px", "2xl": "140px", "3xl": "220px" }}
    >
      <Image
        src="/page/servicesBg.svg"
        position={"absolute"}
        top={"-10%"}
        display={{ base: "none", xl: "block" }}
      />
      <Image
        src="/page/pointsBg.svg"
        position={"absolute"}
        top={"52%"}
        right={"8%"}
        display={{ base: "none", "3xl": "block" }}
      />
      <Container maxW={"1125px"} px={"15px"} position={"relative"} zIndex={60}>
        <Flex direction={"column"} alignItems={{ base: "start", xl: "center" }}>
          <Heading textStyle={"h2"} mb={"35px"}>
            Our services
          </Heading>
          <Box textStyle={"line"} mb={"40px"} />
          <Text
            mb={"80px"}
            textAlign={{ base: "start", "3xl": "center" }}
            px={{ base: "0", "3xl": "80px" }}
          >
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Text>
          <Flex wrap={"wrap"} gap={{ base: "30px", "3xl": "17px" }} mb={"70px"}>
            {services.map((service, i) => {
              return (
                <ServiceCard
                  photoSrc={service.photoSrc}
                  heading={service.heading}
                  text={service.text}
                  key={i}
                />
              );
            })}
          </Flex>
          <Button size={"xl"} alignSelf={"center"}>
            Learn more
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Services;
