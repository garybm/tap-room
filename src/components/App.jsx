import React from 'react'
import Header from './Header'
import KegList from './KegList'
import NewKegForm from './NewKegForm'
import EditKeg from './EditKeg'
import { Switch, Route } from 'react-router-dom'


function App(){
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList}/>
        <Route exact path='/newkeg' component={NewKegForm}/>
        <Route exact path='/editkeg' component={EditKeg}/>
      </Switch>
    </div>
  )
}

export default App
