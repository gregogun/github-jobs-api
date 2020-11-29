import React, { useEffect } from "react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Main from "./Main";
import customTheme from "../utils/theme";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
