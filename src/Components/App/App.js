import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Jumbotron, Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import three from './three.jpg';
import Navigation from '../Navbar/Navbar';

function App() {
    
  return (
    <div className="App">
      <Header />
      <div>
        <Jumbotron fluid className="jumbocarousel">
          <Container fluid>
          <img src={three} width="1000"/>
          </Container>
        </Jumbotron>
        <Navigation />
           
      </div>
    </div>
  );
}

export default App;
