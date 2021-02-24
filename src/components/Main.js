import React, { useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import useFetch from "../utils/hooks/useFetch";
import JobBoard from "./JobBoard";
import JobDetails from "./JobDetails";
import { Router } from "@reach/router";
import CompanyLogos from "../assets/CompanyLogos";

const Main = () => {
  const [jobId, setJobId] = useState();
  const { colorMode } = useColorMode();
  const { jobs } = useFetch();
  const { logos, colors } = CompanyLogos();
  const [currentLogo, setCurrentLogo] = useState();
  const [currentColor, setCurrentColor] = useState();

  return (
    <Box
      as="main"
      w="100%"
      minH="100vh"
      bg={colorMode === "light" ? "neutral.100" : "default.dark"}
    >
      <Router>
        <JobBoard
          path="/"
          setJobId={setJobId}
          logos={logos}
          setCurrentLogo={setCurrentLogo}
          colors={colors}
          setCurrentColor={setCurrentColor}
        />
        <JobDetails
          path="apply"
          jobId={jobId}
          jobs={jobs}
          logos={logos}
          colors={colors}
          currentLogo={currentLogo}
          currentColor={currentColor}
        />
      </Router>
    </Box>
  );
};

export default Main;
