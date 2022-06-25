import React, { useState } from "react";
import Logo from "../Logo";
import { Container, Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "../UI/NavLink/NavLink";
import { Backdrop } from "./Backdrop/Backdrop";

const Header = () => {
  const [transform, setTransform] = useState("translateX(100%)");

  const menuCloseHandler = () => {
    setTransform("translateX(100%)");
  };
  return (
    <Container maxW={"container.xl"} px={15} pos={"relative"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        py={{ base: "15px", xl: "56px" }}
      >
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <Flex
          gap={"40px"}
          fontSize={"18px"}
          display={{ base: "none", "2xl": "flex" }}
        >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/findadoctor"}>Find a doctor</NavLink>
          <NavLink to={"/apps"}>Apps</NavLink>
          <NavLink to={"/testimonials"}>Testimonials</NavLink>
          <NavLink to={"/about"}>About us</NavLink>
        </Flex>
        <IconButton
          aria-label={"Open Menu"}
          size={"lg"}
          pos={"absolute"}
          top={{ base: "15px", xl: "50px" }}
          right={0}
          border={"none"}
          bg={"none"}
          icon={<HamburgerIcon />}
          display={{ base: "flex", "2xl": "none" }}
          onClick={() => setTransform("translate(0)")}
        />
        <Flex
          pos={"absolute"}
          transition={"all .5s"}
          zIndex={100}
          flexDirection={"column"}
          gap={"30px"}
          top={0}
          right={0}
          bg={"#DEEEFE"}
          h={"100vh"}
          py={"100px"}
          px={"50px"}
          fontSize={"18px"}
          display={{ base: "flex", "2xl": "none" }}
          transform={transform}
        >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/findadoctor"}>Find a doctor</NavLink>
          <NavLink to={"/apps"}>Apps</NavLink>
          <NavLink to={"/testimonials"}>Testimonials</NavLink>
          <NavLink to={"/about"}>About us</NavLink>
          <Flex position={"absolute"} top={"50px"} right={"10px"}>
            <IconButton
              aria-label={"Close Menu"}
              size={"lg"}
              border={"none"}
              zIndex={200}
              bg={"none"}
              icon={<CloseIcon />}
              onClick={menuCloseHandler}
            />
          </Flex>
        </Flex>
      </Flex>
      {transform === "translate(0)" && <Backdrop onClick={menuCloseHandler} />}
    </Container>
  );
};

export default Header;
