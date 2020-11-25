import React, { useState, useEffect } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import useFetch from "../utils/hooks/useFetch";
import JobBoard from "./JobBoard";
import JobDetails from "./JobDetails";
import SearchBar from "./SearchBar";
import { Router } from "@reach/router";
import CompanyLogos from "../assets/CompanyLogos";
import shuffle from "../utils/shuffleArray";

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
  const { logos, colors } = CompanyLogos();
  const [currentLogo, setCurrentLogo] = useState();

  console.log("current log is", currentLogo);

  useEffect(() => {
    const logo = logos.map((logo) => logo.name);
    const color = colors.map((color) => color.value);

    const randomLogoIndex = shuffle(logos);
    const randomColorIndex = shuffle(colors);
    setCurrentLogo(logos[randomLogoIndex]);
  }, []);

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
          logo={currentLogo}
        />
        <JobDetails path="apply" jobs={jobs} jobId={jobId} logo={currentLogo} />
      </Router>
    </Box>
  );
};

export default Main;
