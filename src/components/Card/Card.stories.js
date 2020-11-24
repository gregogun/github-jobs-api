import React from "react";
import Card from "../Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const JobCard = () => (
  <Card
    title={"Junior UI Engineer - React, Nodejs, Python"}
    created_at={"8hrs ago"}
    type={"Full Time"}
    company={"Airbnb"}
    location={"London, New York"}
  />
);
