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

const ArticleCard = () => {
  return (
    <Flex
      direction={"column"}
      w={"350px"}
      alignItems={"start"}
      p={"0"}
      boxShadow={"10px 40px 50px rgba(229, 233, 246, 0.4)"}
      borderRadius={"20px"}
      position={"relative"}
      zIndex={60}
      bg={"#fff"}
      overflow={"hidden"}
    >
      <Box
        bgImage={"/articles/detection.png"}
        w={"100%"}
        h={"246px"}
        bgSize={"cover"}
      />
      <Flex direction={"column"} alignItems={"start"} p={"20px"}>
        <Heading variant={"h4"} mb={"12px"}>
          Disease detection, check up in the laboratory
        </Heading>
        <Text variant={"caption"} mb={"25px"}>
          In this case, the role of the health laboratory is very important to
          do a disease detection...
        </Text>
        <Button variant={"arrow"} p={0} rightIcon={<Arrow />}>
          Read more
        </Button>
      </Flex>
    </Flex>
  );
};

export default ArticleCard;
