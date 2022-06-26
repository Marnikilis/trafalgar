import React from "react";
import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import Arrow from "../../public/page/arrowRight.svg";

interface ArticleProps {
  photoSrc: string;
  heading: string;
  text: string;
}

const ArticleCard = ({ photoSrc, heading, text }: ArticleProps) => {
  return (
    <Flex
      direction={"column"}
      w={{ base: "100%", xl: "350px" }}
      alignItems={"start"}
      p={"0"}
      boxShadow={"10px 40px 50px rgba(229, 233, 246, 0.4)"}
      borderRadius={"20px"}
      position={"relative"}
      zIndex={60}
      bg={"#fff"}
      overflow={"hidden"}
    >
      <Box bgImage={photoSrc} w={"100%"} h={"246px"} bgSize={"cover"} />
      <Flex direction={"column"} alignItems={"start"} p={"30px"}>
        <Heading variant={"h4"} mb={"20px"}>
          {heading}
        </Heading>
        <Text variant={"caption"} mb={"30px"}>
          {text}
        </Text>
        <Button variant={"arrow"} p={0} rightIcon={<Arrow />}>
          Read more
        </Button>
      </Flex>
    </Flex>
  );
};

export default ArticleCard;
