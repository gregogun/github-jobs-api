import { theme, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import SearchDesktop from "./SearchDesktop";
import SearchMobile from "./SearchMobile";

const SearchBar = ({ queryJobs }) => {
  const [isLessThanMd] = useMediaQuery("(max-width: 47em");

  return (
    <>
      {isLessThanMd ? (
        <SearchMobile queryJobs={queryJobs} />
      ) : (
        <SearchDesktop queryJobs={queryJobs} />
      )}
    </>
  );
};

export default SearchBar;
