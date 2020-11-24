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

const TitleSearch = ({ handleInputChange, description }) => {
  return (
    <>
      <FormControl id="title-search">
        <FormLabel hidden={true}>Search by job title or keyword</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={MdBusinessCenter} color="gray.500" />}
          />
          <Input
            rounded={{ base: "8px", md: "8px 0 0 8px" }}
            fontSize={{ base: "14px", md: "16px" }}
            name="title"
            value={description}
            onChange={handleInputChange}
            w="100%"
            h="40px"
            type="text"
            placeholder="Job Title or keyword"
          />
        </InputGroup>
      </FormControl>
    </>
  );
};

export default TitleSearch;
