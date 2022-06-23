import React from "react";
import { Flex, Heading, Container, Image, Box, Button } from "@chakra-ui/react";
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
    <Box position={"relative"} mb={"80px"}>
      <Image src="/page/servicesBg.svg" position={"absolute"} top={"-10%"} />
      <Image
        src="/page/pointsBg.svg"
        position={"absolute"}
        top={"52%"}
        right={"8%"}
        display={{ sm: "none", xl: "block" }}
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
          <Button size={"xl"}>Learn more</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Services;
