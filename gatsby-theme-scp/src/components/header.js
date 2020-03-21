/** @jsx jsx */
import React from "react";
import { Flex, Button, useColorMode, jsx } from "theme-ui";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Flex
      as="header"
      sx={{
        backgroundImage: t => t.gradients.header,
        p: 5
      }}
    >
      <Button
        sx={{
          alignSelf: "end"
        }}
        onClick={e =>
          setColorMode(colorMode === "default" ? "dark" : "default")
        }
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
};

export default Header;
