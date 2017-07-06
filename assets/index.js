import React from 'react'
import { render } from 'react-dom'
import './styles/main.scss'
import App from './js/App'

const rootElement = document.getElementById('app-root')

render(<App />, rootElement)