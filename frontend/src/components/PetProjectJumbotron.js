import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

class PetProjectJumbotron extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>MY PET PROJECT</h1>
                    <p>... is a pet project about pet projects</p>
                </Container>
            </Jumbotron>
        )
    }
}

export default PetProjectJumbotron