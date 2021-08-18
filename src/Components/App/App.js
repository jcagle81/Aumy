import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import TierOne from '../TierOne/TierOne';
import TierTwo from '../TierTwo/TierTwo';
import TierThree from '../TierThree/TierThree';
import TierFour from '../TierFour/TierFour';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Kinder from '../kinder/kinder';
import Junior from '../Junior/Junior';
import Senior from '../Senior/Senior';
import News from '../News/New';
import Album from '../Album/Album';
import { Route } from 'react-router-dom';

class App extends Component{
  constructor(){
    super()
      this.state ={
        sideDrawerOpen:false
      }
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
        <React.Fragment>
          <Header />
          <Route 
            path='/'
            render={() =>(
              <React.Fragment>
                <TierOne />
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {this.state.sideDrawerOpen && <Backdrop click={this.backdropClickHandler} />}
                <TierTwo />
                <TierThree />
                <TierFour />  
              </React.Fragment>                       
            )}
            exact
          />
          <Route 
            path='/AboutUs'
            render={() => (
              <React.Fragment>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <AboutUs />
              </React.Fragment>
            )}
          />
          <Route 
            path='/Kinder'
            render={() => (
              <React.Fragment>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Kinder />
              </React.Fragment>
            )}
          />
          <Route 
            path='/Junior'
            render={() => (
              <React.Fragment>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Junior />
              </React.Fragment>
            )}
          />
          <Route 
            path='/Senior'
            render={() => (
              <React.Fragment>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Senior />
              </React.Fragment>
            )}
          />
          <Route 
            path='/News'
            render={() => (
              <React.Fragment>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <News />
              </React.Fragment>
            )}
          />
          <Route 
            path='/Album'
            render={() => (
              <React.Fragment>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Album />
              </React.Fragment>
            )}
          />
          
          <Footer />
          
        </React.Fragment>
      </div>
    
    );
  }
}

export default App;
