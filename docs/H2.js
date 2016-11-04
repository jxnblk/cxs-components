
import comp from '../src'
import { typescale } from './styles'

const H2 = comp('h2')(props => ({
  fontSize: typescale[props.size] || typescale[3],
  lineHeight: 1.25,
  margin: 0
}), {
  removeProps: [ 'size' ]
})

export default H2

