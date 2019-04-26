import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Footer from './Footer';
import Moment from 'moment';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      selectedKeg: null
    };
    this.handleAddingNewKegToList =  this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleAddingNewKegToList.bind(this);
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateKegElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatekegElapsedWaitTime() {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.forEach((keg) =>
      keg.formattedWaitTime = (keg.timeOpen).fromNow(true)
    );
    this.setState({masterKegList: newMasterKegList});
  }

  handleAddingNewKegToList (newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newKeg.formattedWaitTime = (newKeg.timeOpen).fromNow(true);
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(keg){
    this.setState({selectedKeg: keg});
    alert('The selected kegis now: ' + this.state.selectedKeg.brand);
  }

  render() {
    return (
      <div classNme="page-container">
        <div className="content-wrap">
          <style global jsx>{`
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
            <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />}/>
            <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
            <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}  onKegSelection={this.handleChangingSelectedKeg} selectedKeg={this.state.selectedKeg}/>} />
            <Route component={Error404} />
          </Switch>
        </div>
        <Footer className="footer"/>
      </div>
    );
  }
}

export default App;
