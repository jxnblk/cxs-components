
# cxs components

Styled UI component primitives for React

```sh
npm i -S cxs-components
```

## Usage

cxs components' API is inspired by
[styled-components](https://github.com/styled-components/styled-components)
but instead of tagged template literals it uses plain JavaScript objects,
which allow for the use of native JavaScript types without the need to use escape syntax.

> Template literals work well for long embedded DSLs. Unfortunately the syntax noise is substantial when you exit in and out of embedded arbitrary ECMAScript expressions with identifiers in scope.

- [Facebook JSX](https://facebook.github.io/jsx/#why-not-template-literals)

cxs component helps enforce separation of style and business logic by promoting pure functional UI components – i.e. presentational or "dumb" components.

```js
import React from 'react'
import comp from 'cxs-components'

const Box = comp('div')({
  padding: 32
})

const RedBox = comp(Box)({
  backgroundColor: 'tomato'
})

const App = () => (
  <div>
    <Box>Hello</Box>
    <RedBox>Red</RedBox>
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
  removeProps: [
    'big'
  ]
})
```


MIT License
