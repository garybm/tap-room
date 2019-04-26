import React from 'react'
import Header from './Header'
import KegList from './KegList'
import NewKegForm from './NewKegForm'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterKegList: [],
    }
    this.handleAddingKegToList =  this.handleAddingKegToList.bind(this)
  }

  handleAddingKegToList (newKeg){
    const newMasterKegList = this.state.masterKegList.slice()
    newMasterKegList.puch(newKeg)
    this.setState({masterKegList: newMasterKegList})
  }

  render() {
    return (
      <div classNme="page-container">
        <div className="content-wrap">
          <style global jsx>{`
              @import url('https://fonts.googleapis.com/css?family=Quicksand|Raleway');
              @import url('https://fonts.googleapis.com/css?family=Poppins:300|Quicksand|Raleway');
              @import url('https://fonts.googleapis.com/css?family=Nixie+One|Poppins:300|Quicksand|Raleway');
              body {
                background-color: black;
                margin: 0;
                padding: 0;
                color: #FFF;
                font-family: Quicksand;
              }
              .page-container {
                position: relative;
                min-height: 100vh;
              }
              //footer stick to the bottom values//
              .footer {
                position: absolute;
                bottom: 0;
                width: 100%;
                // height: 100px;            /* Footer height */
              }
              .content-wrap {
                padding-bottom: 100px;    /* Footer height */
              }
              `}</style>
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><KegList kegList={this.state.masterKegtList} />}/>
            <Route exact path='/newkeg' component={NewKegForm}/>
          </Switch>
        </div>
        <Footer className="footer"/>
      </div>
    )


  }
}

export default App
