import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "@reach/router";

const JobDetails = ({ setShowDetails, jobs, jobId }) => {
  const { colorMode } = useColorMode();

  const job = jobs.filter((job) => job.id === jobId);
  const position = job[0];
  const description = position.description.replace(/<\/?[^>]+>/gi, "");

  console.log(jobId, "Hello");

  return (
    <Box>
      <h1>JobDetails</h1>
      <Link to="/">Click me to go back</Link>
      <Text>{position.title}</Text>
      <Text>{position.company}</Text>
      <Text>{position.location}</Text>
      <Text>{position.type}</Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default JobDetails;
