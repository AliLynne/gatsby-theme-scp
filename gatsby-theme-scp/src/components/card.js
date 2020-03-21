/** @jsx jsx */
import React from "react";
import { Card as ThemeCard, Text, jsx } from "theme-ui";

const Card = props => {
  return (
    <ThemeCard variant="primary" p={3} width="50%">
      <Text>{props.message}</Text>
    </ThemeCard>
  );
};

export default Card;
