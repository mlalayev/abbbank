import './App.css'
import { useState } from 'react'
import Headroom from 'react-headroom'
import HOME from './components/home.jsx'
import HEADER from './components/headpart.jsx'
import FOOTER from './components/footpart.jsx'
import CurrencyRow from './components/CurrencyRow.jsx'


function App() {

  return (
    <>
      <HEADER />
      <HOME />
      <FOOTER />
      {/* <CurrencyRow/> */}
    </>
  )
}

export default App
