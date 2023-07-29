import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetCSS from './theme/resetCss.js'
import GlobalStyle from './theme/globalStyle.js'
import { ThemeProvider } from 'styled-components'
import variables from './theme/variables.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={variables}>
      <ResetCSS />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)