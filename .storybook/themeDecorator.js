import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/utils/theme";

const ThemeDecorator = (storyFn) => (
  <ChakraProvider theme={theme}>{storyFn()}</ChakraProvider>
);

export default ThemeDecorator;
