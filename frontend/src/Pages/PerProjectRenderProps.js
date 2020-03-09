import React, { Component } from 'react';
import PetProjectDataService from '../service/PetProjectDataService';
import PetProjectPage from './PetProjectPage';

class PetProjectRenderProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            isFetched: false,
            petProject: null
        };
    }

    render = () => <PetProjectPage petProject={this.state.petProject}
        isFetching={this.state.isFetching}
        isFetched={this.state.isFetched}
    />

    componentDidMount() {
        this.fetchPetProject();
    }

    fetchUsersWithAxios = () => {
        this.setState({ ...this.state, isFetching: true });

        PetProjectDataService.retrievePetProjectByName(this.props.match.params.petProjectName)
            .then(response => {
                this.setState({ petProject: response.data, isFetching: false, isFetched: true })
            });

    };

    fetchPetProject = this.fetchUsersWithAxios

}

export default PetProjectRenderProps;