import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav.jsx'
import Header from './header.jsx'
import AboutMe from './about_me.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Nav />
      <Header />
      <AboutMe />
  </StrictMode>,
)
