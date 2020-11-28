import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import StyledButton from "./StyledButton";
import { Box, Text, Flex, useColorMode } from "@chakra-ui/react";
import shuffle from "../utils/shuffleArray";

const Loading = () => {
  return <Text>Loading jobs...</Text>;
};

const JobBoard = ({
  jobs,
  isLoading,
  loadMore,
  setShowDetails,
  setJobId,
  queryJobs,
  setDescription,
  setLocation,
  setIsFullTimeOnly,
  logos,
  colors,
  setCurrentLogo,
  setCurrentColor,
}) => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <SearchBar
        setDescription={setDescription}
        setLocation={setLocation}
        setIsFullTimeOnly={setIsFullTimeOnly}
        queryJobs={queryJobs}
      />
      <Box direction="row" w="100%" minH="100%" m="auto" p="16px">
        <Box>
          <Box>
            <Box
              my="8px"
              // bg="lightseagreen"
              w={{ base: "100%", sm: "75%", md: "50%", lg: "60%" }}
              m="auto"
            >
              {isLoading ? (
                <Loading />
              ) : (
                <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="bold">
                  Showing {jobs.length} jobs
                </Text>
              )}
            </Box>
          </Box>

          <Flex
            height="100%"
            // bg="skyblue"
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
        </Box>
        {!isLoading && jobs.length >= 50 && (
          <Flex bg="red.200" justify="center" m="auto">
            <StyledButton bg="brand.primary" col="white" onClick={loadMore}>
              Load More
            </StyledButton>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default JobBoard;
