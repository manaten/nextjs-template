import { Box, StyleProps } from "@chakra-ui/react";
import React from "react";

type HeaderProps = StyleProps & React.PropsWithChildren;

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => (
  <Box as="header" p={4} w="100%" bgColor="black" color="white" textAlign="center" {...props}>
    {children}
  </Box>
);
