import React from "react";
import { Box, Button, Container, Flex, Heading, Image } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <Box position={"relative"} mb={"80px"} overflow={"hidden"}>
      <Image
        src="/page/articlesBg.svg"
        position={"absolute"}
        top={"-10%"}
        right={0}
      />
      <Image
        src="/page/pointsBg.svg"
        position={"absolute"}
        top={"10%"}
        left={"9%"}
      />
      <Container maxW={"1125px"} px={15}>
        <Flex direction={"column"} alignItems={"center"} gap={10}>
          <Heading variant={"h2"}>Check out our latest article</Heading>
          <Box textStyle={"line"} />
          <Flex wrap={"wrap"} gap={"17px"} mb={"70px"}>
            <ArticleCard /> <ArticleCard /> <ArticleCard />
          </Flex>
          <Button size={"xl"}>View all</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Articles;
