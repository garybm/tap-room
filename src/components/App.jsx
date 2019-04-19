import React from 'react'
import Header from './Header'
import KegList from './KegList'
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header/>
      <KegList/>
    </div>
  )
}

export default App
