import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class PetProjectCard extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{this.props.petProjectName}</Card.Title>
                    <Card.Text>
                        {this.props.petProjectShortDescription}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{this.props.petProjectTask}</small>
                </Card.Footer>
                <Button variant="outline-primary" type="button"
                    onClick={() => this.props.detailedView(this.props.petProjectName)}>Details</Button>
            </Card>
        )
    }
}

export default PetProjectCard