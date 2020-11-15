import { Box } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";

const JobDetails = ({ jobs, setShowDetails }) => {
  return (
    <Box>
      <h1>JobDetails</h1>
      <Text cursor="pointer" onClick={() => setShowDetails(false)}>
        Click me to go back
      </Text>
    </Box>
  );
};

export default JobDetails;
