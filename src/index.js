
import React from 'react'
import cxs from 'cxs'
import classnames from 'classnames'
import merge from 'merge'

const getStyleObj = props => styles => {
  return typeof styles === 'function'
    ? styles(props)
    : typeof styles === 'object'
    ? styles
    : null
}

const comp = (Tag = 'div') => (style, {
  defaultProps = {},
  removeProps = []
} = {}) => {
  const Comp = ({
    css,
    ...rest
  }) => {
    const props = Object.assign({}, rest)

    // Pass style to child component
    if (typeof Tag === 'function') {
      props.css = getStyleObj({ css, ...props })(style)
    }

    // Merge style if props.css is passed through
    // Currently this creates additional classNames
    const mergedStyles = merge.recursive(getStyleObj({ css, ...props })(style), css)

    const cx = classnames(props.className,
      cxs(mergedStyles)
    )

    // Manually remove style props
    removeProps.forEach(key => {
      delete props[key]
    })

    return <Tag {...props} className={cx} />
  }

  Comp.defaultProps = defaultProps

  return Comp
}

comp.cxs = cxs

export { default as cxs } from 'cxs'

export default comp

