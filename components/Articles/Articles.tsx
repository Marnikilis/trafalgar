import React from "react";
import { Box, Button, Container, Flex, Heading, Image } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const articles = [
    {
      photoSrc: "/articles/detection.png",
      heading: "Disease detection, check up in the laboratory",
      text: "In this case, the role of the health laboratory is very important to do a disease detection...",
    },
    {
      photoSrc: "/articles/herbal.png",
      heading: "Herbal medicines that are safe for consumption",
      text: "Herbal medicine is very widely used at this time because of its very good for your health...",
    },
    {
      photoSrc: "/articles/naturalCare.png",
      heading: "Natural care for healthy facial skin",
      text: "A healthy lifestyle should start from now and also for your skin health.There are some...",
    },
  ];
  return (
    <Box position={"relative"} mb={"80px"} overflow={"hidden"}>
      <Image
        src="/page/articlesBg.svg"
        position={"absolute"}
        top={{ lg: "10%", xl: "-10%" }}
        right={0}
        display={{ base: "none", lg: "block" }}
      />
      <Image
        src="/page/pointsBg.svg"
        position={"absolute"}
        top={"10%"}
        left={"9%"}
        display={{ base: "none", xl: "block" }}
      />
      <Container maxW={"1125px"} px={15}>
        <Flex direction={"column"} alignItems={"center"} gap={10}>
          <Heading variant={"h2"}>Check out our latest article</Heading>
          <Box textStyle={"line"} />
          <Flex wrap={"wrap"} gap={"17px"} mb={"70px"}>
            {articles.map((article, i) => {
              return (
                <ArticleCard
                  photoSrc={article.photoSrc}
                  heading={article.heading}
                  text={article.text}
                  key={i}
                />
              );
            })}
          </Flex>
          <Button size={"xl"}>View all</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Articles;
