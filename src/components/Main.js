import React, { useState } from "react";
import { Box, Icon, useColorMode } from "@chakra-ui/react";
import useFetch from "../utils/hooks/useFetch";
import JobBoard from "./JobBoard";
import JobDetails from "./JobDetails";
import { Router } from "@reach/router";
import CompanyLogos from "../assets/CompanyLogos";
import { useEffect } from "react";

const Main = () => {
  const [jobId, setJobId] = useState();
  const { colorMode } = useColorMode();
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
  const { logos, colors } = CompanyLogos();
  const [currentLogo, setCurrentLogo] = useState();
  const [currentColor, setCurrentColor] = useState();

  useEffect(() => {
    console.log(currentLogo);
    console.log(currentColor);
  }, [currentColor, currentLogo]);

  return (
    <Box
      as="main"
      pt="32px"
      w="100vw"
      minH="100vh"
      bg={colorMode === "light" ? "neutral.100" : "default.dark"}
    >
      <Router>
        <JobBoard
          path="/"
          jobs={jobs}
          isLoading={isLoading}
          loadMore={loadMore}
          setJobId={setJobId}
          queryJobs={queryJobs}
          setDescription={setDescription}
          setLocation={setLocation}
          setIsFullTimeOnly={setIsFullTimeOnly}
          logos={logos}
          setCurrentLogo={setCurrentLogo}
          colors={colors}
          setCurrentColor={setCurrentColor}
        />
        <JobDetails
          path="apply"
          jobs={jobs}
          jobId={jobId}
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
