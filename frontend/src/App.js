import React, { Component } from 'react';
import { Button, Nav, Navbar } from "react-bootstrap";
import { Route, NavLink, BrowserRouter, Switch, Status } from "react-router-dom";
import routes from './routes';


import HomePage from './Pages/HomePage';
import PetProjectPage from './Pages/PetProjectPage';
import NotFound from './Pages/NotFound';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">PET PROJECT</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Button variant="outline-info">Log in</Button>
          </Navbar>

          <div className="content">
            {/* <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/pet-projects/:petProjectName" component={PetProjectPage} />
              <Route component={NotFound} />
            </Switch> */}

            <Switch>
              {routes.map(route => (
                <Route {...route} />
              ))}
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }


}

export default App;
