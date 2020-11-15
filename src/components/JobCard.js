import React from "react";
import { Box, Heading, ListItem, Text } from "@chakra-ui/react";

const JobCard = ({
  id,
  created_at,
  type,
  title,
  company,
  location,
  setShowDetails,
  setJobId,
}) => {
  const handleClick = () => {
    setShowDetails(true);
    setJobId(id);
  };

  return (
    <ListItem
      rounded="4px"
      w="100%"
      h={["300px", "250px", "200px", "120px"]}
      bgColor="white"
      m="16px auto"
    >
      <Text cursor="pointer" onClick={handleClick}>
        {title}
      </Text>
      <Text>{created_at}</Text>
      <Text>{type}</Text>
      <Text>{company}</Text>
    </ListItem>
  );
};

export default JobCard;
