import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherelement=(
  <a href="https://google.com" target="_blank">Click to open Google</a>
)

const newelement=React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
    'click to open google'
)

createRoot(document.getElementById('root')).render(
  
    newelement
  
)
