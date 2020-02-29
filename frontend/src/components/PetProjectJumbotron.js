import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class PetProjectJumbotron extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>MY PET PROJECT</h1>
                <p>... is a pet project about pet projects</p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        )
    }
}

export default PetProjectJumbotron