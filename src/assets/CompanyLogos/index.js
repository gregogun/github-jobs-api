import React from "react";
import {
  FaAirbnb,
  FaBullseye,
  FaBurn,
  FaCampground,
  FaCat,
  FaDiceD6,
  FaDotCircle,
  FaFire,
  FaMeteor,
  FaPuzzlePiece,
  FaRecordVinyl,
} from "react-icons/fa";

const CompanyLogos = () => {
  // const logos = [
  //   { name: FaCat, id: 0 },
  //   { name: FaBullseye, id: 1 },
  //   { name: FaBurn, id: 2 },
  //   { name: FaCampground, id: 3 },
  //   { name: FaRecordVinyl, id: 4 },
  //   { name: FaPuzzlePiece, id: 5 },
  //   { name: FaMeteor, id: 6 },
  //   { name: FaFire, id: 7 },
  //   { name: FaDotCircle, id: 8 },
  //   { name: FaDiceD6, id: 9 },
  // ];

  const logos = [
    FaCat,
    FaBullseye,
    FaBurn,
    FaCampground,
    FaRecordVinyl,
    FaPuzzlePiece,
    FaMeteor,
    FaFire,
    FaDotCircle,
    FaDiceD6,
  ];

  const colors = [
    { value: "#e04343", id: 0 },
    { value: "#f97538", id: 1 },
    { value: "#ffba32", id: 2 },
    { value: "#71a238", id: 3 },
    { value: "#3aa67e", id: 4 },
    { value: "#3a94a6", id: 5 },
    { value: "#5083e8", id: 6 },
    { value: "#9a71f3", id: 7 },
    { value: "#e46a9b", id: 8 },
    { value: "#949494", id: 9 },
    { value: "#957b6a", id: 11 },
    { value: "#7d956a", id: 12 },
    { value: "#6a9590", id: 13 },
    { value: "#6d6a95", id: 14 },
    { value: "#bb4e4f", id: 15 },
    { value: "#2887bf", id: 15 },
    { value: "#94858a", id: 15 },
  ];

  return { logos, colors };
};

export default CompanyLogos;
