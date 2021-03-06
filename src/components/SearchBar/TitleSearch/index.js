import React from "react";
import {
  FormLabel,
  Input,
  Icon,
  InputGroup,
  FormControl,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdBusinessCenter } from "react-icons/md";

const TitleSearch = ({ colorScheme, handleInputChange, description }) => {
  return (
    <FormControl id="title-search">
      <FormLabel hidden={true}>Search by job title or keyword</FormLabel>
      <InputGroup>
        <InputLeftElement
          top={{ base: "3px" }}
          left={{ base: "3px" }}
          pointerEvents="none"
          children={
            <Icon
              w={{ base: "24px" }}
              h={{ base: "24px" }}
              as={MdBusinessCenter}
              color={colorScheme}
            />
          }
        />
        <Input
          focusBorderColor="brand.primary"
          rounded={{ base: "8px", md: "8px 0 0 8px" }}
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          name="title"
          onChange={handleInputChange}
          w="100%"
          h={{ base: "48px" }}
          type="text"
          placeholder="Job Title or keyword"
        />
      </InputGroup>
    </FormControl>
  );
};

export default TitleSearch;
