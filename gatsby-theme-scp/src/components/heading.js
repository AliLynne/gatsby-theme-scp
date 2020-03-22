/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'

const Heading = ({ children }) => {
  return (
    <Flex sx={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 3
    }}>
      {children}
    </Flex>
  )
}

export default Heading
