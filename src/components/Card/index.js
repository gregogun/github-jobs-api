import React from "react";
import {
  Box,
  Stack,
  Flex,
  ListItem,
  Text,
  Link,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";
import { useState, useEffect } from "react";
import shuffle from "../../utils/shuffleArray";

const Card = ({
  id,
  created_at,
  type,
  title,
  company,
  location,
  setJobId,
  logos,
  colors,
  setCurrentLogo,
  setCurrentColor,
}) => {
  const { colorMode } = useColorMode();
  const [randomColValue, setRandomColValue] = useState();
  const [color, setColor] = useState();

  const randomise = () => {
    const randomCol = shuffle(colors);
    setRandomColValue(randomCol);
  };

  const getColor = () => {
    if (!color) {
      setColor(colors.map((color) => color.value));
    }
  };

  useEffect(() => {
    getColor();
  }, []);

  useEffect(() => {
    if (!randomColValue) {
      randomise();
    }
  }, [color]);

  useEffect(() => {
    if (color && id) {
      setCurrentColor(color[randomColValue]);
      setJobId(id);
    }
  }, [color, id]);

  const Company = () => {
    return (
      <Box>
        <Text
          fontSize="14px"
          color={colorMode === "light" ? "#888" : "default.lightGray"}
          fontWeight="bold"
        >
          {company}
        </Text>
      </Box>
    );
  };

  const Title = () => {
    return (
      <Box w="300px">
        <Text
          color={colorMode === "light" ? "default.darkGray" : "default.light"}
          fontSize="18px"
          fontWeight="bold"
          cursor="pointer"
        >
          <Link as={ReachLink} to="apply">
            {title}
          </Link>
        </Text>
      </Box>
    );
  };

  return (
    <ListItem
      boxShadow="0px 2px 2px rgba(50, 50, 50, 0.12)"
      bg={colorMode === "light" ? "default.light" : "default.darkGray"}
      listStyleType="none"
      rounded="16px"
      w="340px"
      minH="300px"
      m={["16px 0", "16px 0", "16px 32px"]}
      p="16px"
    >
      <Stack w="100%" height="100%" direction="column" justify="space-between">
        <Stack>
          <Box
            padding="1"
            display="grid"
            placeItems="center"
            rounded="8px"
            w="100%"
            h="80px"
            bg={color && color[randomColValue]}
          >
            <Heading
              w="90%"
              fontSize="20px"
              lineHeight="2"
              textAlign="center"
              color="default.light"
            >
              {company}
            </Heading>
          </Box>
          <Company />
          <Title />
          <Box>
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
