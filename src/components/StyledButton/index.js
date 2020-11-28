import React from "react";
import { Button } from "@chakra-ui/react";

const StyledButton = ({ bg, col, hover, onClick, children, ...props }) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      as="button"
      fontSize="16px"
      rounded="4px"
      w="128px"
      h="48px"
      bg={bg}
      color={col}
      _hover={hover}
      fontWeight="600"
    >
      {children}
    </Button>
  );
};

export default StyledButton;
