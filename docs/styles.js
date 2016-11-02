
import chroma from 'chroma-js'

const darken = c => n => chroma(c).darken(n).hex()

const black = '#20292f'
const blue = '#07c'
const red = '#f40'

const styles = {
  typescale: [
    72,
    64,
    48,
    32,
    16,
    14,
    12
  ],
  breakpoints: {
    small: '@media screen and (min-width:40em)',
    medium: '@media screen and (min-width:52em)',
    large: '@media screen and (min-width:64em)',
  },
  colors: {
    black,
    blue,
    red,
    darkblue: darken(blue),
    darkred: darken(red),
  }
}

export default styles

