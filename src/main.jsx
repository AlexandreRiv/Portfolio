import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav.jsx'
import Header from './header.jsx'
import AboutMe from './about_me.jsx'
import Formation from './formation.jsx'
import Competences from './competences.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Nav />
      <Header />
      <AboutMe />
      <Formation />
      <Competences />
      <Projects />
      <Contact />
  </StrictMode>,
)
