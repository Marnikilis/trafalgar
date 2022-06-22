import {
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode;
  to: string;
  activeProps?: LinkProps;
  _hover?: LinkProps;
}

function NavLink({
  to,
  activeProps,
  children,
  _hover,
  ...props
}: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === to;
  // const color = useColorModeValue("#7D7987", "selected");

  if (isActive) {
    return (
      <Link href={to}>
        <ChakraLink
          fontWeight="700"
          {...props}
          {...activeProps}
          _hover={{ color: "#7D7987" }}
          color={"#1F1534"}
        >
          {children}
        </ChakraLink>
      </Link>
    );
  }

  return (
    <Link href={to}>
      <ChakraLink {...props} color={"#7D7987"} _hover={{ color: "#1F1534" }}>
        {children}
      </ChakraLink>
    </Link>
  );
}

export default NavLink;
