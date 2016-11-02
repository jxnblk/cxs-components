
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
    <Div css={{ big: true }}>
      Red Box
    </Div>
  </Page>
)

ReactDOM.render(<App />, app)

