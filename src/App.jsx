import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import MyJOurney from './components/MyJourney'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <MyJOurney />
    </>
  )
}

export default App