
import React from 'react'
import {
  compose,
  withProps,
  withState
} from 'recompose'
import {
  Page,
  Title,
  Box,
  Div,
  Button,
  RedButton
} from './primitives'

const colors = [
  '#0cf',
  '#c0f',
  '#cf0'
]

const App = ({
  counter,
  increment,
  decrement
}) => {
  const color = colors[counter % 3]

  return (
    <Page>
      <Title>Hello</Title>
      <Box bg={color}>
        <Title>{counter}</Title>
        <Button
          onClick={decrement}
          children='Boop -' />
        <RedButton
          onClick={increment}
          children='Boop +' />
      </Box>
      <Box bg='red'>
        Red Box
      </Box>
    </Page>
  )
}

const hoc = compose(
  withState('counter', 'setCounter', 0),
  withProps(({ setCounter }) => ({
    increment: () => setCounter(n => n + 1),
    decrement: () => setCounter(n => n - 1)
  }))
)

export default hoc(App)

