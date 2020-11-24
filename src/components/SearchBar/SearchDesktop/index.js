import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import LocationSearch from "../LocationSearch";
import TitleSearch from "../TitleSearch";
import StyledButton from "../../StyledButton";

const SearchDesktop = ({ queryJobs }) => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isFullTimeOnly, setIsFullTimeOnly] = useState("");
  const { colorMode } = useColorMode();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search fired");
    console.log(isFullTimeOnly);
    console.log(location);
    console.log(description);
    queryJobs({
      location: location,
      description: description,
      isFullTimeOnly: isFullTimeOnly,
    });
  };

  const handleInputChange = (e) => {
    console.log("here");
    if (e.target.name === "title") {
      setDescription(e.target.value);
      console.log(description);
    } else {
      setLocation(e.target.value);
    }
  };

  return (
    <Box
      bg={colorMode === "light" ? "default.light" : "default.darkGray"}
      boxShadow="2px 
    2px 4px 0 rgba(50, 50, 50, 0.12)"
      padding="16px"
      rounded="8px"
      w={{ base: "90%", lg: "80%", xl: "70%" }}
      mx="auto"
      mb="32px"
    >
      <form action="" onSubmit={handleSubmit}>
        <Flex
          direction="row"
          // bg="wheat"
          p="8px"
          align="center"
          w="100%"
          justify="space-evenly"
        >
          <Flex w="60%">
            <Box w="50%">
              <TitleSearch
                description={description}
                handleInputChange={handleInputChange}
              />
            </Box>
            <Box w="50%">
              <LocationSearch
                location={location}
                handleInputChange={handleInputChange}
              />
            </Box>
          </Flex>
          <Box>
            <FormControl id="checkbox">
              <Flex direction="row" align="center" h="24px">
                <FormLabel mt="6px" fontSize="14px">
                  Full Time Only
                </FormLabel>
                <Checkbox
                  onClick={() =>
                    setIsFullTimeOnly("checked" === true ? "off" : "on")
                  }
                />
              </Flex>
            </FormControl>
          </Box>
          <Box>
            <StyledButton bg="brand.primary" col="white">
              Search
            </StyledButton>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

export default SearchDesktop;
