
import React from 'react'
import cxs from 'cxs'
import classnames from 'classnames'
import merge from 'merge'

// How can arbitrary style props be removed
// from the rendered component without needing a list of DOM attributes?
const getStyleObj = props => styles => {
  return typeof styles === 'function'
    ? styles(props)
    : typeof styles === 'object'
    ? styles
    : null
}

const styled = (Tag = 'div') => (styles) => {
  const Comp = ({
    _css,
    css,
    ...rest
  }) => {

    const props = Object.assign({}, rest)
    // Pass styles to child component
    if (typeof Tag === 'function') {
      props._css = getStyleObj({ css, ...props })(styles)
    }

    // Merge styles if props._css is passed through
    // Currently this creates additional classNames
    const mergedStyles = merge.recursive(getStyleObj({ css, ...props })(styles), _css)

    const cx = classnames(props.className,
      cxs(mergedStyles)
    )

    return <Tag {...props} className={cx} />
  }

  return Comp
}

styled.cxs = cxs

export default styled

