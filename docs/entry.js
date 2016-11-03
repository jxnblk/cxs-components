
import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import App from './App'
import { cxs } from '../src'

if (typeof document !== 'undefined') {
  render(<App />, app)
}

export default (locals, cb) => {
  const html = renderToString(<App />)
  const css = cxs.css

  const page = (`<!DOCTYPE html>
    <style>${css}</style>
    <div id='app'>${html}</div>
    <script src='bundle.js'></script>
  `).replace(/^\s+/, '').trim()

  cb(null, page)
}

