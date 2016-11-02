
const React = require('react')
const cxs = require('cxs').default
const classnames = require('classnames')

const styled = (Tag = 'div') => (styles) => {
  const Comp = (props) => {
    const styleObj = typeof styles === 'function'
      ? styles(props)
      : typeof styles === 'object'
      ? styles
      : null

    const cx = classnames(props.className, cxs(styleObj))

    return <Tag {...props} className={cx} />
  }

  return Comp
}

styled.cxs = cxs

module.exports = styled

