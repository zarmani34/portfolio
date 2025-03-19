import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import MyJOurney from './components/MyJourney'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState("home");


  return (
    <>
      <Header activeSection={activeSection} />
      <Home setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <MyJOurney setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <ContactMe setActiveSection={setActiveSection} />
      <Footer setActiveSection={setActiveSection} />
    </>
  )
}

export default App