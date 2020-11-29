import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Icon,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  Stack,
  Flex,
  StackDivider,
  Link,
} from "@chakra-ui/react";
import { navigate } from "@reach/router";
import { MdKeyboardBackspace } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import StyledButton from "./StyledButton";

const BackArrowIcon = () => {
  return <Icon as={MdKeyboardBackspace} w="40px" h="40px" />;
};

const JobDetails = ({ jobs, jobId, colors, currentColor }) => {
  const { colorMode } = useColorMode();
  const [color, setColor] = useState();

  const getColor = () => {
    if (!color) {
      setColor(colors.map((color) => color.value));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getColor();
  }, []);

  const job = jobs.filter((job) => job.id === jobId);
  const position = job[0];

  const detailColor = colors.filter((color) => color.value === currentColor);

  return (
    <Box
      rounded="0 0 16px 16px"
      w={{ base: "100%", md: "80%", lg: "60%" }}
      m="auto"
      bg={colorMode === "light" ? "white" : "default.darkGray"}
    >
      <Box
        display={{ base: "grid" }}
        placeItems="center"
        position="relative"
        rounded={{ base: "0 0 32px 32px" }}
        w={{ base: "100%" }}
        h="128px"
        bg={color && detailColor[0].value}
      >
        <IconButton
          _active={{ variant: "ghost  " }}
          _hover={{ variant: "ghost" }}
          position="absolute"
          top={{ base: "8px", md: "30%" }}
          left="8px"
          onClick={() => navigate("/")}
          color="default.light"
          variant="ghost"
          icon={<BackArrowIcon />}
        />
        <Heading
          fontSize="24px"
          lineHeight="2"
          textAlign="center"
          color="default.light"
        >
          {position.company}
        </Heading>
      </Box>
      <Stack
        m="auto"
        w="90%"
        divider={
          <StackDivider
            key={""}
            borderColor={
              colorMode === "light" ? "default.dark" : "defualt.light"
            }
          />
        }
        m="auto"
      >
        <Box w={{ base: "300px", md: "85%" }}>
          <Heading as="h1" my="32px">
            {position.title}
          </Heading>
        </Box>
        <Box>
          <Flex p="8px" justify="space-between" direction="row">
            <Text>{position.location}</Text>
            <Text>{position.type}</Text>
          </Flex>
        </Box>
        <Box>
          <Heading as="h2" marginTop="32px" mb="16px">
            Job Description:
          </Heading>
          <ReactMarkdown source={position.description} />
        </Box>
        <Box>
          <Heading as="h2" marginTop="32px" mb="16px">
            How to Apply:
          </Heading>
          <Text>{position.how_to_apply}</Text>
        </Box>
        <Box m="auto">
          <Link href={position.url} target="_blank" method="get">
            <StyledButton my="32px" bg="dodgerblue" col="default.light">
              Apply Now
            </StyledButton>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default JobDetails;
