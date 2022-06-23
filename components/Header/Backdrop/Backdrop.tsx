import { Box } from "@chakra-ui/react";

export const Backdrop = (props: any) => (
  <Box
    zIndex={80}
    bg={"rgba(0, 0, 0, 0.7)"}
    pos={"fixed"}
    top={0}
    right={0}
    left={0}
    bottom={0}
    backdropFilter={"blur(5px)"}
    onClick={props.onClick}
  />
);
