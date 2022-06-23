import React from "react";
import {
  Container,
  Flex,
  Box,
  Link,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <Box pos={"relative"}>
      <Image
        src="/page/pointsBg.svg"
        position={"absolute"}
        top={"-15%"}
        right={0}
        display={{ sm: "none", xl: "block" }}
      />
      <Flex
        bg={"linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)"}
        minH={"432px"}
        alignItems={"center"}
        pos={"relative"}
        zIndex={160}
      >
        <Image
          src="/page/lightPoints.svg"
          position={"absolute"}
          top={"77%"}
          left={"-2%"}
          display={{ sm: "none", xl: "block" }}
        />
        <Container maxW={"container.xl"} px={15}>
          <Flex
            rowGap={{ sm: "50px", lg: "145px" }}
            columnGap={{ sm: "50px" }}
            justifyContent={"space-between"}
            py={"56px"}
            color={"#fff"}
            wrap={"wrap"}
          >
            <Flex direction={"column"} w={{ sm: "100%", md: "30%" }}>
              <Link href={"/"} mb={"20px"}>
                <Logo
                  color={"#fff"}
                  logoTextColor={"#5B9BF3"}
                  logoColor={"#fff"}
                />
              </Link>
              <Text color={"#fff"} mb={"30px"}>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </Text>
              <Text variant={"caption"} color={"#fff"}>
                ©Trafalgar PTY LTD 2020. All rights reserved
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"15px"}>
              <Heading variant={"footerNav"}>Company</Heading>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Testimonials</Link>
              <Link href={"/"}>Find a doctor</Link>
              <Link href={"/"}>Apps</Link>
            </Flex>
            <Flex direction={"column"} gap={"15px"}>
              <Heading variant={"footerNav"}>Region</Heading>
              <Link href={"/"}>Indonesia</Link>
              <Link href={"/"}>Singapore</Link>
              <Link href={"/"}>Hongkong</Link>
              <Link href={"/"}>Canada</Link>
            </Flex>
            <Flex direction={"column"} gap={"15px"}>
              <Heading variant={"footerNav"}>Help</Heading>
              <Link href={"/"}>Help center</Link>
              <Link href={"/"}>Contact support</Link>
              <Link href={"/"}>Instructions</Link>
              <Link href={"/"}>How it works</Link>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

export default Footer;
