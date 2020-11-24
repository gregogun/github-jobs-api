import React, { useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import useFetch from "../utils/hooks/useFetch";
import JobBoard from "./JobBoard";
import JobDetails from "./JobDetails";
import SearchBar from "./SearchBar";
import { Router } from "@reach/router";

const Main = () => {
  const [jobId, setJobId] = useState();
  const {
    jobs,
    ids,
    isLoading,
    queryJobs,
    loadMore,
    setDescription,
    setLocation,
    setIsFullTimeOnly,
  } = useFetch();
  const { colorMode } = useColorMode();

  console.log(jobs);

  return (
    <Box
      as="main"
      pt="32px"
      w="100vw"
      minH="100vh"
      bg={colorMode === "light" ? "neutral.100" : "default.dark"}
    >
      <SearchBar
        setDescription={setDescription}
        setLocation={setLocation}
        setIsFullTimeOnly={setIsFullTimeOnly}
        queryJobs={queryJobs}
      />
      <Router>
        <JobBoard
          path="/"
          jobs={jobs}
          isLoading={isLoading}
          loadMore={loadMore}
          setJobId={setJobId}
          queryJobs={queryJobs}
        />
        <JobDetails path="apply" jobs={jobs} jobId={jobId} />
      </Router>
    </Box>
  );
};

export default Main;
