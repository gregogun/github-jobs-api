import {
  Checkbox as Check,
  Flex,
  FormControl,
  FormLabel,
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
import LocationSearch from "../LocationSearch";
import TitleSearch from "../TitleSearch";
import StyledButton from "../../StyledButton";
// import SearchModal from "../Modal.js";
import { FaFilter } from "react-icons/fa";

const SearchMobile = ({ queryJobs }) => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isFullTimeOnly, setIsFullTimeOnly] = useState("");
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (e) => {
    handleSubmit(e);
    onClose();
  };

  const SearchModal = ({ modalTitle, modalFooter, children }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <StyledButton
              onClick={() => console.log("hi")}
              bg="dodgerblue"
              col="white"
            >
              Filter
            </StyledButton>
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
          <Check
            onClick={() => setIsFullTimeOnly("checked" === true ? "off" : "on")}
          />
        </Flex>
      </FormControl>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search fired");
    console.log(isFullTimeOnly);
    console.log(location);
    console.log(description);
    queryJobs({
      location: location,
      description: description,
      isFullTimeOnly: isFullTimeOnly,
    });
  };

  const handleInputChange = (e) => {
    console.log("input here");
    if (e.target.name === "title") {
      setDescription(e.target.value);
      console.log(description);
    } else {
      setLocation(e.target.value);
    }
  };

  return (
    <Box
      // display={{ base: "block", md: "none" }}
      bg={colorMode === "light" ? "white" : "default.darkGray"}
      boxShadow="2px 
    2px 4px 0 rgba(50, 50, 50, 0.12)"
      padding="16px"
      rounded="8px"
      w="90%"
      mx="auto"
      mb="32px"
    >
      <Flex
        direction="column"
        // bg="grey"
        p="8px"
        w="100%"
        justify="space-between"
      >
        <form action="" onSubmit={handleSubmit}>
          <Box mb="8px">
            <TitleSearch
              description={description}
              handleInputChange={handleInputChange}
            />
          </Box>
          <Flex w="100%" direction="row" justify="space-between">
            <IconButton onClick={onOpen} icon={<FaFilter />} />
            <StyledButton bg="dodgerblue" col="white">
              Search
            </StyledButton>
          </Flex>
        </form>
      </Flex>
      <SearchModal modalTitle="Filter jobs">
        <LocationSearch
          location={location}
          handleInputChange={handleInputChange}
        />
        <Checkbox />
      </SearchModal>
    </Box>
  );
};

export default SearchMobile;
