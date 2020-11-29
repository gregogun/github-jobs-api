import {
  Box,
  ListItem,
  Link,
  Flex,
  IconButton,
  useColorMode,
  color,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReachLink, navigate } from "@reach/router";
import React from "react";
import Logo from "../assets/Logo";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const LogoContent = () => {
    return (
      <Flex direction="row" align="center">
        <Logo />
        <Heading display={{ base: "none", md: "block" }} ml="4px">
          gitjobs
        </Heading>
      </Flex>
    );
  };

  const FindJob = () => {
    return (
      <ListItem
        mx={{ md: "8px" }}
        my={{ base: "16px", md: 0 }}
        fontSize={{ base: "20px", md: "16px" }}
        textAlign="center"
      >
        <Link onClick={toggleIsOpen} as={ReachLink} to="/">
          Find a job
        </Link>
      </ListItem>
    );
  };

  const PostJob = () => {
    return (
      <ListItem
        mx={{ md: "8px" }}
        my={{ base: "16px", md: 0 }}
        fontSize={{ base: "20px", md: "16px" }}
        textAlign="center"
      >
        <Link
          onClick={toggleIsOpen}
          href="https://jobs.github.com/post"
          target="_blank"
          method="get"
        >
          Post a job
        </Link>
      </ListItem>
    );
  };

  const colorScheme = useColorModeValue("default.light", "default.darkGray");

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      boxShadow="0px 1px 1px rgba(50, 50, 50, 0.12)"
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
          align="center"
          w={{ base: "100%", md: "70%", lg: "65%", xl: "60%" }}
          position="relative"
          display={{ base: "block", md: "flex" }}
          justify="space-between"
        >
          <IconButton
            onClick={() => navigate("/")}
            variant="ghost"
            minW="50px"
            minH="50px"
            icon={<LogoContent />}
          />
          <Box
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            w={{ md: "50%", lg: "50%", xl: "35%" }}
            my="8px"
            mx={{ md: "16px" }}
            py="16px"
            justifyContent={{ md: "space-evenly" }}
            borderTop={{ base: "1px solid", md: 0 }}
            borderTopColor={
              colorMode === "light" ? "default.lightGray" : "default.lightGray"
            }
            alignItems="center"
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
            colorScheme={colorScheme}
            color={colorMode === "light" ? "default.dark" : "default.light"}
            icon={isOpen ? <FaTimes /> : <FaBars />}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
