import './App.css'
import { useState } from 'react'
import Headroom from 'react-headroom'
import HEADER from './components/headpart.jsx'
import FOOTER from './components/footpart.jsx'
import HOME from './components/home.jsx'


function App() {

  return (
    <>
      <HEADER />
      <HOME />
      <FOOTER />
    </>
  )
}

export default App
