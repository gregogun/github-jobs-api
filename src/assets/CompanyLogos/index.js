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
  const logos = [
    { name: FaCat, id: 0 },
    { name: FaBullseye, id: 1 },
    { name: FaBurn, id: 2 },
    { name: FaCampground, id: 3 },
    { name: FaRecordVinyl, id: 4 },
    { name: FaPuzzlePiece, id: 5 },
    { name: FaMeteor, id: 6 },
    { name: FaFire, id: 7 },
    { name: FaDotCircle, id: 8 },
    { name: FaDiceD6, id: 9 },
  ];

  const colors = [
    { value: "#e04343", id: "0" },
    { value: "#f97538", id: "1" },
    { value: "#ffba32", id: "2" },
    { value: "#71a238", id: "3" },
    { value: "#3aa67e", id: "4" },
    { value: "#3a94a6", id: "5" },
    { value: "#5083e8", id: "6" },
    { value: "#9a71f3", id: "7" },
    { value: "#e46a9b", id: "8" },
    { value: "#949494", id: "8" },
    { value: "#404040", id: "8" },
  ];

  return { logos, colors };
};

export default CompanyLogos;
