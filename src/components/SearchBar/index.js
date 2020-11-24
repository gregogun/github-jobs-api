import { theme, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import SearchDesktop from "./SearchDesktop";
import SearchMobile from "./SearchMobile";

const SearchBar = ({
  queryJobs,
  setDescription,
  setLocation,
  setIsFullTimeOnly,
}) => {
  const [isLessThanMd] = useMediaQuery("(max-width: 47em");

  return (
    <>
      {isLessThanMd ? (
        <SearchMobile
          setDescription={setDescription}
          setLocation={setLocation}
          setIsFullTimeOnly={setIsFullTimeOnly}
          queryJobs={queryJobs}
        />
      ) : (
        <SearchDesktop
          setDescription={setDescription}
          setLocation={setLocation}
          setIsFullTimeOnly={setIsFullTimeOnly}
          queryJobs={queryJobs}
        />
      )}
    </>
  );
};

export default SearchBar;
