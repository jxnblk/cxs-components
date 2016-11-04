
import comp from '../src'
import { scale, colors } from './styles'
import withSpace from './withSpace'
import withColor from './withColor'


const Box = comp('div')({})

export default withSpace(withColor(Box))

