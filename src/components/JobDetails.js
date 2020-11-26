import React, { useState, useEffect } from "react";
import { Box, Heading, Icon, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "@reach/router";
import { FaCat } from "react-icons/fa";
import shuffle from "../utils/shuffleArray";

const JobDetails = ({
  setShowDetails,
  jobs,
  jobId,
  logos,
  colors,
  currentLogo,
  currentColor,
}) => {
  const { colorMode } = useColorMode();
  const [randomValue, setRandomValue] = useState();
  const [randomColValue, setRandomColValue] = useState();
  const [logo, setLogo] = useState();
  const [color, setColor] = useState();
  const [newLogo, setNewLogo] = useState();

  const randomise = () => {
    if (!randomValue) {
      const random = shuffle(logos);
      const randomCol = shuffle(colors);
      setRandomValue(random);
      setRandomColValue(randomCol);
    }
  };

  const getLogo = () => {
    if (!logo) {
      setLogo(logos.map((logo) => logo.name));
    }
  };

  const getColor = () => {
    if (!color) {
      setColor(colors.map((color) => color.value));
    }
  };

  useEffect(() => {
    getLogo();
    getColor();
  }, []);

  useEffect(() => {
    randomise();
    console.log(logo);
  }, [logo, color]);

  // useEffect(() => {
  //   if (logo && !newLogo) {
  //     setNewLogo(logos.map((logo) => logo.name === currentLogo));
  //   }
  // }, [randomValue]);

  useEffect(() => {
    if (logo) {
      setNewLogo(logos.map((logo) => logo.name === currentLogo));
    }
  }, [randomValue]);

  console.log(currentLogo);

  const job = jobs.filter((job) => job.id === jobId);
  const position = job[0];
  const description = position.description.replace(/<\/?[^>]+>/gi, "");

  const detailColor = colors.filter((color) => color.value === currentColor);

  return (
    <Box>
      <Link to="/">Click me to go back</Link>
      <Box
        display="grid"
        placeItems="center"
        rounded="8px"
        w="324px"
        h="80px"
        bg={color && detailColor[0].value}
      >
        <Heading
          fontSize="14px"
          lineHeight="2"
          textAlign="center"
          color="default.light"
        >
          {position.company}
        </Heading>
      </Box>
      <Text>{position.title}</Text>
      <Text>{position.company}</Text>
      <Text>{position.location}</Text>
      <Text>{position.type}</Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default JobDetails;
