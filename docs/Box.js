
import comp from '../src'
import { scale, colors } from './styles'
import withSpace from './withSpace'

/*
const s = prop => x => typeof x !== 'undefined'
  ? (
    x === 'auto'
    ? { [prop]: 'auto' }
    : { [prop]: scale[x] }
  ) : null

const mar = ({ m, mx, my }) => ({
  ...s('margin')(m),
  ...s('margin-left')(mx),
  ...s('margin-right')(mx),
  ...s('margin-top')(my),
  ...s('margin-bottom')(my)
})

const pad = ({ p, px, py }) => ({
  ...s('padding')(p),
  ...s('padding-left')(px),
  ...s('padding-right')(px),
  ...s('padding-top')(py),
  ...s('padding-bottom')(py)
})
*/

const Box = comp('div')(props => ({
  color: colors[props.color] || props.color,
  backgroundColor: colors[props.bg] || props.bg,
  border: props.border ? `4px solid ${colors[props.border] || props.border}` : null
}), {
  removeProps: [
    'big', 'color', 'bg', 'border',
  ]
})

export default withSpace(Box)

