import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import PetProjectCard from './PetProjectCard'

class PetProjectCardDeck extends Component {
    render() {
        return (
            <CardDeck>
                {this.props.petProjects.map(petProject => (
                    <PetProjectCard
                        petProject={petProject}
                        key={petProject.id}
                    />
                ))}
            </CardDeck>
        )
    }
}

export default PetProjectCardDeck