/** @jsx jsx */
import { Card, Text, jsx } from "theme-ui";

const Notice = props => {
  return (
    <Card variant="primary" p={3} width="50%" m={2}>
      <Text>{props.message}</Text>
    </Card>
  );
};

export default Notice;
