import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Jumbotron, Container } from 'reactstrap';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import three from './three.jpg';
import TierTwo from '../TierTwo/TierTwo';
import TierThree from '../TierThree/TierThree';
import TierFour from '../TierFour/TierFour'


class App extends Component{
  state ={
    sideDrawerOpen:false
  }
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }; 

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className={{height: '100%'}}>
        <Header />
        <React.Fragment>
          <Jumbotron fluid className="jumbocarousel">
            <Container fluid>
            <img className="picture" src={three} />
            </Container>
          </Jumbotron>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <TierTwo />
          <TierThree />
          <TierFour />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
