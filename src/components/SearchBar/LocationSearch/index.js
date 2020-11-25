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

const LocationSearch = ({ colorScheme, handleInputChange, location }) => {
  return (
    <FormControl id="location-search">
      <FormLabel hidden={true}>Search by location</FormLabel>
      <InputGroup>
        <InputLeftElement
          top={{ base: 0, lg: "3px" }}
          pointerEvents="none"
          children={
            <Icon
              w={{ base: "20px", md: "24px" }}
              h={{ base: "20px", md: "24px" }}
              as={MdLocationOn}
              color={colorScheme}
            />
          }
        />
        <Input
          colorScheme={colorScheme}
          rounded="0 8px 8px 0"
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          onChange={handleInputChange}
          w="100%"
          h={{ base: "40px", lg: "48px" }}
          type="text"
          placeholder="Location"
        />
      </InputGroup>
    </FormControl>
  );
};

export default LocationSearch;
