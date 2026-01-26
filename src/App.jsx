import reactLogo from './assets/react.svg'
import Menu from './Menu'
import Canvas from './Canvas'
import Footer from './Foot'
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div>
      <Menu titulo="REACT PAINT" />
      <Canvas />
      <Footer />
    </div >
  )
}

export default App
