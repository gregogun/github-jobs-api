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
  Button,
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import TitleSearch from "../TitleSearch";
import StyledButton from "../../StyledButton";
// import SearchModal from "../Modal.js";
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

  console.log("updated", locationInput);

  const handleClick = (e) => {
    if (e.target.checked) {
      setIsFullTimeOnly("on");
    }
  };

  const handleSave = () => {
    setLocation(locationInput);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search fired");
    queryJobs();
  };

  const handleInputChange = (e) => {
    console.log("input here");
    if (e.target.name === "title") {
      setDescription(e.target.value);
    } else {
      setLocationInput(e.target.value);
    }
  };

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value);
  };

  const SearchModal = ({ modalTitle }) => {
    console.log("rendered modal");
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LocationSearch />
            <Checkbox />
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSave} bg="dodgerblue" color="default.light">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  const Checkbox = () => {
    return (
      <FormControl id="checkbox">
        <Flex direction="row" align="center" h="24px">
          <FormLabel mt="6px" fontSize="14px">
            Full Time Only
          </FormLabel>
          <Check onClick={handleClick} />
        </Flex>
      </FormControl>
    );
  };

  const LocationSearch = () => {
    return (
      <FormControl id="location-search">
        <FormLabel hidden={true}>Search by location</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={MdLocationOn} color="gray.500" />}
          />
          <Input
            value={locationInput}
            onChange={handleLocationChange}
            rounded="0 8px 8px 0"
            fontSize={{ base: "14px", md: "16px" }}
            w="100%"
            h="40px"
            type="text"
            placeholder="Location"
          />
        </InputGroup>
      </FormControl>
    );
  };

  return (
    <Box
      // display={{ base: "block", md: "none" }}
      bg={colorMode === "light" ? "default.light" : "default.darkGray"}
      boxShadow="2px 
    2px 4px 0 rgba(50, 50, 50, 0.12)"
      padding="16px"
      rounded="8px"
      w="90%"
      mx="auto"
      mb="32px"
    >
      <form action="" onSubmit={handleSubmit}>
        <Flex
          direction="column"
          // bg="grey"
          p="8px"
          w="100%"
          justify="space-between"
        >
          <Box mb="8px">
            <TitleSearch handleInputChange={handleInputChange} />
          </Box>

          <Modal hidden={true} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Filter by location or type</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <LocationSearch />
                <Checkbox />
              </ModalBody>

              <ModalFooter>
                <Button
                  onClick={handleSave}
                  bg="dodgerblue"
                  color="default.light"
                >
                  Save
                </Button>
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
