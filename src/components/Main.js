import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import JobBoard from "./JobBoard";
import JobDetails from "./JobDetails";

const Main = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { jobs, ids, isLoading, queryJobs, fetchData, loadMore } = useFetch();

  console.log(jobs);

  return (
    <Box as="main" w="100vw" minH="100vh" bgColor="gray.100">
      <h1>Main</h1>
      {showDetails ? (
        <JobDetails jobs={jobs} setShowDetails={setShowDetails} />
      ) : (
        <JobBoard
          jobs={jobs}
          isLoading={isLoading}
          queryJobs={queryJobs}
          loadMore={loadMore}
          setShowDetails={setShowDetails}
        />
      )}
    </Box>
  );
};

export default Main;
