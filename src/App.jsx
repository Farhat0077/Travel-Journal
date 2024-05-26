import { useState } from 'react'

import './App.css'
import Data from './assets/Data'
import Info from './assets/Info'
import Head from './assets/Head'
import Foot from './assets/footer'

export default function App() {
 const data=Info.map(item => {
  return(
    <Data item={item}/>
  )
 })
  return (
     <div className='journal-sheet'> 
      <Head/>
      {data}
      <Foot/>
     </div>
  )
}

