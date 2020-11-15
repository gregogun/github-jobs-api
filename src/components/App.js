import React from "react";
import { ChakraProvider, Box, Button } from "@chakra-ui/react";
import Main from "./Main";

const App = () => {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
};

export default App;
