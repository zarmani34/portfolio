import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'

function App() {

  return (
    <>
      <Header />
      <Home />
      {/* <div className='h-screen w-full bg-blue-400' /> */}
      <About />
      {/* <div className='h-screen w-full bg-pink-400' /> */}
    </>
  )
}

export default App