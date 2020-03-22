/** @jsx jsx */
import { Container, jsx } from 'theme-ui'

const Main = ({ children }) => {
  return (
    <Container sx={{
      variant: 'layout.main'
    }}>
      {children}
    </Container>
  )
}

export default Main
