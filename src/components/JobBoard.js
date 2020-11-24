import React, { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import StyledButton from "./StyledButton";
import { Box, Text, Flex, useColorMode } from "@chakra-ui/react";

const Loading = () => {
  return <Text>Loading jobs...</Text>;
};

const JobBoard = ({ jobs, isLoading, loadMore, setShowDetails, setJobId }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box direction="row" w="100%" minH="100%" m="auto" p="16px">
        <Box>
          <Box>
            <Box
              my="8px"
              // bg="lightseagreen"
              w={["100%", "", "80%", "60%"]}
              m="auto"
            >
              {isLoading ? (
                <Loading />
              ) : (
                <Text fontSize="18px" fontWeight="bold">
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
                  setShowDetails={setShowDetails}
                  key={job.id}
                  {...job}
                />
              ))}
          </Flex>
        </Box>
        {!isLoading && jobs.length >= 50 && (
          <Flex justify="center" m="auto">
            <StyledButton bg="brand.primary" col="white" onClick={loadMore}>
              Load More
            </StyledButton>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default JobBoard;
