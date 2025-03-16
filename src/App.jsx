import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import MyJOurney from './components/MyJourney'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <MyJOurney />
      <Skills />
      <div className="w-full h-screen bg-red-200"></div>
    </>
  )
}

export default App