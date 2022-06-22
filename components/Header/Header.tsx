import React from "react";
import Logo from "../Logo";
import { Container, Flex } from "@chakra-ui/react";
import NavLink from "../UI/NavLink/NavLink";

const Header = () => {
  return (
    <Container maxW={"container.xl"} px={15}>
      <Flex justifyContent={"space-between"} alignItems={"center"} py={"56px"}>
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <Flex gap={"40px"} fontSize={"18px"}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/findadoctor"}>Find a doctor</NavLink>
          <NavLink to={"/apps"}>Apps</NavLink>
          <NavLink to={"/testimonials"}>Testimonials</NavLink>
          <NavLink to={"/about"}>About us</NavLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
