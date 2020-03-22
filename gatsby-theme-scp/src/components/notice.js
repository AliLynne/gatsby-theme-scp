/** @jsx jsx */
import { Card, Text, jsx } from "theme-ui";

const Notice = ({ message, variant }) => {
  return (
    <Card variant={variant || 'primary'} p={3} width="50%" m={2}>
      <Text>{message}</Text>
    </Card>
  );
};

export default Notice;
