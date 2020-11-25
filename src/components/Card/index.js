import React from "react";
import {
  Box,
  Stack,
  Flex,
  ListItem,
  Text,
  Icon,
  Link,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { navigate } from "@reach/router";
import shuffle from "../../utils/shuffleArray";
import CompanyLogos from "../../assets/CompanyLogos";
import { useState, useEffect } from "react";

const Card = ({ id, created_at, type, title, company, location, setJobId }) => {
  const { colorMode } = useColorMode();
  const { logos, colors } = CompanyLogos();
  const [currentLogo, setCurrentLogo] = useState();

  const logo = logos.map((logo) => logo.name);
  const color = colors.map((color) => color.value);

  const randomLogoIndex = shuffle(logos);
  const randomColorIndex = shuffle(colors);

  const Company = () => {
    return (
      <Box
      //bg="wheat"
      >
        <Text
          fontSize="14px"
          color={colorMode === "light" ? "gray.500" : "default.lightGray"}
          fontWeight="bold"
        >
          {company}
        </Text>
      </Box>
    );
  };

  const Title = () => {
    return (
      <Box
        // bg="lightseagreen"
        w="300px"
      >
        <Text
          fontSize="18px"
          onClick={handleClick}
          fontWeight="bold"
          cursor="pointer"
        >
          <Link href="#0">{title}</Link>
        </Text>
      </Box>
    );
  };

  const handleClick = () => {
    setJobId(id);
    navigate("apply");
  };

  return (
    <ListItem
      boxShadow="2px 
      2px 4px 0 rgba(50, 50, 50, 0.12)"
      // border="2px solid"
      // borderColor="lightgray"
      bg={colorMode === "light" ? "default.light" : "default.darkGray"}
      listStyleType="none"
      rounded="16px"
      // w={["100%", "90%", "75%", "30%"]}
      w="340px"
      h="280px"
      m={["16px 0", "16px 0", "16px 32px"]}
      p="16px"
    >
      <Stack
        w="100%"
        height="100%"
        // bg="silver"
        justify="space-between"
        direction="column"
      >
        <Stack
        // bg="mistyrose"
        >
          <Box
            display="grid"
            placeItems="center"
            rounded="8px"
            w="64px"
            h="64px"
            bg={color[randomColorIndex]}
          >
            <Icon w="40px" h="40px" color="white" as={logo[randomLogoIndex]} />
          </Box>
          <Company />
          <Title />
          <Box
          //bg="lightcyan"
          >
            <Text
              fontWeight="bold"
              fontSize="14px"
              color={colorMode === "light" ? "gray.500" : "default.lightGray"}
            >
              Location
            </Text>
            <Text fontSize="14px" fontWeight="600">
              {location}
            </Text>
          </Box>
        </Stack>
        <Flex
          color={colorMode === "light" ? "gray.500" : "default.lightGray"}
          fontSize="14px"
          align="center"
          w="130px"
          direction="row"
          justify="space-between"
        >
          <Text fontWeight="bold">{type}</Text>
          <Box
            rounded="100%"
            w="4px"
            h="4px"
            bg={colorMode === "light" ? "gray.500" : "default.lightGray"}
          ></Box>
          <Text fontWeight="bold">{created_at.slice(4, 10)}</Text>
        </Flex>
      </Stack>
    </ListItem>
  );
};

export default Card;
