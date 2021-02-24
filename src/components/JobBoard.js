import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import StyledButton from "./StyledButton";
import {
  Box,
  Text,
  Flex,
  useColorMode,
  useStyles,
  Spinner,
  Icon,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { FiRefreshCw } from "react-icons/fi";
import useFetch from "../utils/hooks/useFetch";

const JobBoard = ({
  setJobId,
  logos,
  colors,
  setCurrentLogo,
  setCurrentColor,
}) => {
  const { colorMode } = useColorMode();
  const {
    fetchData,
    queryJobs,
    jobs,
    isLoading,
    loadMore,
    setDescription,
    setLocation,
    setIsFullTimeOnly,
  } = useFetch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box mt="32px">
      <SearchBar
        setDescription={setDescription}
        setLocation={setLocation}
        setIsFullTimeOnly={setIsFullTimeOnly}
        queryJobs={queryJobs}
      />
      <Box direction="row" w="100%" minH="100%" m="auto" p="16px">
        <Box>
          <Flex
            my="8px"
            w={{ base: "100%", sm: "75%", md: "50%", lg: "60%" }}
            m="auto"
            align="center"
            justify="space-between"
          >
            {!isLoading && jobs && (
              <>
                <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="bold">
                  Showing {jobs.length} jobs
                </Text>
                <Stack align="center">
                  <IconButton
                    onClick={fetchData}
                    boxSize="2em"
                    icon={<FiRefreshCw />}
                  />
                  <Text fontSize="sm">Refresh</Text>
                </Stack>
              </>
            )}
          </Flex>

          {!isLoading && jobs && (
            <Flex
              height="100%"
              grow="1"
              justify="center"
              as="ul"
              w={{ base: "100%", sm: "80%", md: "90%", lg: "85%", xl: "70%" }}
              direction="row"
              wrap="wrap"
              m="auto"
            >
              {jobs &&
                jobs.map((job) => (
                  <Card
                    setJobId={setJobId}
                    key={job.id}
                    {...job}
                    logos={logos}
                    colors={colors}
                    setCurrentLogo={setCurrentLogo}
                    setCurrentColor={setCurrentColor}
                  />
                ))}
            </Flex>
          )}
        </Box>
        {isLoading && (
          <Box boxSize="2em" mx="auto">
            <Spinner size="xl" />
          </Box>
        )}
        {!isLoading && !jobs && (
          <Text>
            Something went wrong! We apologise for the inconvenience. Check back
            soon!
          </Text>
        )}
      </Box>
      {!isLoading && jobs.length >= 50 && (
        <Flex mt="16px" justify="center" m="auto">
          <StyledButton bg="brand.primary" col="white" onClick={loadMore}>
            Load More
          </StyledButton>
        </Flex>
      )}
    </Box>
  );
};

export default JobBoard;
