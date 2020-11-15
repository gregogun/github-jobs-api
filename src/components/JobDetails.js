import { Box } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";

const JobDetails = ({ setShowDetails, jobs, jobId }) => {
  const job = jobs.filter((job) => job.id === jobId);
  const position = job[0];
  return (
    <Box>
      <h1>JobDetails</h1>
      <Text cursor="pointer" onClick={() => setShowDetails(false)}>
        Click me to go back
      </Text>
      <Text>{position.title}</Text>
    </Box>
  );
};

export default JobDetails;
