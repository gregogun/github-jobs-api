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
} from "@chakra-ui/react";
import { navigate } from "@reach/router";
import { MdKeyboardBackspace } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import StyledButton from "./StyledButton";

const BackArrowIcon = () => {
  return <Icon as={MdKeyboardBackspace} w="40px" h="40px" />;
};

const JobDetails = ({
  setShowDetails,
  jobs,
  jobId,
  logos,
  colors,
  currentLogo,
  currentColor,
}) => {
  const { colorMode } = useColorMode();
  const [color, setColor] = useState();

  const getColor = () => {
    if (!color) {
      setColor(colors.map((color) => color.value));
    }
  };

  useEffect(() => {
    getColor();
  }, []);

  const job = jobs.filter((job) => job.id === jobId);
  const position = job[0];
  // const description = position.description.replace(/<\/?[^>]+>/gi, "");

  const detailColor = colors.filter((color) => color.value === currentColor);

  return (
    <Box
      w={{ base: "100%", md: "80%", lg: "60%" }}
      mt={{ md: "64px" }}
      m="auto"
    >
      <Box
        display={{ base: "grid" }}
        // alignItems={{ base: "center" }}
        placeItems="center"
        position="relative"
        rounded={{ base: 0, md: "8px" }}
        w={{ base: "100%" }}
        h="100px"
        bg={color && detailColor[0].value}
      >
        <IconButton
          _active={{ variant: "ghost  " }}
          _hover={{ variant: "ghost" }}
          position="absolute"
          top={{ base: "8px", md: "25%" }}
          left="8px"
          // display="inline"
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
          <Text>
            <ReactMarkdown source={position.description} />
          </Text>
        </Box>
        <Box>
          <Heading as="h2" marginTop="32px" mb="16px">
            How to Apply:
          </Heading>
          <Text>{position.how_to_apply}</Text>
        </Box>
        <Box my="32px" m="auto">
          <StyledButton bg="dodgerblue" col="default.light">
            Apply Now
          </StyledButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default JobDetails;
