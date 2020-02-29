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
                    petProjectName={petProject.name}
                    petProjectShortDescription={petProject.shortDescription}
                    petProjectTask={petProject.task}
                    detailedView={this.props.detailedView}
                    key={petProject.id}
                />
                ))}
            </CardDeck>
        )
    }
}

export default PetProjectCardDeck