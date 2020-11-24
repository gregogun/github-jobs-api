import {
  Box,
  List,
  ListItem,
  Link,
  Flex,
  Icon,
  IconButton,
  useColorMode,
  color,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";
import React from "react";
import Logo from "../assets/Logo";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const FindJob = () => {
  return (
    <ListItem
      textAlign="center"
      // mr={["12px", "16px", "24px"]}
    >
      <Link as={ReachLink} to="/">
        Find a job
      </Link>
    </ListItem>
  );
};

const PostJob = () => {
  return (
    <ListItem
      // mx={{ md: "16px" }}
      textAlign="center"
    >
      <Link href="https://jobs.github.com/post" target="_blank" method="get">
        Post a job
      </Link>
    </ListItem>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const colorScheme = useColorModeValue("default.light", "default.darkGray");

  console.log(isOpen);

  const toggleIsOpen = () => {
    console.log("toggle open here");
    setIsOpen(!isOpen);
  };

  return (
    <Box
      as="header"
      display="grid"
      placeItems="center"
      w="100vw"
      minH="10vh"
      bg={colorMode === "light" ? "default.light" : "default.darkGray"}
    >
      <Flex
        h="100%"
        p="16px 16px 4px 16px"
        m="auto"
        w={{ base: "100%", md: "90%", lg: "70%" }}
        // bg="lightyellow"
        as="nav"
        direction="row"
        justify="space-between"
        align="center"
      >
        <Flex
          // bg="grey"
          w="100%"
          position="relative"
          display={{ base: "block", md: "flex" }}
          justify="space-between"
        >
          <Flex direction="row" align="center">
            <Logo />
            <Heading display={{ base: "none", md: "block" }} ml="4px">
              gitjobs
            </Heading>
          </Flex>
          <Box
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            w={{ md: "30%", lg: "30%", xl: "15%" }}
            // bg="lightseagreen"
            my="8px"
            mx={{ md: "16px" }}
            py="16px"
            justifyContent={{ md: "space-between" }}
            borderTop={{ base: "2px solid", md: 0 }}
            borderTopColor={
              colorMode === "light" ? "default.lightGray" : "default.lightGray"
            }
            alignItems="center"
            //flexGrow={1}
            as="ul"
            listStyleType="none"
          >
            <FindJob />
            <PostJob />
          </Box>
        </Flex>
        <Box
          display={{ base: "flex", md: "block" }}
          position={{ base: "absolute", md: "relative" }}
          top={{ base: "20px", sm: "16px", md: 0 }}
          right={{ base: "16px", md: 0 }}
        >
          <IconButton
            onClick={toggleColorMode}
            mr="16px"
            aria-label={
              colorMode === "light" ? "Toggle dark mode" : "Toggle light mode"
            }
            colorScheme={colorScheme}
            color={colorMode === "light" ? "default.dark" : "default.light"}
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          />
          <IconButton
            display={{ base: "grid", md: "none" }}
            placeItems="center"
            onClick={toggleIsOpen}
            aria-label="Open menu"
            icon={isOpen ? <FaTimes /> : <FaBars />}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
