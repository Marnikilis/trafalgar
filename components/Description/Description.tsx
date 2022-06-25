import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface DescriptionProps {
  heading: string;
  text: string;
  icon?: any;
  btnText: string;
  rowRev?: boolean;
  img: string;
}
const Description = ({
  heading,
  text,
  icon,
  btnText,
  img,
  rowRev,
}: DescriptionProps) => {
  return (
    <Flex
      gap={"100px"}
      alignItems={"center"}
      mb={{ base: "70px", "3xl": "190px" }}
      direction={{
        base: "column-reverse",
        "3xl": `row${rowRev ? "-reverse" : ""}`,
      }}
    >
      <Flex direction={"column"} gap={"25px"}>
        <Heading variant={"h2"}>{heading}</Heading>
        <Box textStyle={"line"} />
        <Text mb={"20px"}>{text}</Text>
        <Button
          size={"xl"}
          rightIcon={icon}
          alignSelf={{ base: "center", xl: "start" }}
        >
          {btnText}
        </Button>
      </Flex>
      <Image src={img} width={{ base: "90%", xl: "50%" }} />
    </Flex>
  );
};

export default Description;
