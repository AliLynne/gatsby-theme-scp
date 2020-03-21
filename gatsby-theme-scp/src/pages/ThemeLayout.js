import React from "react";
import { Box } from "theme-ui";
import Header from "../components/header";
import Card from "../components/Card"

const ThemeLayout = () => {
  return (
    <Box>
      <Header />
      <Card message="The voting period for 144-Hour Jam Contest entries has started! Thank you for participating!" />
    </Box>
  );
};

export default ThemeLayout;
