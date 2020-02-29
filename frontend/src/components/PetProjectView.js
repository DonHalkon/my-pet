import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class PetProjectView extends Component {
    render() {
        return (
            <Container >
                <h2>{this.props.petProjectName}</h2>
                <p class="px-5 mb-5 pb-3 lead grey-text">
                    {this.props.petProjectShortDescription}
                </p>
                <div class="col-10 col-md-9 col-lg-10 float-right">
                    <h4 class="font-weight-bold">Description</h4>
                    <p class="grey-text">{this.props.description}</p>
                </div>
                <div class="col-10 col-md-9 col-lg-10 float-right">
                    <h4 class="font-weight-bold">Task</h4>
                    <p class="grey-text">{ this.props.task }</p>
                </div>
                <div class="col-10 col-md-9 col-lg-10 float-right">
                    <h4 class="font-weight-bold">Tests</h4>
                    <p class="grey-text">{ this.props.test.join() }</p>
                </div>
            </Container>
        )
    }
}

export default PetProjectView