import React, { useEffect } from "react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Main from "./Main";
import customTheme from "../utils/theme";
import Header from "./Header";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Main />
    </ChakraProvider>
  );
};

export default App;
