
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
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width,initial-scale=1'>
    <title>cxs-components</title>
    <meta name='description' content='Styled UI component primitives for React - built with cxs'>
    <meta name='twitter:card' content='summary'>
    <meta name='twitter:site' content='@jxnblk'>
    <meta name='twitter:title' content='cxs-components'>
    <meta name='twitter:description' content='Styled UI component primitives for React - built with cxs'>
    <meta name='twitter:image' content='card.png'>
    <style>*{box-sizing:border-box}body{margin:0}${css}</style>
    <div id='app'>${html}</div>
    <!--
    <script src='bundle.js'></script>
    -->
    <script id='twitter-wjs' src='//platform.twitter.com/widgets.js'></script>
  `)

  cb(null, page)
}

