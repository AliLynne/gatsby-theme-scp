import React from 'react'
import { Container } from 'theme-ui'
import Notice from '../components/notice'

const Sidebar = () => {
  return (
    <Container sx={{ variant: "layout.sidebar" }} >
      <Notice message="The voting period for 144-Hour Jam Contest entries has started! Thank you for participating!" variant="red"/>
    </Container>
  )
}

export default Sidebar
