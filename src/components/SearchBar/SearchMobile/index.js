import {
  Checkbox as Check,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  Box,
  useColorMode,
  IconButton,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TitleSearch from "../TitleSearch";
import StyledButton from "../../StyledButton";
import { FaFilter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const SearchMobile = ({
  queryJobs,
  setDescription,
  setLocation,
  setIsFullTimeOnly,
}) => {
  const [locationInput, setLocationInput] = useState("");
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colorScheme = useColorModeValue("default.darkGray", "default.light");

  let input = "";
  let on = "";

  const handleClick = (e) => {
    if (e.target.checked) {
      on = "on";
    }
  };

  const handleSave = () => {
    setLocation(input.replace(/\s/g, "_"));
    setIsFullTimeOnly(on);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    queryJobs();
  };

  const handleInputChange = (e) => {
    if (e.target.name === "title") {
      setDescription(e.target.value);
    }
  };

  const handleLocationChange = (e) => {
    input = e.target.value;
  };

  const Checkbox = () => {
    return (
      <FormControl id="checkbox">
        <Flex direction="row" align="center" h="24px">
          <FormLabel mt="6px" fontSize="16px">
            Full Time Only
          </FormLabel>
          <Check size="lg" onClick={handleClick} />
        </Flex>
      </FormControl>
    );
  };

  const LocationSearch = () => {
    return (
      <FormControl mb="8px" id="location-search">
        <FormLabel hidden={true}>Search by location</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon
                top="3px"
                left="3px"
                w="24px"
                h="24px"
                color={colorScheme}
                as={MdLocationOn}
              />
            }
          />
          <Input
            onChange={handleLocationChange}
            fontSize={{ base: "16px", md: "16px" }}
            w="100%"
            h="48px"
            type="text"
            placeholder="Location"
          />
        </InputGroup>
      </FormControl>
    );
  };

  return (
    <Box
      bg={colorMode === "light" ? "default.light" : "default.darkGray"}
      boxShadow="0px 2px 2px rgba(50, 50, 50, 0.12)"
      padding="16px"
      rounded="8px"
      w="90%"
      mx="auto"
      mb="32px"
    >
      <form action="" onSubmit={handleSubmit}>
        <Flex direction="column" p="8px" w="100%" justify="space-between">
          <Box mb="8px">
            <TitleSearch
              colorScheme={colorScheme}
              handleInputChange={handleInputChange}
            />
          </Box>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              bg={colorMode === "light" ? "default.light" : "default.darkGray"}
              color={
                colorMode === "light" ? "default.darkGray" : "default.light"
              }
            >
              <ModalHeader>Filter by location or type</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <LocationSearch />
                <Checkbox />
              </ModalBody>

              <ModalFooter>
                <StyledButton
                  onClick={handleSave}
                  bg="dodgerblue"
                  col="default.light"
                >
                  Save
                </StyledButton>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Flex w="100%" direction="row" justify="space-between">
            <IconButton onClick={onOpen} icon={<FaFilter />} />
            <StyledButton bg="dodgerblue" col="white">
              Search
            </StyledButton>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
};

export default SearchMobile;
