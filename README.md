
# ϟ cxs-components

Styled UI component primitives for React - built with cxs

```sh
npm install cxs-components
```


## Features

- 7 KB
- Simple API to quickly create UI components
- Performant, functional CSS-in-JS
- Uses native JavaScript objects
- Avoids style collisions with hashed class selectors
- Supports pseudoclasses, media queries, and keyframes

cxs-components' API is inspired by
[styled-components](https://github.com/styled-components/styled-components)
but instead of tagged template literals it uses plain JavaScript objects,
which allow for the use of native JavaScript types without the need to escape embedded CSS.

For reasons similar to the motivations behind JSX, this is preferred over embedded CSS syntax.

> Template literals work well for long embedded DSLs. Unfortunately the syntax noise is substantial when you exit in and out of embedded arbitrary ECMAScript expressions with identifiers in scope.
– Facebook JSX

cxs-components helps enforce separation of style and business logic by promoting pure functional UI components – i.e. presentational or "dumb" components.


## Usage

```js
import React from 'react'
import comp from 'cxs-components'

const Box = comp('div')({
  padding: 32
})

const TomatoBox = comp(Box)({
  backgroundColor: 'tomato'
})

const App = () => (
  <div>
    <Box>
      Hello
    </Box>
    <TomatoBox>
      Tomato
    </TomatoBox>
  </div>
)
```

### API

```js
import comp from 'cxs-component'
// create component function

comp(tagName)(style, options)
// Returns a functional React component
```

- `tagName` can be either a DOM element string or a React component
- `style` can be a style object or a function that returns a style object
- `options` is an optional object to pass options to the component creation function


### Functional styles

A function can be passed as the style argument to use props to control styling.

```js
const Box = comp('div')(props => ({
  padding: props.big ? 64 : 32
}))

const App = () => (
  <Box big>Big Box</Box>
)
```

By default, all props are pass on to child elements.
To ensure non-standard DOM attributes are not passed on,
specify a `removeProps` array in the options object.

```js
const Box = comp('div')(props => ({
  padding: props.big ? 64 : 32
}), {
  // Clean up after yourself 🛁
  removeProps: [
    'big'
  ]
})
```

### Pseudoclasses

cxs supports pseudoclasses.

```js
const Link = comp('a')({
  color: blue,
  ':hover': {
    color: darkblue
  }
})
```

### Media queries

```js
const Heading = comp('h2')({
  fontSize: 32,
  margin: 0,
  '@media screen and (min-width: 52em)': {
    fontSize: 48
  }
})
```

### Server-Side Rendering

To render cxs components server-side extract the CSS string after rendering the application tree.

```js
const { createElement } = require('react')
const { renderToString } = require('react-dom/server')
const { cxs } = require('cxs-components')

const render = (req, res) => {
  const html = renderToString(
    createElement(App)
  )
  const css = cxs.css

  return (`<!DOCTYPE html>
    <style>${css}</style>
    ${html}`).replace(/^\s+/, '')
}
```


## Related

- [cxs](https://github.com/jxnblk/cxs)
- [react-cxs](https://github.com/jxnblk/react-cxs)
- [styled-components](https://github.com/styled-components/styled-components)
- [glamor](https://github.com/threepointone/glamor)

[MIT License](LICENSE.md)

