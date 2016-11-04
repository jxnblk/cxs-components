
import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import App from './App'
import { cxs } from '../src'

if (typeof document !== 'undefined') {
  render(<App />, app)
}

const min = s => s.replace(/^s+|\n|\s\s+/g, '').trim()

export default (locals, cb) => {
  const html = renderToString(<App />)
  const css = cxs.css

  const page = (`<!DOCTYPE html>
    <style>*{box-sizing:border-box}body{margin:0}${css}</style>
    <div id='app'>${html}</div>
    <script src='bundle.js'></script>
    <script id='twitter-wjs' src='//platform.twitter.com/widgets.js'></script>
  `)

  cb(null, page)
}

