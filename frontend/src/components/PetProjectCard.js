import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { MdPets } from 'react-icons/md';
import defaultImg from '../img/default.jpg'

class PetProjectCard extends Component {

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={defaultImg} />
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title><MdPets /> {this.props.petProject.name}</Card.Title>
                        <Card.Subtitle className="mb-2">
                            {this.props.petProject.shortDescription}
                        </Card.Subtitle>
                        <Card.Text>
                            Task: {this.props.petProject.task}
                        </Card.Text>
                        <Card.Link href={`/pet-projects/${this.props.petProject.name}`}>Details</Card.Link>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default PetProjectCard