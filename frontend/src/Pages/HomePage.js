import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import PetProjectJumbotron from '../components/PetProjectJumbotron';
import PetProjectCardDeck from '../components/PetProjectCardDeck';
import PetProjectDataService from '../service/PetProjectDataService';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petProjects: []
        }
        this.refreshPetProjects = this.refreshPetProjects.bind(this)
    }

    refreshPetProjects() {
        PetProjectDataService.retrieveAllPetProjects()
            .then(response => {
                this.setState({ petProjects: response.data })
            });
    }

    componentDidMount() {
        this.refreshPetProjects();
    }
    
    render() {
        return (
            <Container >
                <PetProjectJumbotron />
                <PetProjectCardDeck
                    petProjects={this.state.petProjects}
                />
            </Container>
        )
    }
}

export default HomePage