
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Page,
  Title,
  Box,
  Div,
  Button,
  RedButton
} from './primitives'

const App = () => (
  <Page>
    <Title>Hello</Title>
    <Box>
      <Button children='Boop' />
      <RedButton children='Boop' />
    </Box>
    <Box bg='red'>
      Red Box
    </Box>
  </Page>
)

ReactDOM.render(<App />, app)

