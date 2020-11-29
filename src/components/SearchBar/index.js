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
  const [isBiggerThan768] = useMediaQuery("(min-width: 768px");

  return (
    <>
      {isBiggerThan768 ? (
        <SearchDesktop
          setDescription={setDescription}
          setLocation={setLocation}
          setIsFullTimeOnly={setIsFullTimeOnly}
          queryJobs={queryJobs}
        />
      ) : (
        <SearchMobile
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
