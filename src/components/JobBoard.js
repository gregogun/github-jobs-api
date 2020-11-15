import React, { useState } from "react";
import JobCard from "./JobCard";
import { Box, Heading, List, Button, Stack, Text } from "@chakra-ui/react";

const Loading = () => {
  return <Heading>Loading jobs...</Heading>;
};

const JobBoard = ({
  jobs,
  isLoading,
  queryJobs,
  loadMore,
  setShowDetails,
  setJobId,
}) => {
  return (
    <Stack
      align="center"
      direction="column"
      w={["90%", "80%", "70%", "65%", "50%"]}
      minH="100%"
      m="auto"
    >
      <Stack w="100%" justify="space-between" direction="row" align="center">
        <Text w="128px">Showing {jobs.length} jobs</Text>
        {!isLoading && jobs.length >= 50 && (
          <Button
            w="120px"
            bgColor="gray.700"
            _hover={{ bgColor: "gray.600" }}
            color="white"
            onClick={loadMore}
          >
            Load More
          </Button>
        )}
      </Stack>
      <List w="100%">
        {jobs ? (
          jobs.map((job) => (
            <JobCard
              setJobId={setJobId}
              setShowDetails={setShowDetails}
              key={job.id}
              {...job}
            />
          ))
        ) : (
          <Loading />
        )}
      </List>
    </Stack>
  );
};

export default JobBoard;
