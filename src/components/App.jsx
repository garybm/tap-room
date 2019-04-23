import React from 'react'
import Header from './Header'
import KegList from './KegList'
import NewKegForm from './NewKegForm'
import EditKeg from './EditKeg'
import { Switch, Route } from 'react-router-dom'


function App(){
  return (
    <div >
      <style global jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Quicksand|Raleway');
          @import url('https://fonts.googleapis.com/css?family=Poppins:300|Quicksand|Raleway');
          @import url('https://fonts.googleapis.com/css?family=Nixie+One|Poppins:300|Quicksand|Raleway');
          *{
            padding:0;
            margin:0;
          }
            `}</style>
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
