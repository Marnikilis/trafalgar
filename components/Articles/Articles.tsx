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
    <Box
      position={"relative"}
      mb={{ base: "100px", "3xl": "200px" }}
      overflow={"hidden"}
    >
      <Image
        src="/page/articlesBg.svg"
        position={"absolute"}
        top={{ "2xl": "10%", "3xl": "-10%" }}
        right={0}
        display={{ base: "none", "2xl": "block" }}
      />
      <Image
        src="/page/pointsBg.svg"
        position={"absolute"}
        top={"15%"}
        left={"9%"}
        display={{ base: "none", "3xl": "block" }}
      />
      <Container maxW={"1125px"} px={"15px"}>
        <Flex direction={"column"} alignItems={"center"}>
          <Heading
            variant={"h2"}
            alignSelf={{ base: "start", xl: "center" }}
            mb={"35px"}
          >
            Check out our latest article
          </Heading>
          <Box
            textStyle={"line"}
            alignSelf={{ base: "start", xl: "center" }}
            mb={"80px"}
          />
          <Flex
            wrap={"wrap"}
            gap={"17px"}
            mb={"70px"}
            // justifyContent={{ base: "center", "2xl": "start" }}
            // px={{ base: "50px" }}
          >
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
