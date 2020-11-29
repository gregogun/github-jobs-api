import React from "react";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode();
  const color = useColorModeValue("default.dark", "default.light");
  const colorScheme = useColorModeValue("default.light", "default.dark");

  return (
    <Box
      boxShadow=" 0px -1px 1px rgba(50, 50, 50, 0.12)"
      mt="32px"
      as="footer"
      w="100vw"
      minH="10vh"
      display="grid"
      placeItems="center"
      bg={colorMode === "light" ? "default.light" : "default.darkGray"}
    >
      <Flex
        direction="row"
        m="auto"
        w={{ base: "80%", md: "60%", lg: "40%" }}
        align="center"
        justifyContent="center"
        justify="space-evenly"
      >
        <Text
          fontSize="18px"
          fontWeight="bold"
          display={{ base: "none", md: "block" }}
        >
          Created by Greg Ogun {""} <span>🚀</span>
        </Text>
        <Flex w={{ base: "60%", lg: "40%" }} m="auto" justify="space-evenly">
          <Link href="https://github.com/gregogun" target="_blank" method="get">
            <IconButton
              variant="ghost"
              color={color}
              colorScheme={colorScheme}
              icon={<Icon w="24px" h="24px" as={FaGithub} />}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/greg-ogun/"
            target="_blank"
            method="get"
          >
            <IconButton
              variant="ghost"
              color={color}
              colorScheme={colorScheme}
              icon={<Icon w="24px" h="24px" as={FaLinkedin} />}
            />
          </Link>
          <Link
            href="https://twitter.com/gregogun"
            target="_blank"
            method="get"
          >
            <IconButton
              variant="ghost"
              color={color}
              colorScheme={colorScheme}
              icon={<Icon w="24px" h="24px" as={FaTwitter} />}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
