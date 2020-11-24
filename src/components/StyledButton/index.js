import React from "react";
import { Button } from "@chakra-ui/react";

const StyledButton = ({ bg, col, hover, children }) => {
  return (
    <Button
      as="button"
      fontSize="14px"
      rounded="4px"
      w="120px"
      h="40px"
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
