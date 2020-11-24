import React from "react";
import {
  FormLabel,
  Input,
  Icon,
  InputGroup,
  FormControl,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";

const LocationSearch = ({ handleInputChange, location }) => {
  return (
    <FormControl id="location-search">
      <FormLabel hidden={true}>Search by location</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={MdLocationOn} color="gray.500" />}
        />
        <Input
          rounded="0 8px 8px 0"
          fontSize={{ base: "14px", md: "16px" }}
          onChange={handleInputChange}
          w="100%"
          h="40px"
          type="text"
          placeholder="Location"
        />
      </InputGroup>
    </FormControl>
  );
};

export default LocationSearch;
