/** @jsx jsx */
import { Box, Flex, Text, Heading as ThemeHeading, jsx } from "theme-ui";
import Header from "../components/header";
import Card from "../components/notice";
import Divider from "../components/divider";
import Heading from '../components/heading';
import Main from '../components/main';
import Sidebar from '../components/sidebar';

const ThemeLayout = () => {
  return (
    <Box>
      <Header />
      <Flex sx={{ variant: "layout.page" }}>
        <Sidebar />
        <Main>
          <Heading>
            <Text color="primary">WARNING: THE FOUNDATION DATABASE IS</Text>
            <ThemeHeading as="h2" color="primary">CLASSIFIED</ThemeHeading>
            <Text color="primary">ACCESS BY UNAUTHORIZED PERSONNEL IS STRICTLY PROHIBITED</Text>
            <Text color="primary">
              PERPETRATORS WILL BE TRACKED, LOCATED, AND DETAINED
          </Text>
          </Heading>
          <Divider />
          <Card message="The voting period for 144-Hour Jam Contest entries has started! Thank you for participating!" />
        </Main>
      </Flex>
    </Box>
  );
};

export default ThemeLayout;
