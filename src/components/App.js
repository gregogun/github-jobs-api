import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Main from "./Main";
import customTheme from "../utils/theme";
import Header from "./Header";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Main />
    </ChakraProvider>
  );
};

export default App;
