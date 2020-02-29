import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import PetProjectPage from '../Pages/PetProjectPage';

class PetProjectCard extends Component {

    render() {
        return (
            <Card>
                <Card.Img variant="top" src="holder.js/50px80" />
                <Card.Body>
                    <Card.Title><Link to={'/pet-projects/' + this.props.petProject.name}>{this.props.petProject.name}</Link></Card.Title>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        {this.props.petProject.shortDescription}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{this.props.petProject.task}</small>
                </Card.Footer>
                <Button variant="outline-primary" type="button"
                    onClick={() => this.props.detailedView(this.props.petProject.name)}>Details</Button>
                
            </Card>
        )
    }
}

export default PetProjectCard