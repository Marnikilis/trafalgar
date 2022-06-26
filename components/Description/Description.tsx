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
      mb={{ base: "70px", xl: "100px", "2xl": "140px", "3xl": "230px" }}
      direction={{
        base: "column-reverse",
        "2xl": `row${rowRev ? "-reverse" : ""}`,
      }}
    >
      <Flex
        direction={"column"}
        gap={"25px"}
        paddingLeft={{ base: "0", "3xl": "45px" }}
      >
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
      <Image src={img} width={{ base: "90%", xl: "55%" }} />
    </Flex>
  );
};

export default Description;
