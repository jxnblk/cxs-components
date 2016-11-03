
import React from 'react'
import comp from '../src'
import styles from './styles'

const { typescale, breakpoints, colors } = styles

export const Page = comp('div')({
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  lineHeight: 1.5,
  padding: 48,
  color: colors.black
})

export const Title = comp('h1')({
  fontSize: typescale[2],
  [breakpoints.medium]: {
    fontSize: typescale[1]
  },
  [breakpoints.large]: {
    fontSize: typescale[0]
  },
})

export const Button = comp('button')({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 600,
  padding: 8,
  color: 'white',
  backgroundColor: colors.blue,
  borderRadius: 2,
  border: '1px solid transparent',
  appearance: 'none',
  ':hover': {
    backgroundColor: colors.darkblue(1/2)
  }
})

export const RedButton = comp(Button)({
  backgroundColor: colors.red,
  ':hover': {
    backgroundColor: colors.darkred(1/2)
  }
})

export const Box = comp('div')((props) => ({
  padding: props.big ? 64 : 32,
  color: colors[props.color] || props.color,
  backgroundColor: colors[props.bg] || props.bg,
}), {
  removeProps: [
    'big', 'color', 'bg'
  ]
})

