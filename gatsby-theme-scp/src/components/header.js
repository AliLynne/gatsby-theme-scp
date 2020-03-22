/** @jsx jsx */
import { Flex, Button, useColorMode, jsx, Heading, Text } from "theme-ui";

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
      <Text variant="logo" as="h1">SCP Foundation</Text>
      <Text color="white">Secure, Contain, Protect</Text>
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
