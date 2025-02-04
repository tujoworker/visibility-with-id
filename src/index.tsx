import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import '@dnb/eufemia/style'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <>
    <App />
  </>
)
