import React, { Component } from 'react';
import { Button, Nav, Navbar} from "react-bootstrap";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import PetProjectApp from './components/PetProjectApp'
import PetProjectJumbotron from './components/PetProjectJumbotron'
import PetProjectDataService from './service/PetProjectDataService'
import PetProjectCardDeck from './components/PetProjectCardDeck';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petProjects: [],
      message: null
  }
    this.refreshPetProjects = this.refreshPetProjects.bind(this)
  }

  componentDidMount() {
    this.refreshPetProjects();
  }

  refreshPetProjects() {
    PetProjectDataService.retrieveAllPetProjects()
      .then(response => {
        
        this.setState({ petProjects: response.data })
      });
  }

  detailedView(petProjectName) {
    PetProjectDataService.retrievePetProjectByName(petProjectName)
    .then(response => {
      console.log(response);
    }) 
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">PET PROJECT</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Button variant="outline-info">Log in</Button>
        </Navbar>

        <PetProjectJumbotron />
        <PetProjectApp />
        <PetProjectCardDeck 
          petProjects={this.state.petProjects}
          detailedView={this.detailedView}
        />
      </div>
    );
  }
}

export default App;
